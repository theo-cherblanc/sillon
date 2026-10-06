import { Kicker } from "../../../shared/ui/Type.tsx"

export function Lobby({ count, label }: { count: number; label: string }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-display text-[96px] leading-[0.9] font-bold tracking-[-0.03em] tabular-nums">{count}</p>
      <Kicker>{label}</Kicker>
    </div>
  )
}
