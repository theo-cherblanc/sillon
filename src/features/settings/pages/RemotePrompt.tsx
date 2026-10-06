import { useState } from "react"
import type { ProgressFile } from "../model/export.ts"
import { acceptRemoteMemory } from "../model/remoteMemory.ts"
import { localDate } from "../../../shared/lib/dates.ts"
import { Button } from "../../../shared/ui/Button.tsx"
import { Screen } from "../../../shared/ui/Screen.tsx"
import { Stack } from "../../../shared/ui/Stack.tsx"
import { Lede, Meta } from "../../../shared/ui/Type.tsx"

export function RemotePrompt({
  file,
  onDone,
  onDismiss,
}: {
  file: ProgressFile
  onDone: () => void
  onDismiss: () => void
}) {
  const [busy, setBusy] = useState(false)
  const [problem, setProblem] = useState<string | null>(null)

  async function accept() {
    setBusy(true)
    setProblem(null)
    try {
      await acceptRemoteMemory(file)
      onDone()
    } catch {
      setProblem("La copie distante n'a pas pu remplacer la mémoire.")
      setBusy(false)
    }
  }

  return (
    <Screen
      title="Mémoire"
      dock={
        <>
          <Button variant="accent" disabled={busy} onClick={() => void accept()}>
            Remplacer
          </Button>
          <Button disabled={busy} onClick={onDismiss}>
            Annuler
          </Button>
        </>
      }
    >
      <Stack gap={6}>
        <Stack gap={3}>
          <Lede>Remplacer la mémoire actuelle ?</Lede>
          <Meta>
            Copie du {localDate(new Date(file.exportedAt))} · Série {file.profile.streak} · {file.profile.xp} XP
          </Meta>
        </Stack>
        {problem ? <p>{problem}</p> : null}
      </Stack>
    </Screen>
  )
}
