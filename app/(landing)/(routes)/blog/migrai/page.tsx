"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Import necessary components
import { BotAvatar } from "@/components/bot-avatar";


const relatedBlogs = [
    { title: "Process Simulation Tool Guide", link: "/blog/Immigration-Process-Simulation" },
    { title: "Virtual interview Simulation Guide", link: "/blog/Immigration-Virtual-Interview-Simulation" },
    { title: "Immigration Explainer Tool", link: "/blog/Immigration-Explainer-Tool" },
    // ... add more related blogs as needed
];

const MigrAIBlog = () => {
    return (
        <div className="flex items-start gap-x-8 rounded-lg p-8 text-white">
            <BotAvatar />
            <div>
                <h1 className="text-3xl font-bold mb-8 tracking-tight">Simplifying the Canadian Immigration Process with MigrAI</h1>
                                <p className="text-sm overflow-hidden leading-7 text-white">
                    MigrAI, a revolutionary platform designed to streamline the Canadian immigration process, was born out of a desire to provide clarity and simplicity to individuals like Hamza, a young Algerian seeking to make Canada his new home. What started as a personal mission soon evolved into a powerful tool that has assisted over 100 individuals in their immigration journey.
                </p>

                <h2 className="text-2xl font-semibold mb-4">A Reliable Source for Immigration Assistance</h2>
                <p className="text-sm overflow-hidden leading-7 text-white">
                    At MigrAI, our primary goal is to support individuals who are navigating the complex world of immigration. We understand the uncertainties and challenges that come with the process, and we're here to address your concerns, provide accurate information, and offer valuable advice.
                </p>

                <h2 className="text-2xl font-semibold mb-4">Insights from Real Users</h2>
                <p className="text-sm overflow-hidden leading-7 text-white">
                    The success of MigrAI lies in its ability to continuously learn and improve. Through our interactions with over 100 users, we have gained invaluable insights into their needs and expectations. This feedback has allowed us to optimize and enhance MigrAI's capabilities, making it an even more reliable source of assistance.
                </p>

                <h2 className="text-2xl font-semibold mb-4">How MigrAI Can Help You</h2>
                <p className="text-sm overflow-hidden leading-7 text-white">
                    Whether you're at the beginning stages of your immigration journey or already deep into the process, MigrAI is here to guide you every step of the way. Here are some key features that set us apart:
                </p>
                <ul className="list-disc pl-5 mb-8 text-sm overflow-hidden leading-7 text-white">
                    <li><strong>Clarity</strong>: Our platform provides clear and concise information on various aspects of Canadian immigration, ensuring you have all the knowledge you need.</li>
                    <li><strong> Simplicity</strong>: We believe in simplifying complex processes. With MigrAI, you can easily navigate through different requirements and procedures without feeling overwhelmed.</li>
                    <li><strong>Personalized Guidance</strong>: Every individual's immigration journey is unique. That's why MigrAI offers personalized guidance tailored to your specific circumstances.</li>
                    <li><strong>Timely Updates</strong>: Immigration laws and regulations can change frequently. MigrAI keeps you informed about any updates or changes that may affect your application.</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-6">Start Your Immigration Journey with MigrAI</h2>
                <p className="text-sm overflow-hidden leading-7 text-white">
                    Whether you're an individual seeking a better future in Canada or an immigration agency looking to enhance your services, MigrAI is here to make your journey smoother and more successful. Join the growing number of individuals who have benefited from our platform and experience the difference for yourself. Don't let the complexities of Canadian immigration hold you back. Let MigrAI be your trusted companion throughout the process. Get started today and unlock a world of possibilities.
                </p>

                <div className="mt-12">
                    <h2 className="text-2xl font-semibold mb-6">Related Blogs</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                    {relatedBlogs.map((item) => (
                        <a key={item.title} href={item.link} className="block transition-transform transform hover:scale-105">
                            <Card className="bg-blue-900 border-none text-white rounded-xl shadow-lg">
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
                <div className="text-center mt-8">
                    <a href="/" className="bg-blue-600 hover:bg-blue-900 py-2 px-6 rounded-full text-white text-lg font-semibold transition-colors">Back to Homepage</a>
                </div>
            </div>
        </div>
    );
}

export default MigrAIBlog;
