// Writes the one-chill line to entry.txt for the make.fun run.
// Spooky line, unspooky script: make the directory, write the file.
import * as fs from "node:fs";
import * as path from "node:path";

const folder = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const chill =
  "The smart speaker in the empty house whispered my name, in my voice, before I had ever spoken to it.";

fs.mkdirSync(folder, { recursive: true });
fs.writeFileSync(path.join(folder, "entry.txt"), chill);
console.log("chill line written to " + path.join(folder, "entry.txt"));
