/**
 * queryClient.ts - TanStack React Query Configuration
 *
 * Sets up the global QueryClient with default options and provides
 * utility functions for making API requests.
 *
 * Key exports:
 * - queryClient: Global QueryClient singleton used by QueryClientProvider
 * - apiRequest: Generic fetch wrapper for mutations (POST/PATCH/DELETE)
 * - getQueryFn: Default query function factory for GET requests
 */

import { QueryClient, QueryFunction } from "@tanstack/react-query";

/**
 * Response Error Handler
 *
 * Throws an error if the response is not OK (status >= 400).
 * Extracts error message from response body or status text.
 *
 * @param res - The fetch Response object to check
 * @throws Error with status code and message
 */
async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

/**
 * API Request Helper
 *
 * Generic fetch wrapper for making API calls with JSON body support.
 * Used by mutations (POST, PATCH, DELETE) throughout the app.
 *
 * @param method - HTTP method (POST, PATCH, DELETE, etc.)
 * @param url - API endpoint URL
 * @param data - Optional request body (will be JSON-stringified)
 * @returns The fetch Response object
 * @throws Error if response is not OK
 */
export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  const res = await fetch(url, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  await throwIfResNotOk(res);
  return res;
}

/**
 * Query Function Factory
 *
 * Creates a default query function for TanStack React Query GET requests.
 * Handles 401 (unauthorized) responses based on the specified behavior.
 *
 * @param options.on401 - How to handle 401 responses:
 *   - "returnNull": Return null (useful for optional auth checks)
 *   - "throw": Throw an error (default behavior)
 * @returns A QueryFunction compatible with TanStack React Query
 */
type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    const res = await fetch(queryKey.join("/") as string, {
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

/**
 * Global Query Client
 *
 * Singleton QueryClient with default options configured for this app:
 * - Default query function handles GET requests automatically
 * - No automatic refetching (data is mostly static)
 * - Infinite stale time (content doesn't change frequently)
 * - No retry on failure (fail fast for better UX)
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
