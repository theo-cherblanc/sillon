import { Badge, BadgeGrid } from "../../../shared/ui/Badge.tsx"
import { Button } from "../../../shared/ui/Button.tsx"
import { Screen } from "../../../shared/ui/Screen.tsx"
import { Stack } from "../../../shared/ui/Stack.tsx"
import { TabBar } from "../../../shared/ui/TabBar.tsx"
import { XpMeter } from "../../../shared/ui/Meter.tsx"
import { PlateGrid, Stat } from "../../../shared/ui/Stat.tsx"
import { Kicker, Meta } from "../../../shared/ui/Type.tsx"
import { useProgress, type ProgressSummary } from "../hooks/useProgress.ts"
import { earnedBadges } from "../model/badges.ts"

export function ProgressPage({
  onToday,
  onSettings,
  onLibrary,
}: {
  onToday: () => void
  onSettings: () => void
  onLibrary: () => void
}) {
  const { summary, error } = useProgress()

  return (
    <Screen
      title="Progression"
      tabs={<TabBar current="progress" onToday={onToday} onProgress={() => undefined} onSettings={onSettings} />}
    >
      {error ? <p>{error}</p> : null}
      {!error && !summary ? <Meta>Chargement…</Meta> : null}
      {summary ? <ProgressBody summary={summary} onLibrary={onLibrary} /> : null}
    </Screen>
  )
}

function ProgressBody({ summary, onLibrary }: { summary: ProgressSummary; onLibrary: () => void }) {
  return (
    <Stack gap={6}>
      <Stack gap={8}>
        <Stack gap={6}>
          <Stack gap={4}>
            <PlateGrid columns={2}>
              <Stat value={String(summary.streak).padStart(2, "0")} label="Série" />
              <Stat value={String(summary.bestStreak).padStart(2, "0")} label="Record" />
            </PlateGrid>
            <XpMeter xp={summary.xp} />
          </Stack>
          <PlateGrid columns={3}>
            <Stat value={String(summary.fresh)} label={summary.fresh === 1 ? "nouvelle" : "nouvelles"} />
            <Stat value={String(summary.learning)} label="apprentissage" />
            <Stat value={String(summary.review)} label="à jour" />
          </PlateGrid>
        </Stack>
        <Stack gap={3}>
          <Kicker as="h2">Badges</Kicker>
          <BadgeGrid>
            {earnedBadges({
              bestStreak: summary.bestStreak,
              xp: summary.xp,
              seen: summary.learning + summary.review,
              finishedDays: summary.finishedDays,
            }).map((badge) => (
              <Badge key={badge.id} earned={badge.earned} label={badge.label} />
            ))}
          </BadgeGrid>
        </Stack>
      </Stack>
      <Button onClick={onLibrary}>Voir les cartes</Button>
    </Stack>
  )
}
