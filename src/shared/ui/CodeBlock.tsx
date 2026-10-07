import { highlightTokens } from "../lib/highlight.ts"

const tone: Record<string, string> = {
  comment: "text-muted",
  prolog: "text-muted",
  doctype: "text-muted",
  cdata: "text-muted",
  punctuation: "text-muted",
  operator: "text-muted",
  keyword: "text-accent",
  important: "text-accent",
  builtin: "text-accent",
  tag: "text-accent",
  atrule: "text-accent",
  "attr-name": "text-accent",
  selector: "text-accent",
  property: "text-accent",
  boolean: "text-accent",
  string: "text-success",
  char: "text-success",
  regex: "text-success",
  "attr-value": "text-success",
  "template-string": "text-success",
  number: "text-success",
}

export function CodeBlock({
  text,
  language,
  className = "",
}: {
  text: string
  language?: string
  className?: string
}) {
  const tokens = highlightTokens(text, language)
  return (
    <pre className={`overflow-x-auto bg-code px-3.5 py-3 font-mono text-sm leading-normal text-ink ${className}`.trim()}>
      <code>
        {tokens.map((token, index) => (
          <span key={index} className={tone[token.kind] ?? "text-ink"}>
            {token.text}
          </span>
        ))}
      </code>
    </pre>
  )
}
