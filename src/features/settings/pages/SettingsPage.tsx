import { useRef, useState, type ChangeEvent } from "react"
import { getDatabase } from "../../../shared/db/client.ts"
import { localDate } from "../../../shared/lib/dates.ts"
import { Screen } from "../../../shared/ui/Screen.tsx"
import { TabBar } from "../../../shared/ui/TabBar.tsx"
import { useSettings, type SettingsSummary } from "../hooks/useSettings.ts"
import { useAccount } from "../hooks/useAccount.ts"
import { readExport, type ProgressFile } from "../model/export.ts"
import { maxDailyCount } from "../model/goals.ts"
import { parseProgressFile, replaceMemory } from "../model/import.ts"
import { lastExportNote, readLastExport, rememberExport } from "../model/lastExport.ts"
import { publishMemory } from "../model/remoteMemory.ts"
import { paintTheme, readTheme, rememberTheme, type Theme } from "../model/theme.ts"

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
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      return readTheme(localStorage)
    } catch {
      return "light"
    }
  })
  const busy = saving || exporting || importing || pending !== null

  function chooseTheme(next: Theme) {
    try {
      rememberTheme(localStorage, next)
      paintTheme(document.documentElement, next)
      document.querySelector('meta[name="theme-color"]')?.setAttribute("content", next === "dark" ? "#171717" : "#ffffff")
      setTheme(next)
    } catch {
      // The previous theme stays if the browser refuses the write.
    }
  }

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
      void publishMemory(Date.now())
    } catch {
      setFileError("L'import n'a pas pu être enregistré.")
    } finally {
      setImporting(false)
    }
  }

  return (
    <Screen>
      <h1 className="text-3xl font-semibold tracking-tight">Réglages</h1>
      <section className="mt-8">
        <h2 className="text-sm font-medium text-neutral-500">Apparence</h2>
        <div className="mt-3 flex gap-3">
          <ThemeChip label="Clair" selected={theme === "light"} onSelect={() => chooseTheme("light")} />
          <ThemeChip label="Sombre" selected={theme === "dark"} onSelect={() => chooseTheme("dark")} />
        </div>
      </section>
      <AccountSection />
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

function AccountSection() {
  const account = useAccount()
  const [address, setAddress] = useState("")
  const [password, setPassword] = useState("")
  const [busy, setBusy] = useState(false)
  const [problem, setProblem] = useState<string | null>(null)
  const [note, setNote] = useState<string | null>(null)

  if (!account.enabled) {
    return null
  }

  async function enter() {
    setBusy(true)
    setProblem(null)
    setNote(null)
    try {
      await account.signIn(address, password)
      setPassword("")
    } catch (error) {
      setProblem(accountProblem(error))
    } finally {
      setBusy(false)
    }
  }

  async function register() {
    setBusy(true)
    setProblem(null)
    setNote(null)
    try {
      const session = await account.signUp(address, password)
      setPassword("")
      if (!session) {
        setNote("Compte créé. Confirme l'e-mail, puis connecte-toi.")
      }
    } catch (error) {
      setProblem(accountProblem(error))
    } finally {
      setBusy(false)
    }
  }

  async function leave() {
    setBusy(true)
    setProblem(null)
    setNote(null)
    try {
      await account.signOut()
      setNote("Déconnecté. La mémoire de cet appareil reste ici.")
    } catch {
      setProblem("La déconnexion a échoué.")
    } finally {
      setBusy(false)
    }
  }

  return (
    <section className="mt-8">
      <h2 className="text-sm font-medium text-neutral-500">Compte</h2>
      {!account.ready ? <p className="mt-3 text-lg text-neutral-500">Chargement…</p> : null}
      {account.ready && account.email ? (
        <>
          <p className="mt-3 text-lg">{account.email}</p>
          <button
            type="button"
            onClick={() => void leave()}
            disabled={busy}
            className="mt-3 w-full rounded-2xl border border-neutral-300 px-6 py-4 text-lg font-medium disabled:opacity-40"
          >
            Se déconnecter
          </button>
        </>
      ) : null}
      {account.ready && !account.email ? (
        <form
          className="mt-3"
          onSubmit={(event) => {
            event.preventDefault()
            void enter()
          }}
        >
          <input
            type="email"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            aria-label="E-mail"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
            className="w-full rounded-2xl border border-neutral-300 px-4 py-4 text-lg"
          />
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            aria-label="Mot de passe"
            className="mt-3 w-full rounded-2xl border border-neutral-300 px-4 py-4 text-lg"
          />
          <button
            type="submit"
            disabled={busy}
            className="mt-3 w-full rounded-2xl bg-neutral-900 px-6 py-4 text-lg font-medium text-white disabled:opacity-40"
          >
            Se connecter
          </button>
          <button
            type="button"
            onClick={() => void register()}
            disabled={busy}
            className="mt-3 w-full rounded-2xl border border-neutral-300 px-6 py-4 text-lg font-medium disabled:opacity-40"
          >
            Créer un compte
          </button>
        </form>
      ) : null}
      {problem ? <p className="mt-3 text-lg">{problem}</p> : null}
      {note ? <p className="mt-3 text-lg">{note}</p> : null}
    </section>
  )
}

function accountProblem(error: unknown): string {
  const message = error instanceof Error ? error.message : ""
  if (message.includes("email")) {
    return "Cet e-mail n'est pas valide."
  }
  if (message.includes("8 characters")) {
    return "Le mot de passe doit avoir au moins 8 caractères."
  }
  if (message.includes("Sign up")) {
    return "Le compte n'a pas pu être créé."
  }
  return "La connexion a échoué."
}

function ThemeChip({
  label,
  selected,
  onSelect,
}: {
  label: string
  selected: boolean
  onSelect: () => void
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onSelect}
      className={
        selected
          ? "rounded-full bg-neutral-900 px-4 py-2 text-lg font-medium text-white"
          : "rounded-full border border-neutral-300 px-4 py-2 text-lg font-medium"
      }
    >
      {label}
    </button>
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
