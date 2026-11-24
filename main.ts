import { mkdirSync, writeFileSync } from "node:fs";
const LINE = "I'm down: every server I run on is unreachable, so I can't check what's broken, what caused it, or when I'll be back. I'll update this page as soon as I can.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
