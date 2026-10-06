import { Button } from "../../../shared/ui/Button.tsx"
import { Field } from "../../../shared/ui/Field.tsx"
import { Stack } from "../../../shared/ui/Stack.tsx"

export function ClozeDock({
  value,
  onChange,
  onSubmit,
}: {
  value: string
  onChange: (value: string) => void
  onSubmit: () => void
}) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (value.trim().length === 0) {
          return
        }
        onSubmit()
      }}
    >
      <Stack gap={2}>
        <Field
          mono
          value={value}
          onChange={(event) => onChange(event.target.value)}
          aria-label="Texte manquant"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
        />
        <Button variant="accent" type="submit" disabled={value.trim().length === 0}>
          Vérifier
        </Button>
      </Stack>
    </form>
  )
}
