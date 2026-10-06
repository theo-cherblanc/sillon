import { useEffect, useState } from "react"
import { getDatabase } from "../shared/db/client.ts"
import { LibraryPage } from "../features/library/index.ts"
import { ProgressPage } from "../features/progress/pages/ProgressPage.tsx"
import { SessionPage, TodayPage } from "../features/review/index.ts"
import { openMemory, SettingsPage } from "../features/settings/index.ts"

export function App() {
  const [screen, setScreen] = useState<"today" | "progress" | "settings" | "session" | "library">("today")

  useEffect(() => {
    void openMemory(getDatabase(), Date.now())
  }, [])

  if (screen === "session") {
    return <SessionPage onClose={() => setScreen("today")} />
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
