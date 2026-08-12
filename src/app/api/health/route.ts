import { NextResponse } from "next/server";
import { db } from "@/db";
import { sql } from "drizzle-orm";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await db.execute(sql`select 1`);
    return NextResponse.json({ ok: true, database: "connected" });
  } catch (error) {
    console.error("Health check failed:", error);
    return NextResponse.json({ ok: false, database: "unavailable" }, { status: 503 });
  }
}
