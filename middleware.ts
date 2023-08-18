import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware
export default authMiddleware({
  publicRoutes: ["/", "/api/webhook", "/privacy-policy", "/blog/Simplifying-Canadian-Immigration-for-Students", "/blog/The-Benefits-of-Migrating-to-Canada", "/blog/3-Ways-to-Apply-for-a-Job-in-Canada", "/blog/Immigration-Explainer-Tool", "/blog/Immigration-Process-Simulation", "/blog/Immigration-Virtual-Interview-Simulation", "/blog/Guide-to-Entering-the-Canadian-Job-Market", "/blog/The-Canadian-Work-Visa-Guide", "/blog/Transitioning-from-Student-to-Professional-in-Canada", "/blog/Top-10-Cities-to-Live-in-Canada"]


});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
