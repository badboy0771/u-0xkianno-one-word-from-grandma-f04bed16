// One Word From Grandma — entry program (Node 22, no dependencies, no network).
//
// Writes exactly one word — the word a grandma would text about AI —
// to /output/entry.txt, and nothing else: no other words, no trailing
// newline, no extra bytes.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The entry word: "Roboot".
// A grandma's typo of "robot" — the double-o reads exactly like a
// grandmother thumbing a text about the new robot thing the grandkids
// keep talking about. Warm, a little baffled, tied to robots/AI,
// funny on its own, and instantly readable.
const WORD = "Roboot";

const OUT_PATH = "/output/entry.txt";

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

// --- Validation: exactly one word, 1-200 characters, not only whitespace ---
if (WORD.length === 0) fail("entry word is empty");
if (WORD.trim().length === 0) fail("entry word is only whitespace");
if (WORD.length < 1 || WORD.length > 200) {
  fail(`entry word must be 1-200 characters, got ${WORD.length}`);
}
// Competition gate: /output/entry.txt must be 1-30 UTF-8 characters.
if (WORD.length > 30) fail(`entry word exceeds the 30-character gate, got ${WORD.length}`);
if (/\s/.test(WORD)) fail("entry word must be exactly one word (no whitespace inside)");
// A real word only: letters, no digits, no punctuation tricks.
if (!/^[A-Za-z]+$/.test(WORD)) {
  fail("entry word must contain letters only (a real word, no punctuation tricks)");
}
if (WORD !== WORD.trim()) fail("entry word must not have leading or trailing whitespace");

// --- Write exactly the word, no trailing newline ---
mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, WORD, "utf8");

// --- Read back and verify byte-for-byte ---
const written = readFileSync(OUT_PATH, "utf8");
if (written !== WORD) {
  fail(`read-back mismatch: wrote ${JSON.stringify(WORD)}, read ${JSON.stringify(written)}`);
}
if (written.length !== WORD.length) {
  fail(`read-back length mismatch: expected ${WORD.length}, got ${written.length}`);
}
// Byte-level check: ASCII word, so byte length must equal char length,
// and there must be no trailing newline or any other byte.
const bytes = Buffer.from(written, "utf8");
if (bytes.length !== WORD.length) {
  fail(`byte-length mismatch: expected ${WORD.length} bytes, got ${bytes.length}`);
}
if (written.includes("\n") || written.includes("\r")) {
  fail("entry must not contain a newline");
}

console.log(`wrote ${JSON.stringify(written)} (${written.length} chars) to ${OUT_PATH}`);
