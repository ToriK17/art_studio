/**
 * Returns true if the painting title indicates the piece is available for purchase.
 */
export const isAvailable = (title: string): boolean =>
  title.toLowerCase().includes('available');

/**
 * Strips the availability/price suffix from a painting title.
 * Removes any parenthesized group containing "available", e.g.:
 *   "Outside of Paradise 2022 (Available $)"        → "Outside of Paradise 2022"
 *   "Luke 23:42 (The Weeping Sicario) 2020 (Available $)" → "Luke 23:42 (The Weeping Sicario) 2020"
 *   "Painting the Rain, CO (2024 - Available $$)"   → "Painting the Rain, CO"
 */
export const cleanTitle = (title: string): string =>
  title.replace(/\s*\([^)]*available[^)]*\)/gi, '').trim();
