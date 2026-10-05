import { promptParts } from "../model/prompt.ts"

export function PromptText({ text }: { text: string }) {
  return (
    <div className="text-lg leading-relaxed">
      {promptParts(text).map((part, index) => {
        if (part.kind === "code") {
          return (
            <pre
              key={index}
              className="my-4 overflow-x-auto rounded-xl bg-neutral-100 p-4 font-mono text-sm leading-relaxed"
            >
              <code>{part.text}</code>
            </pre>
          )
        }
        if (part.kind === "inline") {
          return (
            <code key={index} className="rounded bg-neutral-100 px-1 font-mono text-[0.95em]">
              {part.text}
            </code>
          )
        }
        return (
          <span key={index} className="whitespace-pre-wrap">
            {part.text}
          </span>
        )
      })}
    </div>
  )
}
