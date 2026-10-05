import { Screen } from "../../../shared/ui/Screen.tsx"
import { TabBar } from "../../../shared/ui/TabBar.tsx"
import { useSettings, type SettingsSummary } from "../hooks/useSettings.ts"
import { maxDailyCount } from "../model/goals.ts"

export function SettingsPage({
  onToday,
  onProgress,
}: {
  onToday: () => void
  onProgress: () => void
}) {
  const { summary, error, saving, change } = useSettings()

  return (
    <Screen>
      <h1 className="text-3xl font-semibold tracking-tight">Réglages</h1>
      {error ? <p className="mt-8 text-lg">{error}</p> : null}
      {!error && !summary ? <p className="mt-8 text-lg text-neutral-500">Chargement…</p> : null}
      {summary ? <SettingsBody summary={summary} saving={saving} onChange={change} /> : null}
      <TabBar
        current="settings"
        onToday={onToday}
        onProgress={onProgress}
        onSettings={() => undefined}
        className="mt-auto"
      />
    </Screen>
  )
}

function SettingsBody({
  summary,
  saving,
  onChange,
}: {
  summary: SettingsSummary
  saving: boolean
  onChange: (dailyGoal: number, newPerDay: number) => void
}) {
  return (
    <>
      <Stepper
        label="Objectif du jour"
        value={summary.dailyGoal}
        saving={saving}
        onDecrease={() => onChange(summary.dailyGoal - 1, summary.newPerDay)}
        onIncrease={() => onChange(summary.dailyGoal + 1, summary.newPerDay)}
      />
      <Stepper
        label="Nouvelles par jour"
        value={summary.newPerDay}
        saving={saving}
        onDecrease={() => onChange(summary.dailyGoal, summary.newPerDay - 1)}
        onIncrease={() => onChange(summary.dailyGoal, summary.newPerDay + 1)}
      />
      <p className="mt-8 text-sm text-neutral-500">Schéma {summary.schemaVersion}</p>
    </>
  )
}

function Stepper({
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
    <section className="mt-8">
      <h2 className="text-sm font-medium text-neutral-500">{label}</h2>
      <div className="mt-3 flex items-center justify-between">
        <button
          type="button"
          aria-label={`Diminuer ${label}`}
          disabled={saving || value === 0}
          onClick={onDecrease}
          className="h-12 w-12 rounded-2xl border border-neutral-300 text-2xl leading-none disabled:opacity-40"
        >
          −
        </button>
        <p className="text-3xl font-medium">{value}</p>
        <button
          type="button"
          aria-label={`Augmenter ${label}`}
          disabled={saving || value === maxDailyCount}
          onClick={onIncrease}
          className="h-12 w-12 rounded-2xl border border-neutral-300 text-2xl leading-none disabled:opacity-40"
        >
          +
        </button>
      </div>
    </section>
  )
}
