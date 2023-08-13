import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Import necessary components

const relatedBlogs = [
    { title: "Job Hunting in Canada: Tips for New Immigrants", link: "/blog/blog7" },
    { title: "Understanding the Canadian Work Visa", link: "/blog/blog8" },
    { title: "From a Canadian Study Permit to a Work Visa", link: "/blog/blog9" },
    // ... add more related blogs as needed
];

const blog3 = () => {
    return ( 
        <div className="p-8 text-white bg-slate-900 rounded-xl">
            <h1 className="text-4xl font-bold mb-8 tracking-tight">3 Ways to Apply for a Job in Canada</h1>
            
            <p className="mb-6 text-lg leading-relaxed">
                Navigating the Canadian job market can be a crucial step for many immigrants. As one of the world's leading economies, Canada offers a plethora of job opportunities. Here are three key methods to kickstart your job application journey:
            </p>

            <h2 className="text-3xl font-semibold mb-6">1. Job Portals and Websites:</h2>
            <p className="mb-6 text-lg leading-relaxed">
                Websites like Indeed, Workopolis, and the Canadian Job Bank are goldmines for job seekers. They list thousands of vacancies across various sectors. Create a profile, upload a Canadian-style resume, and start applying.
            </p>

            <h2 className="text-3xl font-semibold mb-6">2. Recruitment Agencies:</h2>
            <p className="mb-6 text-lg leading-relaxed">
                Many Canadian employers use recruitment agencies to fill vacancies, especially for specialized roles. Signing up with agencies such as Manpower or Randstad can give you access to exclusive job listings.
            </p>

            <h2 className="text-3xl font-semibold mb-6">3. Networking:</h2>
            <p className="mb-6 text-lg leading-relaxed">
                Often, it's not just what you know, but who you know. Attend local job fairs, join Canadian professional associations related to your field, and use platforms like LinkedIn to connect with potential employers or colleagues.
            </p>

            <p className="mt-8 text-lg leading-relaxed">
                While these methods are effective, always ensure your work permit and visa documentation align with your job applications. A job offer can also significantly boost your immigration points if you're applying through the Express Entry system.
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
                <a href="/" className="bg-blue-900 hover:bg-blue-600 py-2 px-6 rounded-full text-lg font-semibold transition-colors">Back to Landing</a>
            </div>
        </div>
    );
}

export default blog3;
