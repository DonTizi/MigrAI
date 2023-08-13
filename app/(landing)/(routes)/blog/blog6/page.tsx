"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; 
import { UserLogo } from "@/components/user-logo";
import { BotAvatar } from "@/components/bot-avatar";

const relatedBlogs = [
    { title: "Process Simulation Tool Guide", link: "/blog/blog5" },
    { title: "Immigration Explainer Tool", link: "/blog/blog4" },
    { title: "Understanding the Canadian Experience", link: "/blog/blog3" },
];

const blog6 = () => {
    return (
        <div className="p-8 text-white bg-slate-900 rounded-xl">
            <div className="p-8 text-white bg-slate-900 rounded-xl">
            <h2 className="text-3xl font-semibold mb-6">Immigration Virtual Interview Simulation:</h2>
            <p className="mb-6 text-lg leading-relaxed">
            Delving into the world of Canadian immigration, the third tool stands out: the "Immigration Virtual Interview Simulation." Enhanced by artificial intelligence, this tool mimics a genuine interview with a Canadian immigration officer. During the simulation, it's pivotal to utilize precise vocabulary and provide exhaustive details. Introduce yourself effectively, engage in a genuine conversation, and don't hesitate to ask questions.            </p>
            <h2 className="text-3xl font-semibold mb-6">Simulation Example:</h2>
            <p className="mb-6 text-lg leading-relaxed">
            Imagine a scenario: A mother residing in Belgium, with her daughter holding Canadian citizenship, aspires to live in Canada. This tool offers a glimpse into what a real interview with a Canadian immigration agent might look like.            </p> </div>
            
            <div className="mt-4 px-4 lg:px-8">

                {/* User's greeting */}
                <div className="flex items-start gap-x-8 rounded-lg p-8 bg-white border border-black/10">
                    <UserLogo />
                    <p className="text-sm overflow-hidden leading-7 text-black">Hello</p>
                </div>

                {/* Bot's introduction */}
                <div className="flex items-start gap-x-8 rounded-lg p-8 mt-4 bg-muted">
                    <BotAvatar />
                    <p className="text-sm overflow-hidden leading-7 text-black">
                        Hello! Are you ready to begin the immigration interview process?
                    </p>
                </div>

                {/* User's affirmation */}
                <div className="flex items-start gap-x-8 rounded-lg p-8 mt-4 bg-white border border-black/10">
                    <UserLogo />
                    <p className="text-sm overflow-hidden leading-7 text-black">Yes!</p>
                </div>

                {/* Bot's process explanation */}
                <div className="flex items-start gap-x-8 rounded-lg p-8 mt-4 bg-muted">
                    <BotAvatar />
                    <p className="text-sm overflow-hidden leading-7 text-black">
                        Great! Let's get started. My role today is to act as an immigration officer and conduct an interview to simulate the Canadian immigration process. Please keep in mind that this is a practice interview and not an official one. Are you applying for a specific type of visa or immigration program?
                    </p>
                </div>

                {/* User's program choice */}
                <div className="flex items-start gap-x-8 rounded-lg p-8 mt-4 bg-white border border-black/10">
                    <UserLogo />
                    <p className="text-sm overflow-hidden leading-7 text-black">
                        The Family Sponsorship Program.
                    </p>
                </div>

                {/* Bot's information query */}
                <div className="flex items-start gap-x-8 rounded-lg p-8 mt-4 bg-muted">
                    <BotAvatar />
                    <p className="text-sm overflow-hidden leading-7 text-black">
                        Wonderful! The Family Sponsorship Program allows Canadian citizens or permanent residents to sponsor their family members to come and live in Canada. Could you please provide me with some basic details about yourself and the family member you wish to sponsor?
                    </p>
                </div>

                {/* User's details */}
                <div className="flex items-start gap-x-8 rounded-lg p-8 mt-4 bg-white border border-black/10">
                    <UserLogo />
                    <p className="text-sm overflow-hidden leading-7 text-black">
                        In fact, it's more for me. My daughter is already a Canadian citizen. I would like to make a request to be able to immigrate to Canada.
                    </p>
                </div>

                {/* Bot's next steps */}
                <div className="flex items-start gap-x-8 rounded-lg p-8 mt-4 bg-muted">
                    <BotAvatar />
                    <p className="text-sm overflow-hidden leading-7 text-black">
                        Understood. As a parent of a Canadian citizen, you may be eligible to apply for the Parent and Grandparent Sponsorship Program. To begin the process, I will need some information from you. Could you please provide your full name, date of birth, and current country of residence?
                    </p>
                </div>

                {/* User's personal details */}
                <div className="flex items-start gap-x-8 rounded-lg p-8 mt-4 bg-white border border-black/10">
                    <UserLogo />
                    <p className="text-sm overflow-hidden leading-7 text-black">
                        Yes, I am Eva Mel and I come from Belgium.
                    </p>
                </div>

                {/* Bot's question about the daughter */}
                <div className="flex items-start gap-x-8 rounded-lg p-8 mt-4 bg-muted">
                    <BotAvatar />
                    <p className="text-sm overflow-hidden leading-7 text-black">
                        Thank you, Eva Mel, for providing your information. Now, could you please share your daughter's full name and citizenship status?
                    </p>
                </div>

                {/* User's response */}
                <div className="flex items-start gap-x-8 rounded-lg p-8 mt-4 bg-white border border-black/10">
                    <UserLogo />
                    <p className="text-sm overflow-hidden leading-7 text-black">
                        Her name is Camille Mel and she is a Canadian citizen.
                    </p>
                </div>

                {/* Bot's next questions */}
                <div className="flex items-start gap-x-8 rounded-lg p-8 mt-4 bg-muted">
                    <BotAvatar />
                    <p className="text-sm overflow-hidden leading-7 text-black">
                        Thank you for providing that information, Eva. Now, let's move on with the interview process. I will ask you a series of questions to assess your eligibility for immigration to Canada through the Parent and Grandparent Sponsorship Program. Please answer each question honestly and to the best of your knowledge. Have you ever been convicted of a crime in any country?
                    </p>
                </div>

                {/* User's response */}
                <div className="flex items-start gap-x-8 rounded-lg p-8 mt-4 bg-white border border-black/10">
                    <UserLogo />
                    <p className="text-sm overflow-hidden leading-7 text-black">
                        No, I've never committed any kind of crime! We are a respectful family that follows the law!
                    </p>
                </div>

                {/* Bot's acknowledgement and next question */}
                <div className="flex items-start gap-x-8 rounded-lg p-8 mt-4 bg-muted">
                    <BotAvatar />
                    <p className="text-sm overflow-hidden leading-7 text-black">
                        I appreciate your response, Eva. It's good to know that you have a clean record. Now, let's move on to the next question.
                        Do you have any medical conditions or disabilities that could affect your ability to live independently or require excessive medical care in Canada?
                    </p>
                </div>

                {/* User's response */}
                <div className="flex items-start gap-x-8 rounded-lg p-8 mt-4 bg-white border border-black/10">
                    <UserLogo />
                    <p className="text-sm overflow-hidden leading-7 text-black">
                        I don't think so, I have scoliosis in my back but it doesn't affect my ability to live on my own.
                    </p>
                </div>

                {/* Bot's next question */}
                <div className="flex items-start gap-x-8 rounded-lg p-8 mt-4 bg-muted">
                    <BotAvatar />
                    <p className="text-sm overflow-hidden leading-7 text-black">
                        Thank you for providing that information, Eva. Moving on to the next question:
                        What is the purpose of your intended stay in Canada? Are you planning to work, study, or retire?
                    </p>
                </div>

                {/* User's response */}
                <div className="flex items-start gap-x-8 rounded-lg p-8 mt-4 bg-white border border-black/10">
                    <UserLogo />
                    <p className="text-sm overflow-hidden leading-7 text-black">
                        I intend to stay with my daughter for the rest of her studies but also find work and end my life in Canada.
                    </p>
                </div>

                {/* Bot's next question */}
                <div className="flex items-start gap-x-8 rounded-lg p-8 mt-4 bg-muted">
                    <BotAvatar />
                    <p className="text-sm overflow-hidden leading-7 text-black">
                        Understood, Eva. It's good to know your intentions for staying in Canada. Now, let's continue with the next question:
                        Do you have any family or close relatives other than your daughter who currently reside in Canada?
                    </p>
                </div>

                {/* User's response */}
                <div className="flex items-start gap-x-8 rounded-lg p-8 mt-4 bg-white border border-black/10">
                    <UserLogo />
                    <p className="text-sm overflow-hidden leading-7 text-black">
                        We don't have anyone else in Canada, unfortunately. Does that affect our eligibility?
                    </p>
                </div>

                            {/* Bot's response */}
                <div className="flex items-start gap-x-8 rounded-lg p-8 mt-4 bg-muted">
                    <BotAvatar />
                    <p className="text-sm overflow-hidden leading-7 text-black">
                        Not having any other family or close relatives in Canada does not necessarily affect your eligibility for the Parent and Grandparent Sponsorship Program. It is more important to meet the specific eligibility requirements for the program, such as being able to provide for your own financial needs and demonstrating a genuine relationship with your daughter, who is a Canadian citizen. Now, let's continue with the next question: Have you received any education or vocational training beyond high school? If yes, please provide details of your educational background.
                    </p>
                </div>

                {/* User's response */}
                <div className="flex items-start gap-x-8 rounded-lg p-8 mt-4 bg-white border border-black/10">
                    <UserLogo />
                    <p className="text-sm overflow-hidden leading-7 text-black">
                        I have a degree in software engineering and cyber security certifications at the University of Namur.
                    </p>
                </div>

                {/* Bot's response */}
                <div className="flex items-start gap-x-8 rounded-lg p-8 mt-4 bg-muted">
                    <BotAvatar />
                    <p className="text-sm overflow-hidden leading-7 text-black">
                        That's impressive, Eva! Your educational background in software engineering and cyber security will certainly be valuable in the Canadian job market. Let's move on to the final question: Do you have any other specific questions or concerns regarding the immigration process or the Parent and Grandparent Sponsorship Program?
                    </p>
                </div>

                {/* User's response */}
                <div className="flex items-start gap-x-8 rounded-lg p-8 mt-4 bg-white border border-black/10">
                    <UserLogo />
                    <p className="text-sm overflow-hidden leading-7 text-black">
                        The fact that I was already accepted in 2006 and have a Canadian citizen daughter, will it shorten my immigration process? Also, will it give me a better chance of being admitted again?
                    </p>
                </div>

                {/* Bot's response */}
                <div className="flex items-start gap-x-8 rounded-lg p-8 mt-4 bg-muted">
                    <BotAvatar />
                    <p className="text-sm overflow-hidden leading-7 text-black">
                        While your previous immigration experience and having a Canadian citizen daughter can be beneficial, it does not guarantee a faster or easier immigration process. Each application is evaluated on its own merits. However, your previous experience may demonstrate your familiarity with Canada and your commitment to establishing a life here, which could potentially strengthen your application. It's always recommended to consult official government resources or seek advice from a qualified immigration professional for the most accurate and up-to-date information. Do you have any other questions or concerns?
                    </p>
                </div>

                {/* User's response */}
                <div className="flex items-start gap-x-8 rounded-lg p-8 mt-4 bg-white border border-black/10">
                    <UserLogo />
                    <p className="text-sm overflow-hidden leading-7 text-black">
                        No, that will be all. Thank you!
                    </p>
                </div>

                {/* Bot's response */}
                <div className="flex items-start gap-x-8 rounded-lg p-8 mt-4 bg-muted">
                    <BotAvatar />
                    <p className="text-sm overflow-hidden leading-7 text-black">
                        You're welcome, Eva! I'm glad I could assist you today. If you have any more questions in the future or need further guidance, feel free to reach out. Good luck with your immigration journey and I wish you all the best in your plans to join your daughter in Canada. Have a great day!
                    </p>
                </div>

                
            </div>
            <br></br>
            <p className="mb-8 text-lg leading-relaxed">
            The objective? Preparedness. This tool serves as a rehearsal platform, equipping you with confidence and insight. By familiarizing yourself with potential questions and refining your responses, you'll be better poised for the actual interview, minimizing surprises and maximizing your chances of success.
</p>

            <div className="mt-12">
                <h2 className="text-3xl font-semibold mb-6">Related Articles</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {relatedBlogs.map((item) => (
    <a key={item.title} href={item.link} className="block transition-transform transform hover:scale-105">
        <Card className="bg-gradient-to-br from-blue-900 to-slate-800 border-none text-white rounded-xl shadow-lg">
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
            <a href="/" className="bg-blue-900 hover:bg-blue-600 py-2 px-6 rounded-full text-lg font-semibold transition-colors">Back to Homepage</a>
            </div>
        </div>
    );
}
   
export default blog6;
