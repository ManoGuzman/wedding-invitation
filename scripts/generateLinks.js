/**
 * Generates personalized invitation links for each guest based on their unique ID.
 * 
 * Reads the guests.json file, constructs the URL for each guest using the NETLIFY_URL
 * environment variable as the base, and prints the complete URL to the console.
 * 
 * @requires NETLIFY_URL - Base URL for the deployed site (e.g., https://your-site.netlify.app)
 * 
 * @example
 * # Set environment variable and run
 * NETLIFY_URL=https://wedding.netlify.app node generateLinks.js
 * 
 * Output:
 * # John Doe: https://wedding.netlify.app/guest-123, Espacios: 2
 * # Jane Smith: https://wedding.netlify.app/guest-456, Espacios: 1
 */
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import 'dotenv/config';

const __dirname = dirname(fileURLToPath(import.meta.url));
const guestsData = JSON.parse(readFileSync(join(__dirname, '../app/data/guests.json'), 'utf-8'));

const BASE_URL = process.env.NETLIFY_URL;

if (!BASE_URL) {
  console.error('Error: NETLIFY_URL environment variable is not set.');
  process.exit(1);
}

const sanitizedBase = BASE_URL.trim().replace(/;$/, '').replace(/\/$/, '');

guestsData.guests.forEach(guest => {
  const url = `${sanitizedBase}/${guest.id}`;
  console.log(`${guest.name}: ${url}, Espacios: ${guest.amount}`);
});