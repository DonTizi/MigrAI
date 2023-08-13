import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Import necessary components


const relatedBlogs = [
    { title: "The Benefits of Migrating to Canada", link: "/blog/blog2" },
    { title: "3 Ways to Apply for a Job in Canada", link: "/blog/blog3" },
    { title: "Simplifying Canadian Immigration for Students", link: "/blog/blogone" },
    // ... add more related blogs as needed
];
const blogTopCities = () => {
    return ( 
        <div className="p-8 text-white bg-slate-900 rounded-xl">
            <h1 className="text-4xl font-bold mb-8 tracking-tight">Top 10 Cities to Live in Canada</h1>
            
            {[
                ["Toronto, Ontario", "The heartbeat of Canada's economy, Toronto is a mosaic of cultures. With a bustling downtown, expansive park systems, and a lively arts scene, it offers countless job opportunities and amenities. Its diverse population brings a global flavor to its neighborhoods, cuisine, and festivals."],
                ["Vancouver, British Columbia", "Surrounded by mountains and ocean, Vancouver is a nature enthusiast's paradise. The city is also a tech hotspot, often dubbed the \"Silicon Valley of the North\". Its mild climate, outdoor recreational activities, and thriving arts scene make it a top choice for many."],
                ["Calgary, Alberta", "Offering proximity to the majestic Rockies, Calgary blends urban life with outdoor adventure. Its strong economy, driven by the energy sector, provides numerous job opportunities, while cultural events like the Calgary Stampede showcase its unique heritage."],
                ["Montreal, Quebec", "An epicenter of art, history, and gastronomy, Montreal offers a European touch in Canada. Its festivals, universities, and historic sites, combined with its booming tech sector, make it an attractive city for young professionals and families alike."],
                ["Halifax, Nova Scotia", "A port city with deep maritime roots, Halifax is emerging as a tech and innovation hub. Its coastal charm, historical architecture, and vibrant arts scene provide a unique East Coast living experience."],
                ["Ottawa, Ontario", "Beyond being Canada's political heart, Ottawa offers a high quality of life. Its numerous museums, parks, and festivals, combined with a strong tech presence, offer both cultural enrichment and job opportunities."],
                ["Edmonton, Alberta", "Known for its festivals, Edmonton is a city that celebrates arts and culture. The energy sector drives its economy, but the city also invests in green initiatives, balancing urban development with environmental stewardship."],
                ["Quebec City, Quebec", "Walking through Quebec City feels like a journey back in time. Its cobblestone streets, fortified walls, and French heritage make it a UNESCO World Heritage site and a haven for history buffs."],
                ["Winnipeg, Manitoba", "Winnipeg is characterized by its community spirit, affordable living, and growing arts scene. Rich in history and culture, the city is also making strides in tech and innovation sectors."],
                ["Victoria, British Columbia", "Located on Vancouver Island, Victoria exudes an old-world charm. Known for its gardens, historic sites, and a laid-back lifestyle, it also boasts a growing tech industry, drawing both retirees and tech professionals."]
            ].map(([title, content]) => (
                <>
                    <h2 className="text-3xl font-semibold mb-6">{title}</h2>
                    <p className="mb-6 text-lg leading-relaxed">{content}</p>
                </>
            ))}

            <p className="mt-8 text-lg leading-relaxed">
                For immigrants, each city offers a unique Canadian experience, shaped by its cultural, economic, and geographical landscape. Dive deep, explore, and find your ideal Canadian home!
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

export default blogTopCities;