import { PineconeClient } from '@pinecone-database/pinecone';
import * as dotenv from "dotenv";
import { PineconeStore } from "langchain/vectorstores/pinecone";

if (!process.env.PINECONE_ENVIRONMENT || !process.env.PINECONE_API_KEY) {
    throw new Error('Pinecone environment or api key vars missing');
}

async function initPinecone() {
    try {
        const client = new PineconeClient();

        await client.init({
            apiKey: "cd4f4df8-d7ee-405e-86de-1f2c37485a14",
            environment: "us-west4-gcp-free",
        });


        return client;
    } catch (error) {
        console.log('error', error);
        throw new Error('Failed to initialize Pinecone Client');
    }
}

export const pinecone = await initPinecone();