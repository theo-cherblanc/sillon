import { Button } from "../../../shared/ui/Button.tsx"
import { Stack } from "../../../shared/ui/Stack.tsx"
import type { GradeChoice } from "../model/grade.ts"

const gradeLabel: Record<GradeChoice, string> = {
  again: "À revoir",
  guessed: "J'ai deviné",
  hesitated: "J'ai hésité",
  knew: "Je savais",
}

export function GradeDock({
  choices,
  delay,
  saving,
  onGrade,
}: {
  choices: GradeChoice[]
  delay: (choice: GradeChoice) => string
  saving: boolean
  onGrade: (choice: GradeChoice) => void
}) {
  return (
    <Stack gap={2} rise>
      {choices.map((choice) => (
        <Button
          key={choice}
          variant="left"
          disabled={saving}
          hint={delay(choice)}
          onClick={() => onGrade(choice)}
        >
          {gradeLabel[choice]}
        </Button>
      ))}
    </Stack>
  )
}
