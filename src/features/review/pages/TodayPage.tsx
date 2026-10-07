import { Button } from "../../../shared/ui/Button.tsx"
import { Screen } from "../../../shared/ui/Screen.tsx"
import { Stack } from "../../../shared/ui/Stack.tsx"
import { TabBar } from "../../../shared/ui/TabBar.tsx"
import { XpMeter } from "../../../shared/ui/Meter.tsx"
import { Stat } from "../../../shared/ui/Stat.tsx"
import { Lede, Meta } from "../../../shared/ui/Type.tsx"
import { Lobby } from "../components/Lobby.tsx"
import { useToday } from "../hooks/useToday.ts"
import { todayStatus, type TodaySummary } from "../model/today.ts"

export function TodayPage({
  onReview,
  onLearn,
  onProgress,
  onSettings,
}: {
  onReview: () => void
  onLearn: () => void
  onProgress: () => void
  onSettings: () => void
}) {
  const { summary, error } = useToday()
  const ready = summary !== null && summary.queueSize > 0

  return (
    <Screen
      title="Aujourd'hui"
      largeMark
      dock={
        <>
          <Button variant="plain" onClick={onLearn}>
            Apprendre
          </Button>
          {ready ? (
            <Button variant="accent" onClick={onReview}>
              Réviser les cartes
            </Button>
          ) : null}
        </>
      }
      tabs={<TabBar current="today" onToday={() => undefined} onProgress={onProgress} onSettings={onSettings} />}
    >
      {error ? <p>{error}</p> : null}
      {!error && !summary ? <Meta>Chargement…</Meta> : null}
      {summary ? <TodayBody summary={summary} /> : null}
    </Screen>
  )
}

function TodayBody({ summary }: { summary: TodaySummary }) {
  const waiting = summary.queueSize === 0
  return (
    <Stack gap={6}>
      {waiting ? (
        <Lede>{todayStatus(summary)}</Lede>
      ) : (
        <Lobby count={summary.queueSize} label={summary.queueSize === 1 ? "carte en file" : "cartes en file"} />
      )}
      <Stack gap={4}>
        <Stat value={String(summary.streak).padStart(2, "0")} label="Série" />
        <XpMeter xp={summary.xp} />
      </Stack>
    </Stack>
  )
}
