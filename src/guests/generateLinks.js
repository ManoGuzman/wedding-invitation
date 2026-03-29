import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import 'dotenv/config';

const __dirname = dirname(fileURLToPath(import.meta.url));
const guestsData = JSON.parse(readFileSync(join(__dirname, 'guests.json'), 'utf-8'));

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