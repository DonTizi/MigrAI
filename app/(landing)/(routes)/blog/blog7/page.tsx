import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Import necessary components

const relatedBlogs = [
    { title: "3 Ways to Apply for a Job in Canada", link: "/blog/blog3" },
    { title: "Understanding the Canadian Work Visa", link: "/blog/blog8" },
    { title: "From a Canadian Study Permit to a Work Visa", link: "/blog/blog9" },
    // ... add more related blogs as needed
];

const blogJobGuide = () => {
    return ( 
        <div className="p-8 text-white bg-slate-900 rounded-xl">
            <h1 className="text-4xl font-bold mb-8 tracking-tight">Guide to Entering the Canadian Job Market</h1>
            
            <p className="mb-6 text-lg leading-relaxed">
                Stepping into Canada's job market as a newcomer is an exciting journey, yet it comes with its unique set of challenges. To ensure your transition is smooth, here's a detailed guide to help you find your ideal job.
            </p>

            {[
                ["Canadianize Your Resume", "In Canada, resumes often emphasize accomplishments and results. Make sure to tailor your CV to reflect Canadian norms. If you’ve undertaken any courses or certifications in Canada, prominently feature them. Employers value local qualifications."],
                ["Cover Letters Matter", "Canadian employers pay close attention to cover letters. This is your opportunity to make a personal connection and demonstrate your knowledge about the company."],
                ["Networking is Key", "Building relationships can often lead to job opportunities. Attend job fairs, seminars, and join Canadian professional groups. Sites like LinkedIn are also crucial for online networking."],
                ["Leverage Immigrant Support Services", "Many cities have organizations that offer job support services, mentorship, and workshops tailored for newcomers. They can provide valuable insights into the Canadian job market."],
                ["Recognize Transferable Skills", "While you might not have Canadian work experience, your international experience is valuable. Highlight skills that can be transferred to the Canadian context."],
                ["Stay Updated", "Industries evolve, and staying updated with the latest trends in your field can give you a competitive edge."]
            ].map(([title, content]) => (
                <>
                    <h2 className="text-3xl font-semibold mb-6">{title}</h2>
                    <p className="mb-6 text-lg leading-relaxed">{content}</p>
                </>
            ))}

            <p className="mt-8 text-lg leading-relaxed">
                Remember, while the job-hunting process might seem overwhelming, persistence and adaptability are crucial. With the right approach, you'll find a position that matches your skills and aspirations.
            </p>

            <div className="mt-12">
                <h2 className="text-3xl font-semibold mb-6">Related Blogs</h2>
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

export default blogJobGuide;
