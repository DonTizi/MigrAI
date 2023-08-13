import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Import necessary components

const relatedBlogs = [
    { title: "Job Hunting in Canada: Tips for New Immigrants", link: "/blog/blog7" },
    { title: "3 Ways to Apply for a Job in Canada", link: "/blog/blog3" },
    { title: "Understanding the Canadian Work Visa", link: "/blog/blog8" },
    
    // ... add more related blogs as needed
];
const blogStudentGuide = () => {
    return ( 
        <div className="p-8 text-white bg-slate-900 rounded-xl">
            <h1 className="text-4xl font-bold mb-8 tracking-tight">Transitioning from Student to Professional in Canada</h1>
            
            <p className="mb-6 text-lg leading-relaxed">
                Canada's world-class education system attracts numerous international students. However, post-studies, many wish to stay back and work. Here's a roadmap to help you transition seamlessly.
            </p>

            {[
                ["Post-Graduation Work Permit (PGWP)", "This permit allows recent graduates to work in Canada after their studies. The duration varies based on your course length but can extend up to three years."],
                ["Seek Employment", "Having a PGWP enhances your employability. Focus on roles that align with your field of study, as this experience can be invaluable if you opt for permanent residency later."],
                ["Networking", "Your university or college can be a starting point. Attend alumni events, job fairs, and leverage your institution's career services."],
                ["Consider Provincial Nominee Programs (PNP)", "Some provinces offer pathways for students to transition to permanent residency post-studies, especially if you have a job offer in that province."],
                ["Plan Ahead", "Canadian work experience can significantly enhance your profile if you're considering permanent residency. Programs like the Canadian Experience Class (CEC) under Express Entry value Canadian work experience."],
                ["Stay Updated with Regulations", "Immigration policies evolve. Keeping abreast of the latest changes ensures you can adapt your plans accordingly."]
            ].map(([title, content]) => (
                <>
                    <h2 className="text-3xl font-semibold mb-6">{title}</h2>
                    <p className="mb-6 text-lg leading-relaxed">{content}</p>
                </>
            ))}

            <p className="mt-8 text-lg leading-relaxed">
                Your Canadian educational journey can indeed pave the way for a promising career in Canada. With the right strategies, you can make the most of the opportunities that come your way.
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

export default blogStudentGuide;
