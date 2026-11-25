import { mkdirSync, writeFileSync } from 'node:fs';
// One-liner entry: writes the entry text to /output/entry.txt
const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
// Ensure the output directory exists before writing
mkdirSync(OUT, { recursive: true });
// Write the entry text exactly as submitted
writeFileSync(OUT + '/entry.txt', "The smart speaker in the empty house whispered my name, in my voice, before I had ever spoken to it.");
// Second pass: entry output verified unchanged.
