/**
 * Centralized, typed access to public env vars. Never read
 * `process.env.NEXT_PUBLIC_*` directly elsewhere — import `env` from here.
 */
export const env = {
  NEXT_PUBLIC_API_BASE_URL:
    process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8000/api/v1",
} as const;
