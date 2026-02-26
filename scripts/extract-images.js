import { readFileSync, mkdirSync, writeFileSync } from 'fs';
import { dirname } from 'path';

const svgFilePath = 'public/wedding_edit.svg';
const outputDir = 'public/images';
const svgContent = readFileSync(svgFilePath, 'utf8');
const base64Regex = /data:image\/png;base64,([^"']+)/g;
const imageNames = ['hero-bg', 'middle-decoration', 'border-decoration', 'bottom-bg'];

function saveImage(base64, name) {
  const filename = `${outputDir}/${name}.png`;
  mkdirSync(dirname(filename), { recursive: true });
  writeFileSync(filename, Buffer.from(base64, 'base64'));
  console.log(`Saved: ${filename}`);
}

let match, index = 0;
while ((match = base64Regex.exec(svgContent)) !== null) {
  const name = imageNames[index] || `image-${index}`;
  saveImage(match[1], name);
  index++;
}

console.log('Image extraction complete.');