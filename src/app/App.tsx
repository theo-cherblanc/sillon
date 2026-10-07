import { useEffect, useState, type ReactNode } from "react"
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
  const [opened, setOpened] = useState<string[]>([])
  const [incoming, setIncoming] = useState<ProgressFile | null>(null)
  const openedCardId = opened.at(-1) ?? null

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

  function openCard(cardId: string) {
    setOpened((ids) => (ids.at(-1) === cardId ? ids : [...ids, cardId]))
  }

  if (incoming) {
    return <RemotePrompt file={incoming} onDone={() => setIncoming(null)} onDismiss={() => setIncoming(null)} />
  }

  let main: ReactNode
  if (screen === "session") {
    main = (
      <SessionPage
        onClose={() => setScreen("today")}
        onRecorded={(at) => void publishMemory(at)}
        onOpen={openCard}
      />
    )
  } else if (screen === "library") {
    main = (
      <LibraryPage
        onToday={() => setScreen("today")}
        onProgress={() => setScreen("progress")}
        onSettings={() => setScreen("settings")}
        onOpen={openCard}
      />
    )
  } else if (screen === "progress") {
    main = (
      <ProgressPage
        onToday={() => setScreen("today")}
        onSettings={() => setScreen("settings")}
        onLibrary={() => setScreen("library")}
      />
    )
  } else if (screen === "settings") {
    main = <SettingsPage onToday={() => setScreen("today")} onProgress={() => setScreen("progress")} />
  } else {
    main = (
      <TodayPage
        onReview={() => setScreen("session")}
        onProgress={() => setScreen("progress")}
        onSettings={() => setScreen("settings")}
      />
    )
  }

  return (
    <>
      <div className={openedCardId ? "hidden h-full" : "h-full"}>{main}</div>
      {openedCardId ? (
        <SessionPage
          cardId={openedCardId}
          onClose={() => setOpened((ids) => ids.slice(0, -1))}
          onRecorded={(at) => void publishMemory(at)}
          onOpen={openCard}
        />
      ) : null}
    </>
  )
}
