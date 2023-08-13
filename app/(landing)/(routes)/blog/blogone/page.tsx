import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Import necessary components


const relatedBlogs = [
    { title: "The Benefits of Migrating to Canada", link: "/blog/blog2" },
    { title: "3 Ways to Apply for a Job in Canada", link: "/blog/blog3" },
    { title: "Top Cities to Live in Canada", link: "/blog/blog10" },
    // ... add more related blogs as needed
];


const BlogOne = () => {
    return ( 
        <div className="p-8 text-white bg-slate-900 rounded-xl">
            <h1 className="text-4xl font-bold mb-8 tracking-tight">Simplifying Canadian Immigration for Students</h1>
            
            <h2 className="text-3xl font-semibold mb-6">Why Canada?</h2>
            <p className="mb-6 text-lg leading-relaxed">
                Amidst global post-pandemic recovery, Canada stands out as a premier destination for international students, renowned for its top-tier institutions and vibrant culture.
            </p>

            <h2 className="text-3xl font-semibold mb-6">The Challenge</h2>
            <p className="mb-6 text-lg leading-relaxed">
                With a 60% study permit approval rate, the Canadian immigration maze can be daunting. Students need more than just academic brilliance; they require guidance through the intricate process.
            </p>

            <h2 className="text-3xl font-semibold mb-6">MigrAI solution</h2>
            <p className="mb-6 text-lg leading-relaxed">
            Simplifying documentation for Canadian immigration. It offers tailored advice on university selection based on your preferences and ensures a smooth transition. With MigrAI, you'll save over 70% of your time, making the entire process more efficient.
            </p>

            <h2 className="text-3xl font-semibold mb-6">Immigration Advantage</h2>
            <p className="mb-6 text-lg leading-relaxed">
                Beyond academic navigation, MigrAI offers insights into the rich Canadian culture, bridging any cultural gaps for incoming students. Its primary mission? To demystify Canadian immigration, making your educational journey smooth and fruitful.
            </p>

            <h2 className="text-3xl font-semibold mb-6">Conclusion</h2>
            <p className="mb-8 text-lg leading-relaxed">
            Embrace Canada’s academic excellence uniquely tailored to you. Each comprehensive solution is personalized based on individual character, preferred cultural programs, and more, ensuring an optimized journey to a promising Canadian educational experience.
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
            <div className="text-center mt-8">
                <a href="/" className="bg-blue-900 hover:bg-blue-600 py-2 px-6 rounded-full text-lg font-semibold transition-colors">Back to Landing</a>
            </div>
        </div>
    );
}
   
export default BlogOne;