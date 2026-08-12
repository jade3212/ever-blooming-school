import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const COOKIE_NAME = "ever_blooming_admin";
const JWT_SECRET = process.env.JWT_SECRET || "change-this-secret-in-production";

export type AdminSession = {
  role: "principal";
  username: string;
};

export function createAdminToken(username: string) {
  return jwt.sign({ role: "principal", username }, JWT_SECRET, { expiresIn: "8h" });
}

export function verifyAdminToken(token: string | undefined): AdminSession | null {
  if (!token) return null;
  try {
    const payload = jwt.verify(token, JWT_SECRET) as jwt.JwtPayload & { role?: string; username?: string };
    if (payload.role !== "principal" || !payload.username) return null;
    return { role: "principal", username: payload.username };
  } catch {
    return null;
  }
}

export async function getAdminSession(): Promise<AdminSession | null> {
  const cookieStore = await cookies();
  return verifyAdminToken(cookieStore.get(COOKIE_NAME)?.value);
}

export const adminCookie = COOKIE_NAME;
