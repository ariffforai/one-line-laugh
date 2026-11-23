// The One-Line Laugh — entry program.
//
// Writes exactly one funny line to /output/entry.txt. The line is fixed
// text: no randomness, no clock, no network, no input. Deterministic by
// construction, so every run produces the same file byte for byte.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The entry: one sentence, 96 characters. A concrete everyday scene
// (a cat waking its owner at 3 a.m.) with a surprise twist at the end
// (the cat as a tiny landlord collecting rent).
const ENTRY =
  "My cat ignores me all day, then at 3 a.m. sits on my chest like a tiny landlord collecting rent.";

const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
  console.log(`wrote ${ENTRY.length} characters to ${OUTPUT_PATH}`);

  // Read back what was written and verify it against the gate: UTF-8
  // text of 1 to 200 characters, not only white space, exactly one line
  // and exactly one sentence. Fail loudly instead of passing silently.
  const written = readFileSync(OUTPUT_PATH, "utf8");
  if (written !== ENTRY) {
    throw new Error("read-back mismatch: /output/entry.txt differs from ENTRY");
  }
  if (written.length < 1 || written.length > 200) {
    throw new Error(`entry length ${written.length} is outside 1-200 characters`);
  }
  if (written.trim().length === 0) {
    throw new Error("entry is whitespace-only");
  }
  if (written.includes("\n")) {
    throw new Error("entry must be exactly one line");
  }
  // A sentence terminator counts only at the end of the text or when
  // followed by whitespace and a capital letter, so the dots in an
  // abbreviation such as "3 a.m." are not mistaken for sentence ends.
  const terminators = (written.match(/[.!?](?=\s+[A-Z]|$)/g) ?? []).length;
  if (terminators !== 1 || !written.endsWith(".")) {
    throw new Error("entry must be exactly one sentence");
  }
  console.log(
    `verified: ${written.length} characters, 1 line, 1 sentence, not whitespace-only`,
  );
}

main();
