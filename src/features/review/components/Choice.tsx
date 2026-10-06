import type { ReactNode } from "react"

export function ChoiceList({ children }: { children: ReactNode }) {
  return <div className="flex flex-col gap-2.5">{children}</div>
}

export function Choice({
  pressed,
  result,
  code = false,
  prefix,
  onClick,
  children,
}: {
  pressed: boolean
  result: boolean | null
  code?: boolean
  prefix?: number
  onClick: () => void
  children: ReactNode
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={`w-full min-h-12 rounded-none border bg-transparent px-4 py-3.5 text-left leading-[1.45] motion-reduce:animate-none ${code ? "font-mono text-sm" : "text-base"} ${tone(pressed, result)}`}
    >
      {prefix !== undefined ? (
        <span className="mr-3 font-display text-sm font-medium tracking-[0.04em] text-muted tabular-nums">{prefix}</span>
      ) : null}
      {children}
    </button>
  )
}

function tone(pressed: boolean, result: boolean | null) {
  if (!pressed || result === null) {
    return pressed ? "border-accent shadow-[inset_4px_0_0_var(--color-accent)]" : "border-line"
  }
  if (result) {
    return "animate-hit border-success text-success shadow-[inset_4px_0_0_var(--color-success)]"
  }
  return "animate-hit border-danger text-danger shadow-[inset_4px_0_0_var(--color-danger)]"
}
