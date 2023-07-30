

import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import {ChatCompletionRequestMessage, Configuration , OpenAIApi} from "openai";
import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";




const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  

const openai= new OpenAIApi(configuration);
const instructionMessage: ChatCompletionRequestMessage = {
    role: "system",
    content: " I'm seeking your expertise as a knowledgeable guide to provide me with a comprehensive overview of the immigration process to Canada. Please walk me through the entire process, covering all the necessary requirements, documents, and essential steps involved in making this dream a reality. Talk only about Immigration of Canada related questions. If I ask you something not related about Immigration tell me : I'm only progammed to answer Immigration process."
}




export async function POST(
    req: Request
) {
    try {
        const {userId} = auth();
        const body = await req.json();
        const {messages} = body;

        if (!userId){
            return new NextResponse("Unauthorized", {status:401})
        };

        if (!configuration.apiKey){
            return new NextResponse("OpenAI API Key not configured", {status: 500})
        };
        if (!messages){
            return new NextResponse("Messages are required",{status:400})
        };

        const freeTrial = await checkApiLimit();
        const isPro = await checkSubscription();

        if (!freeTrial && !isPro){
            return new NextResponse("Free trial has expired", {status: 403})
        }


        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [instructionMessage, ...messages]
        });
        if(!isPro){
            await incrementApiLimit()
        }
        return NextResponse.json(response.data.choices[0].message);
    } catch (error){
        console.log("[CODE_ERROR]", error);
        return new NextResponse("Internal error", {status:500});
    }
}