import { NextResponse } from "next/server";
import { desc, eq } from "drizzle-orm";
import { db } from "@/db";
import { admissions } from "@/db/schema";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const rows = await db.select().from(admissions).orderBy(desc(admissions.id));
    const pending = rows.filter((row) => row.status === "pending").length;
    return NextResponse.json({ admissions: rows, stats: { total: rows.length, pending } });
  } catch (error) {
    console.error("Admin admissions GET error:", error);
    return NextResponse.json({ error: "Could not load admissions." }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const id = Number(body.id);
    const status = String(body.status || "").trim().toLowerCase();
    const allowed = new Set(["pending", "contacted", "accepted", "rejected"]);
    if (!Number.isInteger(id) || !allowed.has(status)) return NextResponse.json({ error: "Invalid application or status." }, { status: 400 });

    const [updated] = await db.update(admissions).set({ status }).where(eq(admissions.id, id)).returning();
    if (!updated) return NextResponse.json({ error: "Application not found." }, { status: 404 });
    return NextResponse.json({ admission: updated });
  } catch (error) {
    console.error("Admin admissions PATCH error:", error);
    return NextResponse.json({ error: "Could not update application." }, { status: 500 });
  }
}
