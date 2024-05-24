import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/api/webhooks(.*)",
    "/",
    "/api/uploadthing",
    "/:username",
    "/search"
  ]
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next|favicon.ico).*)", "/", "/(api|trpc)(.*)"],
};