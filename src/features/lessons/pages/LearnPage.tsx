import { CardRow } from "../../library/index.ts"
import { Screen } from "../../../shared/ui/Screen.tsx"
import { Stack } from "../../../shared/ui/Stack.tsx"
import { TextButton } from "../../../shared/ui/TextButton.tsx"
import { Kicker, Meta } from "../../../shared/ui/Type.tsx"
import { useLessons } from "../hooks/useLessons.ts"

export function LearnPage({
  onClose,
  onOpen,
}: {
  onClose: () => void
  onOpen: (lessonId: string) => void
}) {
  const { groups, error } = useLessons()

  return (
    <Screen title="Apprendre" trailing={<TextButton onClick={onClose}>Fermer</TextButton>}>
      {error ? <p>{error}</p> : null}
      {!error && !groups ? <Meta>Chargement…</Meta> : null}
      {groups ? (
        groups.length === 0 ? (
          <Meta>Aucune leçon.</Meta>
        ) : (
          <Stack gap={8}>
            {groups.map((group) => (
              <Stack key={group.topic} gap={3}>
                <Kicker as="h2">{group.label}</Kicker>
                <ul>
                  {group.items.map((item) => (
                    <CardRow
                      key={item.id}
                      title={item.title}
                      meta={lessonMeta(item.minutes, item.cardCount)}
                      aside={item.read ? "Lu" : "À lire"}
                      onOpen={() => onOpen(item.id)}
                    />
                  ))}
                </ul>
              </Stack>
            ))}
          </Stack>
        )
      ) : null}
    </Screen>
  )
}

function lessonMeta(minutes: number, cardCount: number): string {
  const duration = minutes === 1 ? "1 min" : `${minutes} min`
  const cards = cardCount === 1 ? "1 carte" : `${cardCount} cartes`
  return `${duration} · ${cards}`
}
