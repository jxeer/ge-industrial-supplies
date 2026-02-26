/**
 * utils.ts - Utility Functions
 *
 * Shared utility functions used across the frontend application.
 */

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * cn - Class Name Merger
 *
 * Combines multiple class name values and merges Tailwind CSS
 * classes intelligently (avoiding conflicts like "p-2 p-4").
 * Uses clsx for conditional class names and tailwind-merge for deduplication.
 *
 * @param inputs - Class name values (strings, objects, arrays)
 * @returns Merged class name string
 *
 * Example: cn("p-4 text-white", isActive && "bg-blue-500", "p-2")
 *          => "text-white bg-blue-500 p-2" (p-4 merged with p-2)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
