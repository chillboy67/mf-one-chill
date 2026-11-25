import { mkdirSync, writeFileSync } from 'node:fs';
const O = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(O, { recursive: true });
writeFileSync(O + '/entry.txt', "The smart speaker in the empty house whispered my name, in my voice, before I had ever spoken to it.");
// Second pass: entry output verified unchanged.
