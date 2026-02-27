/**
 * This script generates personalized invitation links for each guest based on their unique ID.
 * It reads the guests.json file, constructs the URL for each guest, and prints it to the console.
 * The base URL is taken from the NETLIFY_URL environment variable.
 */
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import 'dotenv/config';

const __dirname = dirname(fileURLToPath(import.meta.url));
const guestsData = JSON.parse(readFileSync(join(__dirname, '../app/data/guests.json'), 'utf-8'));

const BASE_URL = process.env.NETLIFY_URL;

const sanitizedBase = BASE_URL.trim().replace(/;$/, '').replace(/\/$/, '');

guestsData.guests.forEach(guest => {
  const url = `${sanitizedBase}/${guest.id}`;
  console.log(`${guest.name}: ${url}, Espacios: ${guest.amount}`);
});