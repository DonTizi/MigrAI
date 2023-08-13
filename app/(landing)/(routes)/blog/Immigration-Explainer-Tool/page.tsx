"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; 
import { Form, FormField, FormControl, } from "@/components/ui/form"; // Make sure to adjust the path
import { UserLogo } from "@/components/user-logo";
import { BotAvatar } from "@/components/bot-avatar";

const relatedBlogs = [
    { title: "Process Simulation Tool Guide", link: "/blog/Immigration-Process-Simulation" },
    { title: "Virtual interview Simulation Guide", link: "/blog/Immigration-Virtual-Interview-Simulation" },
    { title: "3 Ways to Apply for a Job in Canada", link: "/blog/3-Ways-to-Apply-for-a-Job-in-Canada" },
    { title: "Simplifying Canadian Immigration for Students", link: "/blog/Simplifying-Canadian-Immigration-for-Students" },
    // ... add more related blogs as needed
];


const blog4 = () => {
    return ( 
        <div className="p-8 text-white bg-slate-900 rounded-xl">
            <h1 className="text-4xl font-bold mb-8 tracking-tight">Immigration Explainer Tool:</h1>
            
            <p className="mb-6 text-lg leading-relaxed">
                Dive into the world of Canadian immigration with the "Immigration Explainer" tool, your comprehensive digital guide. Boasting an 85% user preference, this tool deciphers the complexities of immigration effortlessly.
            </p>

            <h2 className="text-3xl font-semibold mb-6">Efficiency at Its Best:</h2>
            <p className="mb-6 text-lg leading-relaxed">
                Simply ask. Whether it's about documentation, process intricacies, or post-immigration steps, the tool is primed to assist. However, note: it won't handle tasks like "Process my immigration." Its forte is purely informational, tailored to Canadian immigration nuances.
            </p>
            
            <h2 className="text-3xl font-semibold mb-6">Popular Queries Include:</h2>
            <ul className="list-disc pl-8 mb-6 text-lg leading-relaxed">
                <li>Steps post-immigration: How to acquire a Social Insurance Number (SIN), health card, or job in Canada?</li>
    {/* Bot Message */}
    <div className="flex items-start gap-x-8 rounded-lg p-8 bg-muted">
        <BotAvatar />
        <p className="text-sm overflow-hidden leading-7 text-black">
        To acquire a Social Insurance Number (SIN) in Canada, you can apply in person at a Service Canada office by providing the required documents such as your passport, work permit, and proof of address. To obtain a health card, you must apply through the provincial or territorial health care system. Each province has its own process and requirements. To find employment, you can search online job portals, network with professionals in your field, and submit applications directly to employers. It is essential to have a well-crafted resume and cover letter tailored to the Canadian job market.
        </p>
    </div>
                <li>Differences between Provincial Nominee Programs and federal immigration pathways?</li>
    {/* Bot Message */}
    <div className="flex items-start gap-x-8 rounded-lg p-8 bg-muted">
        <BotAvatar />
        <p className="text-sm overflow-hidden leading-7 text-black">
        Provincial Nominee Programs (PNPs) are immigration programs offered by specific Canadian provinces and territories. They allow provinces to nominate individuals who meet their specific criteria for permanent residency. Each PNP has its own set of requirements, occupations in demand, and application processes. In contrast, federal immigration pathways, such as the Express Entry system, are managed by the federal government. They are based on a points system that considers factors like age, education, work experience, language proficiency, and adaptability. Express Entry includes the Federal Skilled Worker Program, Canadian Experience Class, and Federal Skilled Trades Program.        </p>
    </div>
                <li>Sponsoring family to Canada: Who's eligible?</li>
    {/* Bot Message */}
    <div className="flex items-start gap-x-8 rounded-lg p-8 bg-muted">
        <BotAvatar />
        <p className="text-sm overflow-hidden leading-7 text-black">
        Canadian citizens or permanent residents can sponsor certain family members to come to Canada as permanent residents. Eligible family members for sponsorship include spouses, common-law partners, conjugal partners, dependent children, parents, and grandparents. Additionally, you may also be able to sponsor other relatives, such as orphaned siblings, nephews, or nieces, under specific circumstances. The sponsorship process involves meeting certain criteria related to income, age, relationship, and ability to support the sponsored family members financially. It's important to note that the sponsorship process and eligibility requirements may vary depending on the specific family relationship being sponsored.

</p>
    </div>
                <li>Study permit application: Is a Letter of Acceptance vital?</li>
    {/* Bot Message */}
    <div className="flex items-start gap-x-8 rounded-lg p-8 bg-muted">
        <BotAvatar />
        <p className="text-sm overflow-hidden leading-7 text-black">
        Yes, a Letter of Acceptance (LOA) from a designated learning institution (DLI) in Canada is a vital document for a study permit application. The LOA proves that you have been accepted into a recognized educational institution in Canada and outlines the details of your program, such as the duration and start date. It is typically required as part of the application process to demonstrate that you have a genuine purpose for studying in Canada. Be sure to include the original or a copy of your LOA when submitting your study permit application to the Immigration, Refugees, and Citizenship Canada (IRCC).

</p>
    </div>
            </ul>

            <p className="mt-6 mb-8 text-lg leading-relaxed">
                MigrAI's brilliance shines in its dynamic interaction. Pose follow-up questions, seek further insights, and MigrAI engages, mimicking a seasoned immigration agent. It remembers, responds, and ensures every query is addressed to your satisfaction.
            </p>

            <p className="mb-8 text-lg leading-relaxed">
                Embrace the ease of Canadian immigration with MigrAI. Step into a realm where queries meet clarity, and complexities are unraveled seamlessly.
            </p>

            <div className="mt-12 flex flex-col items-center">
    <h2 className="text-3xl font-semibold mb-6">Related Articles</h2>
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto">
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
   
   
export default blog4;
