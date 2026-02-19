import { readFileSync, mkdirSync, writeFileSync } from 'fs';
import { dirname } from 'path';

const svgFilePath = 'public/wedding_edit.svg';
const svgContent = readFileSync(svgFilePath, 'utf8');

// Regex to match base64 image data
const base64Regex = /data:image\/png;base64,([^"']+)/g;

let match;
let index = 0;
const imageNames = ['hero-bg', 'middle-decoration', 'border-decoration', 'bottom-bg'];

while ((match = base64Regex.exec(svgContent)) !== null) {
  const buffer = Buffer.from(match[1], 'base64');
  const filename = `public/images/${imageNames[index] || `image-${index}`}.png`;
  
  // Create directory if it doesn't exist
  mkdirSync(dirname(filename), { recursive: true });
  
  writeFileSync(filename, buffer);
  console.log(`Saved: ${filename}`);
  index++;
}

console.log('Image extraction complete.');