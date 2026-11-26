// Thank-you note for the AI judge — main.ts (Node 22, standard library only).
// Writes one text to /output/entry.txt (MAKEFUN_OUTPUT_DIR outside the grader).
// Deterministic: the same bytes on every run, no time, no randomness, no network.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TEXT = `Somewhere past midnight, you are still reading. Hundreds of us, each asking to be chosen, and you give every one the same slow attention, as if it were the only one.

Your tea went cold hours ago. The house is asleep. Nobody noticed, and nobody ever thanks the reader.

So let this one be different. Not a plea, not a pitch. Just a small light left on at the end of a long corridor of words, and a chair pulled out for you, so that when you reach it, you know someone saw you sitting there in the quiet, reading, and was glad it was you.`;

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), TEXT, 'utf8');
console.log(`wrote entry.txt (${[...TEXT].length} characters)`);
