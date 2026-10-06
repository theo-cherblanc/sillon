import type { ReactNode } from "react"
import { Kicker } from "./Type.tsx"

export function BadgeGrid({ children }: { children: ReactNode }) {
  return <ul className="grid grid-cols-2 gap-2.5">{children}</ul>
}

export function Badge({ earned, label }: { earned: boolean; label: string }) {
  return (
    <li
      className={
        earned
          ? "flex flex-col items-start gap-2 border border-accent bg-[color-mix(in_srgb,var(--color-accent)_16%,transparent)] p-3.5 font-display text-base leading-[1.3] font-medium tracking-[0.03em] text-ink uppercase"
          : "flex flex-col items-start gap-2 border border-line p-3.5 font-display text-base leading-[1.3] font-medium tracking-[0.03em] text-muted uppercase"
      }
    >
      <Kicker>{earned ? "Débloqué" : "Verrouillé"}</Kicker>
      {label}
    </li>
  )
}
