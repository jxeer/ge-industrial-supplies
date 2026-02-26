/**
 * db.ts - Database Connection
 *
 * Establishes the PostgreSQL database connection using node-postgres
 * and initializes the Drizzle ORM instance.
 *
 * Requires the DATABASE_URL environment variable to be set.
 * Exports both the raw connection pool and the Drizzle ORM instance.
 */

import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;

/* Ensure database connection string is available */
if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

/* PostgreSQL connection pool */
export const pool = new Pool({ connectionString: process.env.DATABASE_URL });

/* Drizzle ORM instance with schema for type-safe queries */
export const db = drizzle(pool, { schema });
