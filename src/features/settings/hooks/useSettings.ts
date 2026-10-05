import { useEffect, useState } from "react"
import { getDatabase } from "../../../shared/db/client.ts"
import { ensureProfile } from "../../../shared/db/profile.ts"
import { saveDailyGoals } from "../model/saveGoals.ts"

export type SettingsSummary = {
  dailyGoal: number
  newPerDay: number
  schemaVersion: number
}

export function useSettings(): {
  summary: SettingsSummary | null
  error: string | null
  saving: boolean
  change: (dailyGoal: number, newPerDay: number) => void
} {
  const [summary, setSummary] = useState<SettingsSummary | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const profile = await ensureProfile(getDatabase(), Date.now())
        if (cancelled) {
          return
        }
        setSummary({
          dailyGoal: profile.dailyGoal,
          newPerDay: profile.newPerDay,
          schemaVersion: profile.schemaVersion,
        })
      } catch {
        if (!cancelled) {
          setError("Les réglages n'ont pas pu être lus.")
        }
      }
    }

    void load()
    return () => {
      cancelled = true
    }
  }, [])

  function change(dailyGoal: number, newPerDay: number) {
    if (!summary || saving) {
      return
    }
    setSaving(true)
    setError(null)
    void saveDailyGoals(getDatabase(), dailyGoal, newPerDay)
      .then((profile) => {
        setSummary({
          dailyGoal: profile.dailyGoal,
          newPerDay: profile.newPerDay,
          schemaVersion: profile.schemaVersion,
        })
      })
      .catch(() => {
        setError("Le réglage n'a pas pu être enregistré.")
      })
      .finally(() => {
        setSaving(false)
      })
  }

  return { summary, error, saving, change }
}
