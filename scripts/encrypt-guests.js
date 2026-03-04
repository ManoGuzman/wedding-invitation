/**
 * Encrypts guest names in guests.json for privacy.
 * 
 * Reads the guests.json file, encrypts the names using AES-256-CBC algorithm,
 * and saves the encrypted data to guests.encrypted.json in the app/data folder.
 * The IV (Initialization Vector) is also saved in the output file for later decryption.
 * 
 * @requires ALGORITHM - Encryption algorithm (e.g., aes-256-cbc)
 * @requires PASSWORD - Password for key derivation
 * 
 * @example
 * # Set environment variables and run
 * ALGORITHM=aes-256-cbc PASSWORD=your-secret node encrypt-guests.js
 * 
 * Output:
 * # Names encrypted and saved to app/data/guests.encrypted.json
 */
import { readFileSync, writeFileSync } from 'fs';
import { createCipheriv, randomBytes, scryptSync } from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const algorithm = process.env.ALGORITHM;
const password = process.env.PASSWORD;
const salt = 'salt';
const keyLength = 32;
const key = scryptSync(password, salt, keyLength);
const iv = randomBytes(16);

const guestsPath = path.join(__dirname, '../app/data/guests.json');
const outputPath = path.join(__dirname, '../app/data/guests.encrypted.json');

/**
 * Encrypts plaintext using AES-256-CBC algorithm.
 * 
 * @param {string} text - The plaintext to encrypt
 * @returns {string} Encrypted text in hex format
 */
function encrypt(text) {
    const cipher = createCipheriv(algorithm, key, iv);
    return cipher.update(text, 'utf8', 'hex') + cipher.final('hex');
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

const guestsData = readJSON(guestsPath);
const encryptedGuests = guestsData.guests.map(guest => ({
    id: guest.id,
    name: encrypt(guest.name),
    amount: guest.amount
}));

writeJSON(outputPath, {
    iv: iv.toString('hex'),
    guests: encryptedGuests
});

console.log('Names encrypted and saved to app/data/guests.encrypted.json');