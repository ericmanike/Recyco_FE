import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  console.log("Middleware token:", token);

  const protectedRoutes = ["/sell", "/buy", "/profile", "/gifts", "/orderPickup"];

  const isProtected = protectedRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route)
  );
  
  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/Login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/buy/:path*", "/sell/:path*", "/profile/:path*", "/gifts/:path*", "/orderPickup/:path*"],
};
