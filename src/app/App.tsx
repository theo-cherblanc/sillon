import { useState } from "react"
import { SessionPage, TodayPage } from "../features/review/index.ts"

export function App() {
  const [inSession, setInSession] = useState(false)

  if (inSession) {
    return <SessionPage onClose={() => setInSession(false)} />
  }

  return <TodayPage onReview={() => setInSession(true)} />
}
