/**
 * This script reads the guests.json file, encrypts the names using AES-256-CBC,
 * and saves the encrypted data to guests.encrypted.json in the app/data folder.
 * The IV is also saved in the output file for later decryption.
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
 * Encrypt function that takes the original text and returns the encrypted text
 * @param {*} text 
 * @returns Encrypted text in hex format
 */
function encrypt(text) {
    const cipher = createCipheriv(algorithm, key, iv);
    return cipher.update(text, 'utf8', 'hex') + cipher.final('hex');
}

/**
 * Read JSON file and parse it
 * @param {*} filePath 
 * @returns 
 */
function readJSON(filePath) {
    return JSON.parse(readFileSync(filePath, 'utf8'));
}

/**
 * Helper function to write JSON data to a file with pretty formatting
 * @param {*} filePath 
 * @param {*} data 
 */
function writeJSON(filePath, data) {
    writeFileSync(filePath, JSON.stringify(data, null, 4));
}

/** Read the guests.json file, encrypt the names, and save to guests.encrypted.json
 */
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