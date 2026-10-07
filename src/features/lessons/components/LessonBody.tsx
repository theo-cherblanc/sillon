import { CodeBlock } from "../../../shared/ui/CodeBlock.tsx"
import { inlineParts, lessonBlocks } from "../model/markdown.ts"

export function LessonBody({ body }: { body: string }) {
  return (
    <div className="flex flex-col gap-5">
      {lessonBlocks(body).map((block, index) => {
        if (block.kind === "heading") {
          return (
            <h2 key={index} className="font-display text-[22px] font-bold leading-[1.2] tracking-[0.04em] uppercase">
              {block.text}
            </h2>
          )
        }
        if (block.kind === "list") {
          return (
            <ul key={index} className="flex flex-col gap-2">
              {block.items.map((item) => (
                <li key={item} className="text-[17px] leading-[1.55]">
                  {rich(item)}
                </li>
              ))}
            </ul>
          )
        }
        if (block.kind === "code") {
          return <CodeBlock key={index} text={block.text} language={block.language} />
        }
        return (
          <p key={index} className="text-[17px] leading-[1.55]">
            {rich(block.text)}
          </p>
        )
      })}
    </div>
  )
}

function rich(text: string) {
  return inlineParts(text).map((part, index) => {
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
  })
}
