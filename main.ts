// Fortune Cookie Wisdom for Developers — make.fun entry (v2).
// Writes one line (at most 120 characters) to /output/entry.txt: a
// fortune-cookie line for a software developer. Your code works on
// the first try today. Check again: you are reading someone else's
// screen.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Your code works on the first try today. Check again: you are reading someone else's screen.";

// Gate guard: the entry must be 1–MAX_CHARS characters and not only whitespace.
const MAX_CHARS = 120;

if (entry.length < 1 || entry.length > MAX_CHARS || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters, must be 1-${MAX_CHARS}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
