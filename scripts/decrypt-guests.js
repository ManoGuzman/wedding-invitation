/**
 * This script decrypts the names of guests in the guests.encrypted.json file and saves the decrypted names to guests.decrypted.json.
 * It uses AES-256-CBC encryption with a predefined password and salt to derive the key.
 * The IV is stored in the encrypted JSON file and is used for decryption.
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

/** Decrypt function that takes the encrypted text and IV, and returns the decrypted text
 * @param {*} text 
 * @param {*} iv 
 * @returns Decrypted text in utf8 format
 */
function decrypt(text, iv) {
    const decipher = createDecipheriv(algorithm, key, iv);
    return decipher.update(text, 'hex', 'utf8') + decipher.final('utf8');
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