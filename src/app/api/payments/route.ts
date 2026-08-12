import { NextResponse } from "next/server";
import { db } from "@/db";
import { payments, students } from "@/db/schema";
import { eq } from "drizzle-orm";
import jwt from "jsonwebtoken";
import { v4 as uuid } from "uuid";

const JWT_SECRET = process.env.JWT_SECRET || "ever-blooming-school-secret-key-2025";

function getParentId(request: Request): number {
  const auth = request.headers.get("Authorization");
  if (!auth || !auth.startsWith("Bearer ")) {
    throw new Error("Unauthorized");
  }
  const token = auth.split(" ")[1];
  const payload = jwt.verify(token, JWT_SECRET) as { parentId: number };
  return payload.parentId;
}

export async function GET(request: Request) {
  try {
    const parentId = getParentId(request);

    const allPayments = await db
      .select({
        id: payments.id,
        studentId: payments.studentId,
        amount: payments.amount,
        description: payments.description,
        status: payments.status,
        receiptNumber: payments.receiptNumber,
        paymentMethod: payments.paymentMethod,
        createdAt: payments.createdAt,
        studentName: students.name,
      })
      .from(payments)
      .leftJoin(students, eq(payments.studentId, students.id))
      .where(eq(payments.parentId, parentId))
      .orderBy(payments.createdAt);

    return NextResponse.json({ payments: allPayments });
  } catch (err) {
    if (err instanceof Error && err.message === "Unauthorized") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const parentId = getParentId(request);
    const { studentId, amount, description } = await request.json();

    if (!studentId || !amount) {
      return NextResponse.json(
        { error: "Student and amount are required" },
        { status: 400 }
      );
    }

    const receiptNumber = `RCP-${Date.now().toString(36).toUpperCase()}-${uuid().substring(0, 6).toUpperCase()}`;

    const [payment] = await db
      .insert(payments)
      .values({
        parentId,
        studentId,
        amount,
        description: description || "School Fee Payment",
        receiptNumber,
        status: "completed",
        paymentMethod: "online",
      })
      .returning();

    return NextResponse.json({ payment }, { status: 201 });
  } catch (err) {
    if (err instanceof Error && err.message === "Unauthorized") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
