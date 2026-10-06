import type { ReactNode } from "react"

const kicker = "font-display text-[13px] font-medium leading-[1.35] tracking-[0.08em] text-muted uppercase"

export function Kicker({ as: Tag = "p", children }: { as?: "p" | "h2"; children: ReactNode }) {
  return <Tag className={kicker}>{children}</Tag>
}

export function Meta({ children, pin = false }: { children: ReactNode; pin?: boolean }) {
  return (
    <p className={`font-display text-sm font-medium leading-[1.35] tracking-[0.04em] text-muted tabular-nums ${pin ? "shrink-0" : ""}`}>
      {children}
    </p>
  )
}

export function Lede({ children }: { children: ReactNode }) {
  return <p className="font-display text-[26px] font-bold leading-[1.35] tracking-[0.04em] uppercase">{children}</p>
}

export function Display({ children }: { children: ReactNode }) {
  return <p className="font-display text-5xl font-bold leading-none tracking-[0.02em] tabular-nums">{children}</p>
}

export function Answer({ children }: { children: ReactNode }) {
  return <p className="text-base leading-normal">{children}</p>
}

export function Mono({ children }: { children: ReactNode }) {
  return <span className="font-mono text-sm">{children}</span>
}
