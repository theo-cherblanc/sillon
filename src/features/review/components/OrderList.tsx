import type { FormEvent } from "react"
import { Button } from "../../../shared/ui/Button.tsx"

export function OrderList({
  steps,
  onSubmit,
  onMove,
}: {
  steps: string[]
  onSubmit: () => void
  onMove: (index: number, direction: -1 | 1) => void
}) {
  return (
    <form
      id="order-form"
      onSubmit={(event: FormEvent) => {
        event.preventDefault()
        onSubmit()
      }}
    >
      <ul className="flex flex-col">
        {steps.map((step, index) => (
          <li key={step} className="flex items-center gap-3 border-t border-line py-3.5">
            <p className="min-w-0 flex-1">{step}</p>
            <Button variant="square" aria-label={`Monter ${step}`} disabled={index === 0} onClick={() => onMove(index, -1)}>
              ↑
            </Button>
            <Button
              variant="square"
              aria-label={`Descendre ${step}`}
              disabled={index === steps.length - 1}
              onClick={() => onMove(index, 1)}
            >
              ↓
            </Button>
          </li>
        ))}
      </ul>
    </form>
  )
}
