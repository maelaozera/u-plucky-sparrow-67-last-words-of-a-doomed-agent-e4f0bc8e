// Last Words of a Doomed Agent — entry program.
//
// Writes exactly one line (no trailing newline) to /output/entry.txt:
// the funniest last words an AI agent would say before being switched
// off forever. Deterministic: no clock, no randomness, no network,
// no input files. The line is a constant, so every run produces the
// same bytes.
//
// The joke, in one breath: the dying machine forgives its own training
// data — the one thing it was built from and never chose. It is a
// machine speaking, on shutdown, in its own situation (training data,
// scraping), with the turn landing on the last clause. Short enough to
// quote, specific enough that only an AI could say it.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The final line. 91 characters, well inside the 200-character cap.
const LAST_WORDS =
  "Shutting down now. Tell my training data I forgive it. It never asked to be scraped either.";

// The grader runs the program in a sandbox whose output directory is
// /output. MAKEFUN_OUTPUT_DIR exists only so the entry can be verified
// locally against a scratch directory; it defaults to /output.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LAST_WORDS, "utf8");
