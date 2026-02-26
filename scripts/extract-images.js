/**
 * This script extracts base64-encoded images from the wedding_edit.svg file and saves them as separate PNG files in the public/images directory.
 */ 
import { readFileSync, mkdirSync, writeFileSync } from 'fs';
import { dirname } from 'path';

const svgFilePath = 'public/wedding_edit.svg';
const outputDir = 'public/images';
const imageNames = ['hero-bg', 'middle-decoration', 'border-decoration', 'bottom-bg'];
const base64Regex = /data:image\/png;base64,([^"']+)/g;

/**
 * Helper function to ensure the output directory exists and save the file
 */
function ensureDirAndSave(filename, data) {
  mkdirSync(dirname(filename), { recursive: true });
  writeFileSync(filename, data);
  console.log(`Saved: ${filename}`);
}

/**
 * Function to extract base64 images from the SVG content and save them as PNG files
 * @param {*} svgContent 
 * @param {*} regex 
 * @param {*} names 
 * @param {*} outDir 
 */
function extractAndSaveImages(svgContent, regex, names, outDir) {
  let match, index = 0;
  while ((match = regex.exec(svgContent)) !== null) {
    const name = names[index] || `image-${index}`;
    const filename = `${outDir}/${name}.png`;
    ensureDirAndSave(filename, Buffer.from(match[1], 'base64'));
    index++;
  }
}

/**
 * Read the SVG file, extract images, and save them
 */
const svgContent = readFileSync(svgFilePath, 'utf8');
extractAndSaveImages(svgContent, base64Regex, imageNames, outputDir);
console.log('Image extraction complete.');