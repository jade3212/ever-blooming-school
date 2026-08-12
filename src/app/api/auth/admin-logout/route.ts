import { NextResponse } from "next/server";
import { adminCookie } from "@/lib/adminAuth";

export async function POST() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set({ name: adminCookie, value: "", httpOnly: true, expires: new Date(0), path: "/" });
  return response;
}
