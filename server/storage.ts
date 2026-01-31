/**
 * storage.ts - Data Access Layer
 * 
 * This file implements the storage interface for database operations.
 * It provides an abstraction layer between the API routes and the database,
 * making it easy to:
 * - Test routes with mock storage
 * - Switch database implementations if needed
 * - Keep database logic centralized
 * 
 * Architecture:
 * - IStorage interface defines the contract for storage operations
 * - DatabaseStorage implements the interface using Drizzle ORM
 * - Exported storage instance is used throughout the application
 */

import { db } from "./db";
import {
  contactSubmissions,
  type ContactSubmission,
  type InsertContactSubmission,
} from "@shared/schema";

// ============================================================================
// STORAGE INTERFACE
// ============================================================================

/**
 * IStorage Interface
 * 
 * Defines the contract for all storage operations.
 * Any storage implementation must provide these methods.
 * This allows for easy testing with mock implementations
 * and potential future database changes.
 */
export interface IStorage {
  /**
   * Create a new contact submission
   * @param submission - The submission data (name, email, message, etc.)
   * @returns The created submission with id and timestamp
   */
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
}

// ============================================================================
// DATABASE STORAGE IMPLEMENTATION
// ============================================================================

/**
 * DatabaseStorage Class
 * 
 * Implements IStorage using PostgreSQL via Drizzle ORM.
 * Handles all database operations for the application.
 */
export class DatabaseStorage implements IStorage {
  /**
   * Create Contact Submission
   * 
   * Inserts a new contact form submission into the database.
   * The database automatically generates the id and createdAt fields.
   * 
   * @param submission - The validated submission data
   * @returns The complete submission record with generated fields
   */
  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const [result] = await db
      .insert(contactSubmissions)
      .values(submission)
      .returning();
    return result;
  }
}

// ============================================================================
// EXPORTED INSTANCE
// ============================================================================

/**
 * Storage Instance
 * 
 * The singleton storage instance used throughout the application.
 * Import this in route handlers to perform database operations.
 */
export const storage = new DatabaseStorage();
