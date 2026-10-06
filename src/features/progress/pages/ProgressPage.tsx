import { Screen } from "../../../shared/ui/Screen.tsx"
import { TabBar } from "../../../shared/ui/TabBar.tsx"
import { useProgress, type ProgressSummary } from "../hooks/useProgress.ts"

export function ProgressPage({
  onToday,
  onSettings,
  onLibrary,
}: {
  onToday: () => void
  onSettings: () => void
  onLibrary: () => void
}) {
  const { summary, error } = useProgress()

  return (
    <Screen>
      <h1 className="text-3xl font-semibold tracking-tight">Progression</h1>
      {error ? <p className="mt-8 text-lg">{error}</p> : null}
      {!error && !summary ? <p className="mt-8 text-lg text-neutral-500">Chargement…</p> : null}
      {summary ? <ProgressBody summary={summary} onLibrary={onLibrary} /> : null}
      <TabBar
        current="progress"
        onToday={onToday}
        onProgress={() => undefined}
        onSettings={onSettings}
        className="mt-auto"
      />
    </Screen>
  )
}

function ProgressBody({ summary, onLibrary }: { summary: ProgressSummary; onLibrary: () => void }) {
  return (
    <>
      <p className="mt-8 text-lg">Série {summary.streak}</p>
      <p className="mt-1 text-lg">Record {summary.bestStreak}</p>
      <p className="mt-1 text-lg">{summary.xp} XP</p>
      <h2 className="mt-8 text-sm font-medium text-neutral-500">Cartes</h2>
      <p className="mt-3 text-lg">{label(summary.fresh, "nouvelle", "nouvelles")}</p>
      <p className="mt-1 text-lg">{label(summary.learning, "en apprentissage", "en apprentissage")}</p>
      <p className="mt-1 text-lg">{label(summary.review, "à jour", "à jour")}</p>
      <button
        type="button"
        onClick={onLibrary}
        className="mt-8 w-full rounded-2xl border border-neutral-300 px-6 py-4 text-lg font-medium"
      >
        Voir les cartes
      </button>
    </>
  )
}

function label(count: number, singular: string, plural: string) {
  return `${count} ${count === 1 ? singular : plural}`
}
