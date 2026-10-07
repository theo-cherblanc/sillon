import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, join, relative } from "node:path"
import { fileURLToPath } from "node:url"
import { parseCard } from "./parse-card.ts"
import { parseLesson } from "./parse-lesson.ts"
import { validateCards } from "./validate-cards.ts"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const cardsDir = join(root, "content/cards")
const lessonsDir = join(root, "content/lessons")
const cardsOut = join(root, "src/shared/content/cards.json")
const lessonsOut = join(root, "src/shared/content/lessons.json")

const cards = markdownFiles(cardsDir).sort().map((file) => parseCard(readFileSync(join(root, file), "utf8")))
const lessons = existsSync(lessonsDir)
  ? markdownFiles(lessonsDir).sort().map((file) => parseLesson(readFileSync(join(root, file), "utf8")))
  : []
validateCards(cards, lessons)
writeFileSync(cardsOut, `${JSON.stringify(cards, null, 2)}\n`)
writeFileSync(lessonsOut, `${JSON.stringify(lessons, null, 2)}\n`)

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
