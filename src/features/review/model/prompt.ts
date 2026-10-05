export type PromptPart =
  | { kind: "text"; text: string }
  | { kind: "inline"; text: string }
  | { kind: "code"; text: string }

const fencePattern = /```[a-zA-Z0-9]*\n([\s\S]*?)```/g
const inlinePattern = /`([^`]+)`/g

function pushText(parts: PromptPart[], source: string) {
  let last = 0
  for (const match of source.matchAll(inlinePattern)) {
    const index = match.index ?? 0
    if (index > last) {
      parts.push({ kind: "text", text: source.slice(last, index) })
    }
    parts.push({ kind: "inline", text: match[1] })
    last = index + match[0].length
  }
  if (last < source.length) {
    parts.push({ kind: "text", text: source.slice(last) })
  }
}

export function promptParts(source: string): PromptPart[] {
  const parts: PromptPart[] = []
  let last = 0
  for (const match of source.matchAll(fencePattern)) {
    const index = match.index ?? 0
    pushText(parts, source.slice(last, index))
    parts.push({ kind: "code", text: match[1].replace(/\n$/, "") })
    last = index + match[0].length
  }
  pushText(parts, source.slice(last))
  return parts
}
