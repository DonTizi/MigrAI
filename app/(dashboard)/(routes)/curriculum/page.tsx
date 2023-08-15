"use client"
import axios from "axios";
import * as z from "zod";
import {Heading} from "@/components/heading";    
import { Calculator, MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { formSchema } from "./constants";
import {zodResolver} from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ChatCompletionRequestMessage } from "openai";
import { Empty } from "@/components/empty";
import { Loader } from "@/components/loader";
import { cn } from "@/lib/utils";
import { UserAvatar } from "@/components/user-avatar";
import { BotAvatar } from "@/components/bot-avatar";
import  ReactMarkdown  from "react-markdown";
import { useProModal } from "@/hooks/use-pro-modal";
import { toast } from "react-hot-toast";

const Codepage =() => {

    const proModal = useProModal();
    const router = useRouter();
    const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);
    const form =useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: ""
        }
    })

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async(values:z.infer<typeof formSchema>) => {
        try {
            const userMessage: ChatCompletionRequestMessage = {
                role: "user",
                content: values.prompt
            };
    
            // Send the previous messages plus the new user message
            const response = await axios.post("/api/curriculum", {
                messages: [...messages, userMessage],
            })
    
            // Only add the response (bot's message) to the state
            setMessages((current) => [...current, response.data]);
            form.reset();
    
        } catch (error:any) {
            if (error?.response?.status === 403){
                proModal.onOpen();
            } else{
                toast.error("Something went wrong");
            } 
        } finally {
            router.refresh();
        }
    };
    


    return (
        <div>
            <Heading
                title="Curriculum Vitae Maker"
                description="Resume Enhancement Engine powered by AI NLP (Natural Language Processing) for Job-specific Tailoring. Please copy and paste the job description into the input."
                icon={Calculator}
                iconColor="text-red-700"
                bgColor="bg-red-700/10"
            />
            <div className="px-4 lg:px-8">
                <div>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm"
                        >
                            <FormField
                                name="prompt"
                                render={({ field }) => (
                                    <FormControl className="m-0 p-0">
                                        <Input
                                            className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent h-24 w-full" // Increased the height here to h-24 and ensured full width
                                            disabled={isLoading}
                                            placeholder="Please copy and paste the job description into the input."
                                            {...field}
                                        />
                                    </FormControl>
                                )}
                            />
                            <div className="mt-4 text-center"> {/* Centering the button */}
                                <Button variant="ask" className="w-1/4" disabled={isLoading}> Generate</Button>
                            </div>
                        </form>
                    </Form>
                    </div>
                <div className="space-y-4 mt-4">
                    {isLoading && (
                        <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
                            <Loader />
                        </div>
                    )}
                    {messages.length === 0 && !isLoading &&(
                        <Empty label="No conversation started" />
                    )}
                    <div className="flex flex-col-reverse gap-y-4">
                        {messages.map((message) => (
                            <div key={message.content} className={cn("p-8 w-full flex iems-start justify-center gap-x-8 rounded-lg",
                            message.role === "user" ? "bg-white border border-black/10" : "bg-muted")}>
                                {message.role ==="user" ? <UserAvatar />: <BotAvatar/>}

                                <ReactMarkdown components = {{
                                    pre: ({ node, ...props}) => (<div className="overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg">
                                        <pre {...props}/>
                                    </div>),
                                    code: ({node, ...props}) => (
                                        <code className="bg-black/10 rounded-lg p-1 />"{...props} />
                                        
                                    )
                                }}
                                
                                className="text-sm overflow-hidden leading-7 justifyText">
                                    
                                    {message.content ||""}
                                </ReactMarkdown>

                                 </div>
                        ))}
                    </div>
                </div>
             </div>
        </div>
    );
}

export default Codepage;
