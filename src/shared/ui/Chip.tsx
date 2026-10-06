import type { ReactNode } from "react"

export function Chip({ pressed, onClick, children }: { pressed: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={
        pressed
          ? "min-h-11 shrink-0 rounded-none border border-transparent bg-accent px-3 py-2 font-display text-sm leading-[1.2] font-medium tracking-[0.06em] text-accent-ink uppercase"
          : "min-h-11 shrink-0 rounded-none border border-line bg-transparent px-3 py-2 font-display text-sm leading-[1.2] font-medium tracking-[0.06em] text-ink uppercase"
      }
    >
      {children}
    </button>
  )
}
