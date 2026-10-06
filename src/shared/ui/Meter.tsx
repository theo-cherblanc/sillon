import { Kicker, Meta } from "./Type.tsx"

export function ProgressMeter({ done, total }: { done: number; total: number }) {
  const width = total <= 0 ? 0 : Math.min(100, (done / total) * 100)
  const segmented = total > 0 && total <= 16
  return (
    <div className={segmented ? "flex flex-wrap items-center gap-x-2.5 gap-y-2" : "flex items-center gap-3"}>
      {segmented ? (
        Array.from({ length: total }, (_, index) => (
          <span key={index} className={index < done ? "h-2 w-4 shrink-0 -skew-x-[18deg] bg-accent" : "h-2 w-4 shrink-0 -skew-x-[18deg] bg-line"} />
        ))
      ) : (
        <Track width={width} />
      )}
      <Meta>
        {done} sur {total}
      </Meta>
    </div>
  )
}

export function XpMeter({ xp }: { xp: number }) {
  const track = xpTrack(xp)
  const span = track.to - track.from
  const width = span <= 0 ? 0 : Math.min(100, ((xp - track.from) / span) * 100)
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between gap-4">
        <Kicker>Niveau {track.level}</Kicker>
        <Meta>
          {formatCount(xp)} / {formatCount(track.to)}
        </Meta>
      </div>
      <Track width={width} />
    </div>
  )
}

function Track({ width }: { width: number }) {
  return (
    <div className="h-2 flex-1 overflow-hidden bg-surface">
      <div
        className="h-full bg-accent transition-[width] duration-[280ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
        style={{ width: `${width}%` }}
      />
    </div>
  )
}

function formatCount(value: number) {
  return value.toLocaleString("fr-FR")
}

function xpTrack(xp: number): { from: number; to: number; level: number } {
  const safe = Math.max(0, xp)
  const steps = [100, 500, 1000, 2500, 5000]
  let from = 0
  let level = 1
  for (const step of steps) {
    if (safe < step) {
      return { from, to: step, level }
    }
    from = step
    level += 1
  }
  const size = 5000
  const index = Math.floor((safe - from) / size)
  const start = from + index * size
  return { from: start, to: start + size, level: level + index }
}
