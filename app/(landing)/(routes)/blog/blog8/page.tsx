import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Import necessary components

const relatedBlogs = [
    { title: "From a Canadian Study Permit to a Work Visa", link: "/blog/blog9" },
    { title: "3 Ways to Apply for a Job in Canada", link: "/blog/blog3" },
    { title: "Job Hunting in Canada: Tips for New Immigrants", link: "/blog/blog7" },
    
    // ... add more related blogs as needed
];

const blogVisaGuide = () => {
    return ( 
        <div className="p-8 text-white bg-slate-900 rounded-xl">
            <h1 className="text-4xl font-bold mb-8 tracking-tight">The Canadian Work Visa Guide</h1>
            
            <p className="mb-6 text-lg leading-relaxed">
                Canada, with its robust economy, offers numerous job opportunities for skilled workers. However, before embarking on your Canadian employment journey, understanding the work visa process is essential.
            </p>

            {[
                ["Determine Eligibility", "Different work visa categories cater to various professionals. Research to identify which category aligns with your qualifications and job offer."],
                ["Gather Necessary Documents", "This typically includes your job offer letter, proof of relevant work experience, and educational or professional certifications. Ensuring your documents are in order will streamline the application process."],
                ["Application Submission", "Applications can be submitted online or via paper. It's essential to ensure all details are accurate to avoid unnecessary delays."],
                ["Stay Informed", "Immigration policies and work visa requirements can change. Regularly checking the official Canadian immigration website or consulting with an immigration expert can keep you informed."],
                ["Plan for the Long-Term", "If you're considering making Canada your permanent home, strategize early. Gaining Canadian work experience can significantly boost your prospects for permanent residency through pathways like Express Entry."]
            ].map(([title, content]) => (
                <>
                    <h2 className="text-3xl font-semibold mb-6">{title}</h2>
                    <p className="mb-6 text-lg leading-relaxed">{content}</p>
                </>
            ))}

            <p className="mt-8 text-lg leading-relaxed">
                Understanding the work visa process is just the first step. Once in Canada, integrating into the workplace culture, networking, and continuous learning will ensure career growth.
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

export default blogVisaGuide;
