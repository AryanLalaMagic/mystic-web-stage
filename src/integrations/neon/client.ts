import { neon } from '@neondatabase/serverless';
import type { Database } from './types';

// Get the database URL from environment variables
const DATABASE_URL = import.meta.env.VITE_NEON_DATABASE_URL || process.env.NEON_DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error('Missing NEON_DATABASE_URL environment variable');
}

// Create the Neon client
export const neonClient = neon(DATABASE_URL);

// For server-side usage (API routes, etc.)
export const getNeonClient = () => {
  return neon(DATABASE_URL);
};

// Export types for use in components
export type { Database } from './types';
