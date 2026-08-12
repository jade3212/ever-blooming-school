import { NextResponse } from "next/server";
import { createAdminToken, adminCookie } from "@/lib/adminAuth";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const username = String(body.username ?? "").trim();
    const password = String(body.password ?? "");
    const expectedUser = process.env.ADMIN_USER;
    const expectedPassword = process.env.ADMIN_PASSWORD;

    if (!expectedUser || !expectedPassword) {
      return NextResponse.json({ error: "Principal login is not configured. Add ADMIN_USER and ADMIN_PASSWORD to .env.local." }, { status: 500 });
    }
    if (username !== expectedUser || password !== expectedPassword) {
      return NextResponse.json({ error: "Invalid username or password." }, { status: 401 });
    }

    const response = NextResponse.json({ ok: true });
    response.cookies.set({ name: adminCookie, value: createAdminToken(username), httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", path: "/", maxAge: 60 * 60 * 8 });
    return response;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
