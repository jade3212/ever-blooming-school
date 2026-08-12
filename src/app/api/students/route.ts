import { NextResponse } from "next/server";
import { db } from "@/db";
import { students } from "@/db/schema";
import { eq } from "drizzle-orm";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "ever-blooming-school-secret-key-2025";

export async function GET(request: Request) {
  try {
    const auth = request.headers.get("Authorization");
    if (!auth || !auth.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = auth.split(" ")[1];
    const payload = jwt.verify(token, JWT_SECRET) as { parentId: number };

    const userStudents = await db
      .select()
      .from(students)
      .where(eq(students.parentId, payload.parentId));

    return NextResponse.json({ students: userStudents });
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
