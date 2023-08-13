"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; 
import { Form, FormField, FormControl, } from "@/components/ui/form"; // Make sure to adjust the path
import { UserLogo } from "@/components/user-logo";
import { BotAvatar } from "@/components/bot-avatar";

const relatedBlogs = [
    { title: "Virtual interview Simulation Guide", link: "/blog/blog6" },
    { title: "Immigration Explainer Tool", link: "/blog/blog4" },
    { title: "Understanding the Canadian Experience", link: "/blog/blog3" },
    // ... add more related blogs as needed
];


const blog5 = () => {
    return ( 
        <div className="p-8 text-white bg-slate-900 rounded-xl">
            <h2 className="text-3xl font-semibold mb-6">Immigration Process Simulation:</h2>
            <p className="mb-6 text-lg leading-relaxed">
            Navigating Canadian immigration can feel like a maze. Enter the "Immigration Process Simulator," an innovative tool that lets you experience the entire immigration journey, from inception to completion. To maximize the simulation's efficacy, always ask questions and seek advice at each juncture before moving on. Conduct your research in tandem and let the simulator guide you every step of the way. This immersive experience enables users to grasp the intricacies of their Canadian immigration application, arming them with knowledge before commencing the actual process.
            </p>
            <h2 className="text-3xl font-semibold mb-6">Optimizing Your Simulation Experience:</h2>
            <p className="mb-6 text-lg leading-relaxed">
               Kickstart by greeting it with a 'Hello.' It'll prompt if you're ready to begin the simulation. Respond affirmatively. Now, share details specific to your scenario. For instance, let's take an individual with a Canadian citizen daughter wishing to migrate to Canada. This simulation offers a hands-on experience.
            </p>
            
{/* MigrAI chat design */}
<div className="mt-4 px-4 lg:px-8">

    {/* Bot Message */}
    <div className="flex items-start gap-x-8 rounded-lg p-8 bg-muted">
        <BotAvatar />
        <p className="text-sm overflow-hidden leading-7 text-black">
            Hello! I'm here to guide you through the simulation of the Canadian immigration process. Are you ready to begin?
        </p>
    </div>

    {/* User Message */}
    <div className="flex items-start gap-x-8 rounded-lg p-8 mt-4 bg-white border border-black/10">
        <UserLogo />
        <p className="text-sm overflow-hidden leading-7 text-black">Yes</p>
    </div>

    {/* Bot Message */}
    <div className="flex items-start gap-x-8 rounded-lg p-8 mt-4 bg-muted">
        <BotAvatar />
        <p className="text-sm overflow-hidden leading-7 text-black">
            Great! Let's start with the first step: Preparation. Determine your eligibility: The first step is to assess whether you are eligible to immigrate to Canada. This can be done by checking the eligibility requirements for the different immigration programs offered by the Canadian government. The main categories include: Express Entry (Skilled Workers), Provincial Nominee Programs (PNP), Family Sponsorship, and Study/Work Permits. Do you have a specific immigration program in mind, or would you like to explore the options further?
        </p>
    </div>

    {/* User Message */}
    <div className="flex items-start gap-x-8 rounded-lg p-8 mt-4 bg-white border border-black/10">
        <UserLogo />
        <p className="text-sm overflow-hidden leading-7 text-black">
            I don't know the programs yet, I have a daughter who is already a Canadian citizen, which program would be better knowing that?
        </p>
    </div>

    {/* Bot Message */}
    <div className="flex items-start gap-x-8 rounded-lg p-8 mt-4 bg-muted">
        <BotAvatar />
        <p className="text-sm overflow-hidden leading-7 text-black">
            Since you have a daughter who is already a Canadian citizen, the Family Sponsorship program may be the most suitable option for you. This program allows Canadian citizens and permanent residents to sponsor their eligible family members for immigration to Canada.
            To proceed with the Family Sponsorship program, you need to meet the eligibility criteria, such as being at least 18 years old, being a Canadian citizen or permanent resident, and demonstrating the ability to financially support your sponsored family member.
            Would you like to explore other programs as well, or would you like to focus on the Family Sponsorship program?
        </p>
    </div>

    {/* User Message */}
    <div className="flex items-start gap-x-8 rounded-lg p-8 mt-4 bg-white border border-black/10">
        <UserLogo />
        <p className="text-sm overflow-hidden leading-7 text-black">
            No we'll go with the Family Sponsorship Program.
        </p>
    </div>

    {/* Bot Message */}
    <div className="flex items-start gap-x-8 rounded-lg p-8 mt-4 bg-muted">
        <BotAvatar />
        <p className="text-sm overflow-hidden leading-7 text-black">
        Great! Now that you've chosen the Family Sponsorship program, let's move on to the next step:

        <br></br>Gather the necessary documents: In this step, you'll need to gather all the required documents for your application. These typically include:
        <br></br>Proof of relationship: You'll need to provide documents such as birth certificates, adoption papers, or other proof of your relationship with your Canadian citizen daughter.
        <br></br>Identity and civil status documents: This includes your passport, national identity card, marriage certificate (if applicable), divorce or separation documents (if applicable), and any other relevant identification documents.
        <br></br>Proof of residence: You'll need to show evidence of your current residence, such as rental agreements or utility bills.
        <br></br>Financial documents: You'll need to demonstrate that you have enough financial resources to support your sponsored family member. This may include bank statements, employment letters, income tax returns, and other financial documents.
        <br></br>Police clearance certificates: You may need to provide police clearance certificates from the countries where you have lived for a certain period of time, demonstrating that you have a clean criminal record.
        <br></br>Medical examination: You and your sponsored family member will likely need to complete a medical examination by a designated panel physician to ensure you meet the health requirements.
        <br></br>Ensure that you carefully gather all the required documents as per the program guidelines.
        <br></br>Are you ready to move on to the next step or do you have any questions regarding the required documents?
        </p>
    </div>
                {/* Add more chat bubbles as needed */}
            </div>
            <br></br>
            <p className="mb-8 text-lg leading-relaxed">
                    The aim? Familiarity. The goal is to acquaint you with every step, ensuring no uncertainties or doubts linger. We highly recommend starting with this simulator before diving into the "Immigration Explainer."
            </p>

            <div className="mt-12">
                <h2 className="text-3xl font-semibold mb-6">Related Articles</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {relatedBlogs.map((item) => (
                        <a href={item.link} className="block transition-transform transform hover:scale-105">
                            <Card key={item.title} className="bg-gradient-to-br from-blue-900 to-slate-800 border-none text-white rounded-xl shadow-lg">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-x-2">
                                        <div>
                                            <p className="text-xl font-semibold">{item.title}</p>
                                        </div>
                                    </CardTitle>
                                    <CardContent className="pt-4 px-0">
                                        Read More
                                    </CardContent>
                                </CardHeader>
                            </Card>
                        </a>
                    ))}
                </div>
            </div>
            <div className="text-center mt-16">
            <a href="/" className="bg-blue-900 hover:bg-blue-600 py-2 px-6 rounded-full text-lg font-semibold transition-colors">Back to Landing</a>
            </div>
        </div>
    );
}
   
export default blog5;