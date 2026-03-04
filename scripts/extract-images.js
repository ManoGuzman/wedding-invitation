/**
 * Extracts base64-encoded images from wedding_edit.svg.
 * 
 * Reads the wedding_edit.svg file, finds all base64-encoded PNG images,
 * and saves them as separate PNG files in the public/images directory.
 * 
 * @requires public/wedding_edit.svg - Source SVG file containing embedded images
 * 
 * @example
 * # Run the script
 * node extract-images.js
 * 
 * Output:
 * # Saved: public/images/hero-bg.png
 * # Saved: public/images/middle-decoration.png
 * # Saved: public/images/border-decoration.png
 * # Saved: public/images/bottom-bg.png
 * # Image extraction complete.
 */ 
import { readFileSync, mkdirSync, writeFileSync } from 'fs';
import { dirname } from 'path';

const svgFilePath = 'public/wedding_edit.svg';
const outputDir = 'public/images';
const imageNames = ['hero-bg', 'middle-decoration', 'border-decoration', 'bottom-bg'];
const base64Regex = /data:image\/png;base64,([^"']+)/g;

/**
 * Ensures the output directory exists and saves the file.
 * 
 * @param {string} filename - Full path including filename
 * @param {Buffer} data - Binary data to write
 */
function ensureDirAndSave(filename, data) {
  mkdirSync(dirname(filename), { recursive: true });
  writeFileSync(filename, data);
  console.log(`Saved: ${filename}`);
}

/**
 * Extracts base64 images from SVG content and saves as PNG files.
 * 
 * @param {string} svgContent - The SVG file content as string
 * @param {RegExp} regex - Regular expression to match base64 images
 * @param {string[]} names - Array of names for the output files
 * @param {string} outDir - Output directory path
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

const svgContent = readFileSync(svgFilePath, 'utf8');
extractAndSaveImages(svgContent, base64Regex, imageNames, outputDir);
console.log('Image extraction complete.');