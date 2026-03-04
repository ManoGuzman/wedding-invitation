/**
 * Decrypts guest names from guests.encrypted.json.
 * 
 * Reads the guests.encrypted.json file, decrypts the encrypted names using AES-256-CBC
 * algorithm with the same password and salt used for encryption, and saves the decrypted
 * data to guests.decrypted.json in the app/data folder.
 * The IV (Initialization Vector) stored in the encrypted file is used for decryption.
 * 
 * @requires ALGORITHM - Encryption algorithm (must match the one used for encryption)
 * @requires PASSWORD - Password for key derivation (must match the one used for encryption)
 * 
 * @example
 * # Set environment variables and run
 * ALGORITHM=aes-256-cbc PASSWORD=your-secret node decrypt-guests.js
 * 
 * Output:
 * # Names decrypted and saved to app/data/guests.decrypted.json
 */
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

const encryptedPath = path.join(__dirname, '../app/data/guests.encrypted.json');
const outputPath = path.join(__dirname, '../app/data/guests.decrypted.json');

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

console.log('Names decrypted and saved to app/data/guests.decrypted.json');