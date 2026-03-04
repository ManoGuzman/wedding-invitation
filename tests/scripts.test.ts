/**
 * @jest-environment node
 */

import fs from 'fs';
import path from 'path';

describe('Dummy test suite', () => {
    it('should pass this dummy test', () => {
        expect(true).toBe(true);
    });
});

describe('extract-images.js', () => {
    const scriptPath = path.resolve(__dirname, '../scripts/extract-images.js');

    it('should exist', () => {
        expect(fs.existsSync(scriptPath)).toBe(true);
    });

    it('should be a valid JS file', () => {
        const content = fs.readFileSync(scriptPath, 'utf-8');
        expect(content).toContain('module.exports');
    });

    it('should not throw when imported', async () => {
        expect(async () => await import(scriptPath)).not.toThrow();
    });
});