import { NextResponse } from "next/server";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_TYPES = new Set(["application/pdf", "image/jpeg", "image/png", "image/webp"]);
const ALLOWED_FIELDS = new Set(["aadhar", "birthCertificate", "transferCertificate"]);

function jsonError(message: string, status = 400) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");
    const field = String(formData.get("field") || "");

    if (!ALLOWED_FIELDS.has(field)) return jsonError("Invalid document type.");
    if (!(file instanceof File) || file.size === 0) return jsonError("Please select a document.");
    if (file.size > MAX_FILE_SIZE) return jsonError(`${file.name} is larger than 5 MB.`);
    if (!ALLOWED_TYPES.has(file.type)) return jsonError("Please upload a PDF, JPG, PNG or WEBP file.");

    const ext = path.extname(file.name).toLowerCase() || (file.type === "application/pdf" ? ".pdf" : ".jpg");
    const filename = `${randomUUID()}${ext}`;
    const relativeDir = path.join("uploads", "admissions", "documents");
    const absoluteDir = path.join(process.cwd(), "public", relativeDir);
    await mkdir(absoluteDir, { recursive: true });
    await writeFile(path.join(absoluteDir, filename), Buffer.from(await file.arrayBuffer()));

    const url = `/${relativeDir.replaceAll(path.sep, "/")}/${filename}`;
    return NextResponse.json({ ok: true, url, field, filename }, { status: 201 });
  } catch (error) {
    console.error("Document upload error:", error);
    return jsonError(error instanceof Error ? error.message : "Could not upload the document.", 500);
  }
}
