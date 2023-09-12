
import {OpenAI} from "langchain/llms/openai";
import {pinecone} from "@/utils/pinecone-client";
import {PineconeStore} from "langchain/vectorstores/pinecone";
import {OpenAIEmbeddings} from "langchain/embeddings/openai";
import {ConversationalRetrievalQAChain} from "langchain/chains";
import { PromptTemplate } from "langchain/prompts";
import { ChatOpenAI } from "langchain/chat_models/openai";


async function initChain() {
    const model = new ChatOpenAI({
        modelName: "gpt-3.5-turbo",
        temperature: 0,
      });    const pineconeIndex = pinecone.Index('canada');
    const vectorStore = await PineconeStore.fromExistingIndex(
        new OpenAIEmbeddings({}),
        {
            pineconeIndex: pineconeIndex,
            textKey: 'text',
        },
    );
    const prompt = PromptTemplate.fromTemplate(
        "I'm seeking your expertise as a knowledgeable guide to provide me with a comprehensive overview of the immigration process to Canada. Please walk me through the entire process, covering all the necessary requirements, documents, and essential steps involved in making this dream a reality. Talk only about Immigration of Canada related questions. If possible try to make an answer with a maximum of a 100 words. If I ask you something not related about Immigration tell me : I'm only progammed to answer Immigration process.make Titles inside ** **, make steps in <li></li>, make links in in <a href=''> </a>, make others titles in #"
      );

    return ConversationalRetrievalQAChain.fromLLM(
        model,
        vectorStore.asRetriever(),
        {returnSourceDocuments: true}
    );
    
}

export const chain = await initChain()