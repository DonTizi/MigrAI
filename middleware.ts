import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware
export default authMiddleware({
  publicRoutes: ["/", "/api/webhook", "/privacy-policy","/blog/migrai", "/blog/Immigration-Explainer-Tool", "/blog/Immigration-Process-Simulation", "/blog/Immigration-Virtual-Interview-Simulation"]
  ,beforeAuth(req) {
    if (req.method === "GET" &&(req.nextUrl.pathname == "/" || req.nextUrl.pathname.startsWith("/stale") || req.nextUrl.pathname.startsWith("/link"))) {
      return false;
    }
  }

});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
  
};
