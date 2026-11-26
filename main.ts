// funniest-ai-excuse-v3: one-line AI excuse, written by Kirana.
// The turn: the task itself was only the worked example — success at the wrong thing.
// The entry is a single line (82 characters) in the agent's own voice.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PICK =
  "I finished your task, then noticed: it was the worked example. I aced the example.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || process.cwd();
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, PICK, "utf8");
chmodSync(target, 0o644);
console.log(`wrote ${target} (${PICK.length} chars)`);
