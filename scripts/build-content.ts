import { readdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, join, relative } from "node:path"
import { fileURLToPath } from "node:url"
import { parseCard } from "./parse-card.ts"
import { validateCards } from "./validate-cards.ts"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const contentDir = join(root, "content/cards")
const outFile = join(root, "src/shared/content/cards.json")

const files = markdownFiles(contentDir).sort()
const cards = files.map((file) => parseCard(readFileSync(join(root, file), "utf8")))
validateCards(cards)
writeFileSync(outFile, `${JSON.stringify(cards, null, 2)}\n`)

function markdownFiles(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) {
      return markdownFiles(path)
    }
    if (entry.isFile() && entry.name.endsWith(".md")) {
      return [relative(root, path)]
    }
    return []
  })
}
