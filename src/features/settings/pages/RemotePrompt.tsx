import { useState } from "react"
import type { ProgressFile } from "../model/export.ts"
import { acceptRemoteMemory } from "../model/remoteMemory.ts"
import { localDate } from "../../../shared/lib/dates.ts"
import { Screen } from "../../../shared/ui/Screen.tsx"

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
    <Screen>
      <h1 className="text-3xl font-semibold tracking-tight">Remplacer la mémoire actuelle ?</h1>
      <p className="mt-8 text-neutral-500">
        Copie du {localDate(new Date(file.exportedAt))} · Série {file.profile.streak} · {file.profile.xp} XP
      </p>
      {problem ? <p className="mt-8 text-lg">{problem}</p> : null}
      <button
        type="button"
        onClick={() => void accept()}
        disabled={busy}
        className="mt-8 w-full rounded-2xl bg-neutral-900 px-6 py-4 text-lg font-medium text-white disabled:opacity-40"
      >
        Remplacer
      </button>
      <button
        type="button"
        onClick={onDismiss}
        disabled={busy}
        className="mt-3 w-full rounded-2xl border border-neutral-300 px-6 py-4 text-lg font-medium disabled:opacity-40"
      >
        Annuler
      </button>
    </Screen>
  )
}
