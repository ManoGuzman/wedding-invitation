import { readFileSync, writeFileSync } from 'fs';
import { createDecipheriv, scryptSync } from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const algorithm = process.env.ALGORITHM;
const password = process.env.PASSWORD;
const salt = 'salt';
const keyLength = 32;
const key = scryptSync(password, salt, keyLength);

const encryptedPath = path.join(__dirname, 'guests.encrypted.json');
const outputPath = path.join(__dirname, 'guests.decrypted.json');

/**
 * Decrypts ciphertext using AES-256-CBC algorithm.
 *
 * @param {string} text - The encrypted text in hex format
 * @param {Buffer} iv - The Initialization Vector used during encryption
 * @returns {string} Decrypted text in UTF-8 format
 */
function decrypt(text, iv) {
    const decipher = createDecipheriv(algorithm, key, iv);
    return decipher.update(text, 'hex', 'utf8') + decipher.final('utf8');
}

/**
 * Reads and parses a JSON file.
 *
 * @param {string} filePath - Path to the JSON file
 * @returns {object} Parsed JSON object
 */
function readJSON(filePath) {
    return JSON.parse(readFileSync(filePath, 'utf8'));
}

/**
 * Writes data to a JSON file with pretty formatting (4-space indentation).
 *
 * @param {string} filePath - Path to write the file
 * @param {object} data - Data to serialize as JSON
 */
function writeJSON(filePath, data) {
    writeFileSync(filePath, JSON.stringify(data, null, 4));
}

const encryptedData = readJSON(encryptedPath);
const iv = Buffer.from(encryptedData.iv, 'hex');

const decryptedGuests = encryptedData.guests.map(guest => ({
    id: guest.id,
    name: decrypt(guest.name, iv),
    amount: guest.amount
}));

writeJSON(outputPath, {
    guests: decryptedGuests
});

console.log('Names decrypted and saved to src/guests/guests.decrypted.json');