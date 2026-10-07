export type LessonBlock =
  | { kind: "heading"; text: string }
  | { kind: "paragraph"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "code"; text: string }

export type InlinePart = { kind: "text"; text: string } | { kind: "inline"; text: string }

const inlinePattern = /`([^`]+)`/g

export function lessonBlocks(source: string): LessonBlock[] {
  const lines = source.replaceAll("\r\n", "\n").split("\n")
  const blocks: LessonBlock[] = []
  let index = 0

  while (index < lines.length) {
    const line = lines[index]
    if (line.trim() === "") {
      index += 1
      continue
    }

    if (line.startsWith("```")) {
      const chunk: string[] = []
      index += 1
      while (index < lines.length && !lines[index].startsWith("```")) {
        chunk.push(lines[index])
        index += 1
      }
      if (index < lines.length) {
        index += 1
      }
      blocks.push({ kind: "code", text: chunk.join("\n") })
      continue
    }

    if (line.startsWith("## ")) {
      blocks.push({ kind: "heading", text: line.slice(3).trim() })
      index += 1
      continue
    }

    if (line.startsWith("- ")) {
      const items: string[] = []
      while (index < lines.length && lines[index].startsWith("- ")) {
        items.push(lines[index].slice(2).trim())
        index += 1
      }
      blocks.push({ kind: "list", items })
      continue
    }

    const paragraph: string[] = []
    while (
      index < lines.length &&
      lines[index].trim() !== "" &&
      !lines[index].startsWith("## ") &&
      !lines[index].startsWith("- ") &&
      !lines[index].startsWith("```")
    ) {
      paragraph.push(lines[index].trim())
      index += 1
    }
    blocks.push({ kind: "paragraph", text: paragraph.join(" ") })
  }

  return blocks
}

export function inlineParts(source: string): InlinePart[] {
  const parts: InlinePart[] = []
  let last = 0
  for (const match of source.matchAll(inlinePattern)) {
    const at = match.index ?? 0
    if (at > last) {
      parts.push({ kind: "text", text: source.slice(last, at) })
    }
    parts.push({ kind: "inline", text: match[1] })
    last = at + match[0].length
  }
  if (last < source.length) {
    parts.push({ kind: "text", text: source.slice(last) })
  }
  return parts
}
