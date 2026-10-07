import "./prism-boot.ts"
import "prismjs/components/prism-markup.js"
import "prismjs/components/prism-clike.js"
import "prismjs/components/prism-javascript.js"
import "prismjs/components/prism-typescript.js"
import Prism from "prismjs"

export type CodeToken = {
  text: string
  kind: string
}

export function highlightTokens(source: string, language = "typescript"): CodeToken[] {
  const grammar = grammarFor(language)
  if (!grammar) {
    return source.length === 0 ? [] : [{ text: source, kind: "plain" }]
  }
  return flatten(Prism.tokenize(source, grammar))
}

function grammarFor(language: string): Prism.Grammar | undefined {
  const id = languageAlias(language)
  return Prism.languages[id] ?? Prism.languages.javascript
}

export function languageAlias(language: string): string {
  const key = language.trim().toLowerCase()
  if (key === "" || key === "ts" || key === "tsx" || key === "typescript") {
    return "typescript"
  }
  if (key === "js" || key === "jsx" || key === "javascript") {
    return "javascript"
  }
  if (key === "html" || key === "xml" || key === "svg") {
    return "markup"
  }
  return key
}

function flatten(tokens: Array<string | Prism.Token>): CodeToken[] {
  const out: CodeToken[] = []
  for (const token of tokens) {
    if (typeof token === "string") {
      if (token.length > 0) {
        out.push({ text: token, kind: "plain" })
      }
      continue
    }
    const nested = token.content
    if (typeof nested === "string") {
      out.push({ text: nested, kind: token.type })
      continue
    }
    const children = flatten(Array.isArray(nested) ? nested : [nested])
    for (const child of children) {
      out.push({
        text: child.text,
        kind: child.kind === "plain" ? token.type : child.kind,
      })
    }
  }
  return out
}
