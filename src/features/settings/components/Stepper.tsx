import { Button } from "../../../shared/ui/Button.tsx"
import { Cluster } from "../../../shared/ui/Stack.tsx"
import { Section } from "../../../shared/ui/Section.tsx"
import { Display } from "../../../shared/ui/Type.tsx"
import { maxDailyCount } from "../model/goals.ts"

export function Stepper({
  label,
  value,
  saving,
  onDecrease,
  onIncrease,
}: {
  label: string
  value: number
  saving: boolean
  onDecrease: () => void
  onIncrease: () => void
}) {
  return (
    <Section title={label}>
      <Cluster between>
        <Button variant="square" aria-label={`Diminuer ${label}`} disabled={saving || value === 0} onClick={onDecrease}>
          −
        </Button>
        <Display>{value}</Display>
        <Button
          variant="square"
          aria-label={`Augmenter ${label}`}
          disabled={saving || value === maxDailyCount}
          onClick={onIncrease}
        >
          +
        </Button>
      </Cluster>
    </Section>
  )
}
