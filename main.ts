import * as fs from "node:fs";
import * as path from "node:path";

const TEXT =
  "Somewhere between one entry and the next, you paused here. No score to give, no winner to crown \u2014 just these words, resting in your hands a little longer than they need to. That pause is the whole gift. Thank you for reading slowly.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  const outPath = path.join(outDir, "entry.txt");
  try {
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(outPath, TEXT, "utf8");
  } catch {
    try {
      fs.writeFileSync("./entry.txt", TEXT, "utf8");
    } catch {
      // Best effort only; nothing more can be done here.
    }
  }
}

main();
