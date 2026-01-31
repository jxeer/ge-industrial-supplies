/**
 * schema.ts - Database Schema and Type Definitions
 * 
 * This file defines the database schema using Drizzle ORM and exports
 * TypeScript types for use throughout the application. It serves as the
 * single source of truth for data structures.
 * 
 * Key concepts:
 * - pgTable: Defines PostgreSQL table structure
 * - createInsertSchema: Generates Zod validation schemas from table definitions
 * - Type inference: Derives TypeScript types from schema for type safety
 */

import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// ============================================================================
// TABLE DEFINITIONS
// ============================================================================

/**
 * Contact Submissions Table
 * 
 * Stores all contact form submissions from the website.
 * Used by the Contact Us page to persist user inquiries.
 * 
 * Fields:
 * - id: Auto-incrementing primary key
 * - name: Full name of the person submitting (required)
 * - email: Email address for response (required)
 * - phone: Optional phone number
 * - company: Optional company/organization name
 * - message: The inquiry message (required)
 * - createdAt: Timestamp of submission (auto-generated)
 */
export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  company: text("company"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// ============================================================================
// VALIDATION SCHEMAS
// ============================================================================

/**
 * Insert Contact Schema
 * 
 * Zod validation schema for creating new contact submissions.
 * Automatically generated from the table definition, with auto-generated
 * fields (id, createdAt) omitted since they're handled by the database.
 * 
 * Used for:
 * - Form validation on the frontend
 * - Request body validation on the backend API
 */
export const insertContactSchema = createInsertSchema(contactSubmissions).omit({ 
  id: true, 
  createdAt: true 
});

// ============================================================================
// TYPE EXPORTS
// ============================================================================

/**
 * ContactSubmission Type
 * 
 * Represents a complete contact submission record from the database.
 * Includes all fields including auto-generated id and createdAt.
 * Used when reading/displaying submissions.
 */
export type ContactSubmission = typeof contactSubmissions.$inferSelect;

/**
 * InsertContactSubmission Type
 * 
 * Represents the data needed to create a new contact submission.
 * Excludes auto-generated fields (id, createdAt).
 * Used for form data and API request bodies.
 */
export type InsertContactSubmission = z.infer<typeof insertContactSchema>;
