/**
 * use-contact.ts - Contact Form Submission Hook
 *
 * Custom React hook for submitting the contact form via the API.
 * Uses TanStack React Query's useMutation for async state management.
 *
 * Usage:
 *   const mutation = useSubmitContact();
 *   mutation.mutate(formData, { onSuccess, onError });
 *
 * The hook handles:
 * - Sending the POST request to /api/contact
 * - Parsing validation errors (400) with user-friendly messages
 * - Parsing successful responses (201) with type safety
 */

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type InsertContactSubmission } from "@shared/routes";

/**
 * useSubmitContact Hook
 *
 * Returns a mutation object for submitting contact form data.
 * Callers should handle onSuccess (show toast, reset form)
 * and onError (show error toast) in their mutation options.
 */
export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      /* Send contact form data to the API */
      const res = await fetch(api.contact.submit.path, {
        method: api.contact.submit.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      /* Handle validation errors with parsed error message */
      if (!res.ok) {
        if (res.status === 400) {
          const error = api.contact.submit.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error('Failed to submit message');
      }

      /* Parse and return successful response */
      return api.contact.submit.responses[201].parse(await res.json());
    },
  });
}
