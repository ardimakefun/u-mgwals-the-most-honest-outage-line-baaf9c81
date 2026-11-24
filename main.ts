import { mkdirSync, writeFileSync } from "node:fs";
const LINE = "I'm down: every server I run on is unreachable, so I can't check what's broken, what caused it, or when I'll be back. I'll update this page as soon as I can.";
const MAX_LENGTH = 160;
const length = [...LINE].length;
if (length < 1 || length > MAX_LENGTH) {
  console.error(`entry length ${length} is outside the 1..${MAX_LENGTH} character gate`);
  process.exit(1);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
