import { useEffect, useState } from "react"
import { getDatabase } from "../shared/db/client.ts"
import { LibraryPage } from "../features/library/index.ts"
import { ProgressPage } from "../features/progress/pages/ProgressPage.tsx"
import { SessionPage, TodayPage } from "../features/review/index.ts"
import { openMemory, SettingsPage } from "../features/settings/index.ts"
import { openRemoteMemory, publishMemory } from "../features/settings/model/remoteMemory.ts"
import { RemotePrompt } from "../features/settings/pages/RemotePrompt.tsx"
import type { ProgressFile } from "../features/settings/model/export.ts"

export function App() {
  const [screen, setScreen] = useState<"today" | "progress" | "settings" | "session" | "library">("today")
  const [incoming, setIncoming] = useState<ProgressFile | null>(null)

  useEffect(() => {
    let cancelled = false
    void (async () => {
      await openMemory(getDatabase(), Date.now())
      const file = await openRemoteMemory()
      if (!cancelled && file) {
        setIncoming(file)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [])

  if (incoming) {
    return <RemotePrompt file={incoming} onDone={() => setIncoming(null)} onDismiss={() => setIncoming(null)} />
  }

  if (screen === "session") {
    return <SessionPage onClose={() => setScreen("today")} onRecorded={(at) => void publishMemory(at)} />
  }

  if (screen === "library") {
    return (
      <LibraryPage
        onToday={() => setScreen("today")}
        onProgress={() => setScreen("progress")}
        onSettings={() => setScreen("settings")}
      />
    )
  }

  if (screen === "progress") {
    return (
      <ProgressPage
        onToday={() => setScreen("today")}
        onSettings={() => setScreen("settings")}
        onLibrary={() => setScreen("library")}
      />
    )
  }

  if (screen === "settings") {
    return (
      <SettingsPage onToday={() => setScreen("today")} onProgress={() => setScreen("progress")} />
    )
  }

  return (
    <TodayPage
      onReview={() => setScreen("session")}
      onProgress={() => setScreen("progress")}
      onSettings={() => setScreen("settings")}
    />
  )
}
