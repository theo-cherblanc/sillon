import type { ReactNode } from "react"
import { Stack } from "../../../shared/ui/Stack.tsx"
import { Kicker, Lede } from "../../../shared/ui/Type.tsx"
import { PromptText } from "./PromptText.tsx"

export function Feedback({
  lead,
  correct,
  detail,
  explanation,
  notes,
}: {
  lead?: ReactNode
  correct: boolean | null
  detail?: ReactNode
  explanation: string
  notes?: ReactNode
}) {
  return (
    <Stack gap={6}>
      {lead}
      {correct === true ? <Lede>Bonne réponse.</Lede> : null}
      {correct === false ? (
        <Stack gap={3}>
          <Lede>Mauvaise réponse.</Lede>
          {detail}
        </Stack>
      ) : null}
      <Stack gap={4}>
        <Kicker as="h2">Explication</Kicker>
        <PromptText text={explanation} />
      </Stack>
      {notes}
    </Stack>
  )
}
