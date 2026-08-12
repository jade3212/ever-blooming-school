import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is required. Add it to .env.local before using the admission system.");
}

const globalForDb = globalThis as typeof globalThis & {
  __everBloomingPostgresqlPool?: Pool;
};

export const pool =
  globalForDb.__everBloomingPostgresqlPool ??
  new Pool({
    connectionString: databaseUrl,
    max: 10,
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: 10_000,
  });

if (process.env.NODE_ENV !== "production") {
  globalForDb.__everBloomingPostgresqlPool = pool;
}

export const db = drizzle(pool);
