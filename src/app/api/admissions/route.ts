import { NextResponse } from "next/server";
import { db } from "@/db";
import { admissions } from "@/db/schema";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function jsonError(message: string, status = 400) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return jsonError("Please submit the admission form normally and try again.", 415);
    }

    const body = await request.json();
    const studentName = String(body.studentName || "").trim();
    const parentName = String(body.parentName || "").trim();
    const parentPhone = String(body.parentPhone || "").trim();
    const classToAdmit = String(body.classToAdmit || "").trim();

    if (!studentName || !parentName || !parentPhone || !classToAdmit) {
      return jsonError("All required fields must be filled.");
    }
    if (!/^[0-9]{10}$/.test(parentPhone)) {
      return jsonError("Please enter a valid 10-digit phone number.");
    }

    const [admission] = await db.insert(admissions).values({
      studentName,
      parentName,
      parentPhone,
      classToAdmit,
      aadharDocument: typeof body.aadharDocument === "string" ? body.aadharDocument : "",
      birthCertificate: typeof body.birthCertificate === "string" ? body.birthCertificate : "",
      transferCertificate: typeof body.transferCertificate === "string" ? body.transferCertificate : "",
      status: "pending",
    }).returning();

    return NextResponse.json({ ok: true, admission }, { status: 201 });
  } catch (error) {
    console.error("Admission submission error:", error);
    return jsonError(error instanceof Error ? error.message : "We could not submit the application right now. Please try again or contact the school.", 500);
  }
}
