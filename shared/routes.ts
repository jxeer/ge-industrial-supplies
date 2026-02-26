/**
 * routes.ts - Shared API Route Definitions
 *
 * Defines the API contract between frontend and backend using Zod schemas.
 * This file is imported by both the server (for route registration and
 * request validation) and the client (for type-safe API calls).
 *
 * Pattern:
 * - Each route defines: method, path, input schema, and response schemas
 * - Input schemas are used for request body validation
 * - Response schemas are used for type-safe response parsing
 */

import { z } from 'zod';
import { insertContactSchema, contactSubmissions } from './schema';

/**
 * Error Response Schemas
 *
 * Standard error response shapes used across API endpoints.
 */
export const errorSchemas = {
  /* Validation error with optional field name */
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  /* Generic internal server error */
  internal: z.object({
    message: z.string(),
  }),
};

/**
 * API Route Definitions
 *
 * Central registry of all API endpoints with their contracts.
 * Used by both server routes and client hooks for type safety.
 */
export const api = {
  contact: {
    /* POST /api/contact - Submit a contact form inquiry */
    submit: {
      method: 'POST' as const,
      path: '/api/contact',
      input: insertContactSchema,
      responses: {
        201: z.custom<typeof contactSubmissions.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
  },
};

/**
 * Build URL Helper
 *
 * Replaces URL path parameters with actual values.
 * Example: buildUrl("/api/users/:id", { id: 123 }) => "/api/users/123"
 *
 * @param path - URL path with :param placeholders
 * @param params - Key-value pairs to substitute into the path
 * @returns The fully resolved URL string
 */
export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
