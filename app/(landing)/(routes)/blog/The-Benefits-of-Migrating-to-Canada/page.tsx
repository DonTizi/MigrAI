import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Import necessary components


const relatedBlogs = [
<<<<<<< HEAD:app/(landing)/(routes)/blog/The-Benefits-of-Migrating-to-Canada/page.tsx
    { title: "Simplifying Canadian Immigration for Students", link: "/blog/Simplifying-Canadian-Immigration-for-Students" },
    { title: "Understanding the Canadian Experience", link: "/blog/3-Ways-to-Apply-for-a-Job-in-Canada" },
=======
    { title: "Simplifying Canadian Immigration for Students", link: "/blog/blogone" },
    { title: "3 Ways to Apply for a Job in Canada", link: "/blog/blog3" },
>>>>>>> 6a6ecf47724667bf2205994679d5a66e4be3b6a2:app/(landing)/(routes)/blog/blog2/page.tsx
    { title: "Top Cities to Live in Canada", link: "/blog/top-cities-in-canada" },
    // ... add more related blogs as needed
];


const blog2 = () => {
    return ( 
        <div className="p-8 text-white bg-slate-900 rounded-xl">
            <h1 className="text-4xl font-bold mb-8 tracking-tight">The Benefits of Migrating to Canada</h1>
            
            <p className="mb-6 text-lg leading-relaxed">
                Canada, a beacon of hope and opportunity, has become a top choice for immigrants worldwide. Why? Let's delve into the key benefits of choosing Canada as your new home.
            </p>

            <h2 className="text-3xl font-semibold mb-6">1. Robust Economy</h2>
            <p className="mb-6 text-lg leading-relaxed">
                Canada boasts one of the world's most resilient economies. Its focus on innovation and diverse industries makes it a hub for job opportunities, attracting skilled workers globally.
            </p>

            <h2 className="text-3xl font-semibold mb-6">2. Inclusive Society</h2>
            <p className="mb-6 text-lg leading-relaxed">
                Renowned for its multiculturalism, Canada celebrates diversity. Its policies promote equal rights, ensuring that every individual, regardless of their background, feels welcome.
            </p>

            <h2 className="text-3xl font-semibold mb-6">3. World-Class Education</h2>
            <p className="mb-6 text-lg leading-relaxed">
                Canadian institutions consistently rank high globally, making it an ideal destination for students. Plus, the Canadian government invests heavily in education, ensuring quality learning for all.
            </p>

            {/* ... Continue in this format for the rest of the points ... */}

            <p className="mt-8 text-lg leading-relaxed">
                In conclusion, the benefits of migrating to Canada are manifold. Whether you seek professional growth, quality education, or a harmonious life, Canada beckons!
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
                <a href="/" className="bg-blue-900 hover:bg-blue-600 py-2 px-6 rounded-full text-lg font-semibold transition-colors">Back to Homepage</a>
            </div>
        </div>
    );
}
   
export default blog2;
