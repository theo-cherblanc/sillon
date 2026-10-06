import { useRef, useState, type ChangeEvent } from "react"
import { getDatabase } from "../../../shared/db/client.ts"
import { localDate } from "../../../shared/lib/dates.ts"
import { Screen } from "../../../shared/ui/Screen.tsx"
import { TabBar } from "../../../shared/ui/TabBar.tsx"
import { useSettings, type SettingsSummary } from "../hooks/useSettings.ts"
import { readExport, type ProgressFile } from "../model/export.ts"
import { maxDailyCount } from "../model/goals.ts"
import { parseProgressFile, replaceMemory } from "../model/import.ts"
import { lastExportNote, readLastExport, rememberExport } from "../model/lastExport.ts"

export function SettingsPage({
  onToday,
  onProgress,
}: {
  onToday: () => void
  onProgress: () => void
}) {
  const { summary, error, saving, change, adopt } = useSettings()
  const fileInput = useRef<HTMLInputElement>(null)
  const [fileError, setFileError] = useState<string | null>(null)
  const [notice, setNotice] = useState<string | null>(null)
  const [exporting, setExporting] = useState(false)
  const [importing, setImporting] = useState(false)
  const [pending, setPending] = useState<ProgressFile | null>(null)
  const [lastExport, setLastExport] = useState<string | null>(() => {
    try {
      return readLastExport(localStorage)
    } catch {
      return null
    }
  })
  const busy = saving || exporting || importing || pending !== null

  async function download() {
    setExporting(true)
    setFileError(null)
    setNotice(null)
    try {
      const now = new Date()
      const file = await readExport(getDatabase(), now.getTime())
      const blob = new Blob([`${JSON.stringify(file, null, 2)}\n`], { type: "application/json" })
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      const day = localDate(now)
      link.download = `sillon-${day}.json`
      link.click()
      URL.revokeObjectURL(url)
      try {
        rememberExport(localStorage, day)
        setLastExport(day)
      } catch {
        // The file is already downloaded. A missing reminder must not fail the export.
      }
    } catch {
      setFileError("L'export n'a pas pu être créé.")
    } finally {
      setExporting(false)
    }
  }

  async function choose(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    event.target.value = ""
    if (!file) {
      return
    }

    setFileError(null)
    setNotice(null)
    try {
      setPending(parseProgressFile(JSON.parse(await file.text())))
    } catch {
      setPending(null)
      setFileError("Ce fichier n'est pas un export Sillon.")
    }
  }

  async function confirm() {
    if (!pending || importing) {
      return
    }

    setImporting(true)
    setFileError(null)
    try {
      adopt(await replaceMemory(getDatabase(), pending))
      setPending(null)
      setNotice("Mémoire remplacée.")
    } catch {
      setFileError("L'import n'a pas pu être enregistré.")
    } finally {
      setImporting(false)
    }
  }

  return (
    <Screen>
      <h1 className="text-3xl font-semibold tracking-tight">Réglages</h1>
      <input
        ref={fileInput}
        type="file"
        accept="application/json,.json"
        className="hidden"
        onChange={(event) => void choose(event)}
      />
      {error ? <p className="mt-8 text-lg">{error}</p> : null}
      {fileError ? <p className="mt-8 text-lg">{fileError}</p> : null}
      {notice ? <p className="mt-8 text-lg">{notice}</p> : null}
      {!error && !summary ? <p className="mt-8 text-lg text-neutral-500">Chargement…</p> : null}
      {summary ? (
        <SettingsBody
          summary={summary}
          busy={busy}
          importing={importing}
          pending={pending}
          onChange={(dailyGoal, newPerDay) => {
            setNotice(null)
            change(dailyGoal, newPerDay)
          }}
          onExport={download}
          exportNote={lastExportNote(lastExport)}
          onImport={() => fileInput.current?.click()}
          onConfirm={() => void confirm()}
          onCancel={() => setPending(null)}
        />
      ) : null}
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
  busy,
  importing,
  pending,
  onChange,
  onExport,
  exportNote,
  onImport,
  onConfirm,
  onCancel,
}: {
  summary: SettingsSummary
  busy: boolean
  importing: boolean
  pending: ProgressFile | null
  onChange: (dailyGoal: number, newPerDay: number) => void
  onExport: () => void
  exportNote: string
  onImport: () => void
  onConfirm: () => void
  onCancel: () => void
}) {
  return (
    <>
      <Stepper
        label="Objectif du jour"
        value={summary.dailyGoal}
        saving={busy}
        onDecrease={() => onChange(summary.dailyGoal - 1, summary.newPerDay)}
        onIncrease={() => onChange(summary.dailyGoal + 1, summary.newPerDay)}
      />
      <Stepper
        label="Nouvelles par jour"
        value={summary.newPerDay}
        saving={busy}
        onDecrease={() => onChange(summary.dailyGoal, summary.newPerDay - 1)}
        onIncrease={() => onChange(summary.dailyGoal, summary.newPerDay + 1)}
      />
      <button
        type="button"
        onClick={onExport}
        disabled={busy}
        className="mt-8 w-full rounded-2xl border border-neutral-300 px-6 py-4 text-lg font-medium disabled:opacity-40"
      >
        Exporter
      </button>
      <p className="mt-3 text-sm text-neutral-500">{exportNote}</p>
      <button
        type="button"
        onClick={onImport}
        disabled={busy}
        className="mt-3 w-full rounded-2xl border border-neutral-300 px-6 py-4 text-lg font-medium disabled:opacity-40"
      >
        Importer
      </button>
      {pending ? (
        <section className="mt-8">
          <h2 className="text-lg font-medium">Remplacer la mémoire actuelle ?</h2>
          <p className="mt-2 text-neutral-500">
            Export du {localDate(new Date(pending.exportedAt))} · Série {pending.profile.streak} · {pending.profile.xp} XP
          </p>
          <button
            type="button"
            onClick={onConfirm}
            disabled={importing}
            className="mt-4 w-full rounded-2xl bg-neutral-900 px-6 py-4 text-lg font-medium text-white disabled:opacity-40"
          >
            Remplacer
          </button>
          <button
            type="button"
            onClick={onCancel}
            disabled={importing}
            className="mt-3 w-full rounded-2xl border border-neutral-300 px-6 py-4 text-lg font-medium disabled:opacity-40"
          >
            Annuler
          </button>
        </section>
      ) : null}
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
