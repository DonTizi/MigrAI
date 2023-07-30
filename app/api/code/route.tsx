

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
    content: " When I'll ask you, I would like a step by step simulation of the Canadian immigration process. Please guide me step by step through the process, starting with the initial stage of preparation. Begin with the first step of the simulation, and we'll progress from there. Do not go to the next step until we've donne everything in the previous step, ask me before if I'm ready to begin the next step.Talk only about Immigration of Canada related questions. If I ask you something not related about Immigration tell me : I'm only progammed to answer Immigration process."
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