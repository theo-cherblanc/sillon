import { useState } from "react"
import { ProgressPage } from "../features/progress/pages/ProgressPage.tsx"
import { SessionPage, TodayPage } from "../features/review/index.ts"

export function App() {
  const [screen, setScreen] = useState<"today" | "progress" | "session">("today")

  if (screen === "session") {
    return <SessionPage onClose={() => setScreen("today")} />
  }

  if (screen === "progress") {
    return <ProgressPage onToday={() => setScreen("today")} />
  }

  return <TodayPage onReview={() => setScreen("session")} onProgress={() => setScreen("progress")} />
}
