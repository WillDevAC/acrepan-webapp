import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const jwt_token = request.cookies.get("auth-token")?.value;
  const sign_url = new URL("/", request.url);
  const home_url = new URL("/home/all", request.url);

  if (!jwt_token) {
    if (request.nextUrl.pathname === "/") {
      return NextResponse.next();
    }
    return NextResponse.redirect(sign_url);
  }

  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(home_url);
  }
}

export const config = {
  matcher: ["/", "/home/:path*"],
};
