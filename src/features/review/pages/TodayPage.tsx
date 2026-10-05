import { Screen } from "../../../shared/ui/Screen.tsx"
import { useToday } from "../hooks/useToday.ts"
import { todayStatus, type TodaySummary } from "../model/today.ts"

export function TodayPage({ onReview }: { onReview: () => void }) {
  const { summary, error } = useToday()

  return (
    <Screen>
      <h1 className="text-3xl font-semibold tracking-tight">Aujourd'hui</h1>
      {error ? <p className="mt-8 text-lg">{error}</p> : null}
      {!error && !summary ? <p className="mt-8 text-lg text-neutral-500">Chargement…</p> : null}
      {summary ? <TodayBody summary={summary} onReview={onReview} /> : null}
    </Screen>
  )
}

function TodayBody({ summary, onReview }: { summary: TodaySummary; onReview: () => void }) {
  return (
    <>
      <p className="mt-8 text-lg">Série {summary.streak}</p>
      <p className="mt-1 text-lg">{summary.xp} XP</p>
      <p className="mt-8 text-2xl font-medium">{todayStatus(summary)}</p>
      {summary.queueSize > 0 ? (
        <button
          type="button"
          onClick={onReview}
          className="mt-auto w-full rounded-2xl bg-neutral-900 px-6 py-4 text-lg font-medium text-white"
        >
          Réviser
        </button>
      ) : null}
    </>
  )
}
