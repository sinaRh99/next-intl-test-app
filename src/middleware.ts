import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - ... if they start with `api/`, `_next/`, `trpc/` or '/_vercel' (Vercel Edge Functions)
  // - ... the ones containing a dot (e.g. `.png`, `.jpg`, etc.)
  matcher: "/((?!api|_next|trpc|_vercel|.*\\..*).*)",
};
