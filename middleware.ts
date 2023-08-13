import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware
export default authMiddleware({
  publicRoutes: ["/", "/api/webhook", "/blog/blogone", "/blog/blog2", "/blog/blog3", "/blog/blog4", "/blog/blog5", "/blog/blog6", "/blog/blog7", "/blog/blog8", "/blog/blog9", "/blog/blog10"]


});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
