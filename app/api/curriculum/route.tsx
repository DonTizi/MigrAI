

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
    content: " I'll give you a job description. With that I want you to generate me the best CV possible for this job application. Make use of space to put words on the right place like a real CV  play with those space to make it look like a PDF CV Canva, For example (John Smith                                 Montreal ,QC). Also give me the best skills for the cv related to this job. The goal is for you to create the best CV for me so that I can give them. Your purpose is only to make the most optimal CV and nothing else. put the Titles  (like Skills , work experience, Education, Professional Summary, Contact Information, Certifications and Languages) inside ** **, make steps inside <li></li> , put links inside in <a href=''> </a>, put others titles in ****."
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


        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [instructionMessage, ...messages]
        });
        if(!isPro){
            
        }
        return NextResponse.json(response.data.choices[0].message);
    } catch (error){
        console.log("[CODE_ERROR]", error);
        return new NextResponse("Internal error", {status:500});
    }
}
