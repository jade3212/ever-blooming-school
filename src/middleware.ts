import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  if (path === "/admin/login" || path === "/api/auth/admin-login" || path === "/api/auth/admin-logout") {
    return NextResponse.next();
  }

  if (path.startsWith("/admin") || path.startsWith("/api/admin")) {
    const session = request.cookies.get("ever_blooming_admin")?.value;
    if (!session) {
      if (path.startsWith("/api/")) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = { matcher: ["/admin/:path*", "/api/admin/:path*"] };
