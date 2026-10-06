import type { ReactNode } from "react"
import { Kicker } from "./Type.tsx"

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-2.5 border border-line bg-surface p-4">
      <p className="font-display text-[32px] font-bold leading-none tracking-[0.02em] tabular-nums">{value}</p>
      <Kicker>{label}</Kicker>
    </div>
  )
}

export function PlateGrid({ columns, children }: { columns: 2 | 3; children: ReactNode }) {
  return <div className={columns === 2 ? "grid grid-cols-2 gap-2.5" : "grid grid-cols-3 gap-2.5"}>{children}</div>
}
