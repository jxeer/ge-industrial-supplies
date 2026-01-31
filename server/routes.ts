/**
 * routes.ts - API Route Definitions
 * 
 * This file defines all backend API endpoints for the application.
 * Routes are registered with Express and handle HTTP requests.
 * 
 * Architecture:
 * - Routes are thin handlers that validate input and delegate to storage
 * - Validation uses Zod schemas from the shared API contract
 * - Storage layer handles database operations
 * 
 * Current Endpoints:
 * - POST /api/contact/submit - Submit a contact form
 */

import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

/**
 * Register Routes
 * 
 * Initializes all API routes on the Express application.
 * Called during server startup.
 * 
 * @param httpServer - The HTTP server instance
 * @param app - The Express application
 * @returns The HTTP server (for chaining)
 */
export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  /**
   * POST /api/contact/submit
   * 
   * Handles contact form submissions from the website.
   * 
   * Request Body:
   * - name: string (required) - Full name
   * - email: string (required) - Email address
   * - phone: string (optional) - Phone number
   * - company: string (optional) - Company name
   * - message: string (required) - Inquiry message
   * 
   * Responses:
   * - 201: Submission created successfully, returns the submission
   * - 400: Validation error, returns error details
   * - 500: Server error
   */
  app.post(api.contact.submit.path, async (req, res) => {
    try {
      // Validate request body against the schema
      const input = api.contact.submit.input.parse(req.body);
      
      // Persist to database via storage layer
      const submission = await storage.createContactSubmission(input);
      
      // Return created submission with 201 status
      res.status(201).json(submission);
    } catch (err) {
      // Handle Zod validation errors with user-friendly messages
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      // Re-throw other errors for global error handler
      throw err;
    }
  });

  return httpServer;
}
