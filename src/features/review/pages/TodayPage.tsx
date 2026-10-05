import { todayStatus, type TodaySummary } from "../model/today.ts"
import { useToday } from "../hooks/useToday.ts"

export function TodayPage() {
  const { summary, error } = useToday()

  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-md flex-col bg-white px-6 pt-[max(1.5rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))] text-neutral-900">
      <h1 className="text-3xl font-semibold tracking-tight">Aujourd'hui</h1>
      {error ? <p className="mt-8 text-lg">{error}</p> : null}
      {!error && !summary ? <p className="mt-8 text-lg text-neutral-500">Chargement…</p> : null}
      {summary ? <TodayBody summary={summary} /> : null}
    </main>
  )
}

function TodayBody({ summary }: { summary: TodaySummary }) {
  return (
    <>
      <p className="mt-8 text-lg">Série {summary.streak}</p>
      <p className="mt-1 text-lg">{summary.xp} XP</p>
      <p className="mt-8 text-2xl font-medium">{todayStatus(summary)}</p>
      {summary.queueSize > 0 ? (
        <button
          type="button"
          className="mt-auto w-full rounded-2xl bg-neutral-900 px-6 py-4 text-lg font-medium text-white"
        >
          Réviser
        </button>
      ) : null}
    </>
  )
}
