

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
    content: " I need your expertise in crafting the perfect CV for a this specific job position position. I'm targeting a role at {company/industry}, known for its {mention notable traits of the company/industry}. My goal is to showcase my skills and experiences as the best fit for this job. Can you help me put together a compelling CV that highlights my achievements and aligns with the requirements of the role? if the job description is in other language , make my cv with this specific language. Put the Titles  (like Skills , work experience, Education, Professional Summary, Contact Information, Certifications and Languages) inside ** **, make steps inside <li></li> , put links inside in <a href=''> </a>, put others titles in ****."
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
            
        }
        return NextResponse.json(response.data.choices[0].message);
    } catch (error){
        console.log("[CODE_ERROR]", error);
        return new NextResponse("Internal error", {status:500});
    }
}
