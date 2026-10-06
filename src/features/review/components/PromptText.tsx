import { promptParts } from "../model/prompt.ts"

export function PromptText({ text }: { text: string }) {
  return (
    <div className="text-[17px] leading-[1.55]">
      {promptParts(text).map((part, index) => {
        if (part.kind === "code") {
          return (
            <pre key={index} className="my-3 overflow-x-auto bg-code px-3.5 py-3 font-mono text-sm leading-normal">
              <code>{part.text}</code>
            </pre>
          )
        }
        if (part.kind === "inline") {
          return (
            <code key={index} className="bg-code px-1 font-mono text-[0.92em]">
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
