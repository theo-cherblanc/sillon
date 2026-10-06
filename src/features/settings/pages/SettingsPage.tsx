import { useRef, useState, type ChangeEvent } from "react"
import { getDatabase } from "../../../shared/db/client.ts"
import { localDate } from "../../../shared/lib/dates.ts"
import { Button } from "../../../shared/ui/Button.tsx"
import { Chip } from "../../../shared/ui/Chip.tsx"
import { Cluster, Stack } from "../../../shared/ui/Stack.tsx"
import { Field } from "../../../shared/ui/Field.tsx"
import { Screen } from "../../../shared/ui/Screen.tsx"
import { Section } from "../../../shared/ui/Section.tsx"
import { TabBar } from "../../../shared/ui/TabBar.tsx"
import { Lede, Meta } from "../../../shared/ui/Type.tsx"
import { Stepper } from "../components/Stepper.tsx"
import { useSettings, type SettingsSummary } from "../hooks/useSettings.ts"
import { useAccount } from "../hooks/useAccount.ts"
import { readExport, type ProgressFile } from "../model/export.ts"
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
      document.querySelector('meta[name="theme-color"]')?.setAttribute("content", next === "dark" ? "#0f1923" : "#ece8e1")
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
    <Screen
      title="Réglages"
      tabs={<TabBar current="settings" onToday={onToday} onProgress={onProgress} onSettings={() => undefined} />}
    >
      <Stack gap={6} pad={6}>
        <Section title="Apparence">
          <Cluster>
            <Chip pressed={theme === "light"} onClick={() => chooseTheme("light")}>
              Clair
            </Chip>
            <Chip pressed={theme === "dark"} onClick={() => chooseTheme("dark")}>
              Sombre
            </Chip>
          </Cluster>
        </Section>
        <AccountSection />
        <input
          ref={fileInput}
          type="file"
          accept="application/json,.json"
          hidden
          onChange={(event) => void choose(event)}
        />
        {error ? <p>{error}</p> : null}
        {fileError ? <p>{fileError}</p> : null}
        {notice ? <p>{notice}</p> : null}
        {!error && !summary ? <Meta>Chargement…</Meta> : null}
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
      </Stack>
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
    <Section title="Compte">
      {!account.ready ? <Meta>Chargement…</Meta> : null}
      {account.ready && account.email ? (
        <Stack gap={3}>
          <p>{account.email}</p>
          <Button disabled={busy} onClick={() => void leave()}>
            Se déconnecter
          </Button>
        </Stack>
      ) : null}
      {account.ready && !account.email ? (
        <form
          onSubmit={(event) => {
            event.preventDefault()
            void enter()
          }}
        >
          <Stack gap={3}>
            <Field
              type="email"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              aria-label="E-mail"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
            />
            <Field
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              aria-label="Mot de passe"
            />
            <Button variant="accent" type="submit" disabled={busy}>
              Se connecter
            </Button>
            <Button disabled={busy} onClick={() => void register()}>
              Créer un compte
            </Button>
          </Stack>
        </form>
      ) : null}
      {problem ? <p>{problem}</p> : null}
      {note ? <p>{note}</p> : null}
    </Section>
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
      <Stack gap={3}>
        <Button disabled={busy} onClick={onExport}>
          Exporter
        </Button>
        <Meta>{exportNote}</Meta>
        <Button disabled={busy} onClick={onImport}>
          Importer
        </Button>
      </Stack>
      {pending ? (
        <Stack gap={4}>
          <Stack gap={2}>
            <Lede>Remplacer la mémoire actuelle ?</Lede>
            <Meta>
              Export du {localDate(new Date(pending.exportedAt))} · Série {pending.profile.streak} · {pending.profile.xp} XP
            </Meta>
          </Stack>
          <Stack gap={3}>
            <Button variant="accent" disabled={importing} onClick={onConfirm}>
              Remplacer
            </Button>
            <Button disabled={importing} onClick={onCancel}>
              Annuler
            </Button>
          </Stack>
        </Stack>
      ) : null}
      <Meta>Schéma {summary.schemaVersion}</Meta>
    </>
  )
}
