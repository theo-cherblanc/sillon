import { useState } from "react"
import { Chip } from "../../../shared/ui/Chip.tsx"
import { Cluster, Stack } from "../../../shared/ui/Stack.tsx"
import { Screen } from "../../../shared/ui/Screen.tsx"
import { TabBar } from "../../../shared/ui/TabBar.tsx"
import { Meta } from "../../../shared/ui/Type.tsx"
import { CardRow } from "../components/CardRow.tsx"
import { useLibrary } from "../hooks/useLibrary.ts"
import { matchingTag, type LibraryMark } from "../model/catalog.ts"

const markLabel: Record<LibraryMark, string> = {
  new: "Nouvelle",
  learning: "En apprentissage",
  due: "À revoir",
  ready: "À jour",
}

export function LibraryPage({
  onToday,
  onProgress,
  onSettings,
  onOpen,
}: {
  onToday: () => void
  onProgress: () => void
  onSettings: () => void
  onOpen: (cardId: string) => void
}) {
  const { cards, tags, error } = useLibrary()
  const [tag, setTag] = useState<string | null>(null)
  const visible = cards ? matchingTag(cards, tag) : []

  return (
    <Screen title="Cartes" tabs={<TabBar onToday={onToday} onProgress={onProgress} onSettings={onSettings} />}>
      {error ? <p>{error}</p> : null}
      {!error && !cards ? <Meta>Chargement…</Meta> : null}
      {cards ? (
        <Stack gap={6} pad={6}>
          <Cluster gap={2} scroll>
            <Chip pressed={tag === null} onClick={() => setTag(null)}>
              Tout
            </Chip>
            {tags.map((name) => (
              <Chip key={name} pressed={tag === name} onClick={() => setTag(name)}>
                {name}
              </Chip>
            ))}
          </Cluster>
          <ul>
            {visible.map((card) => (
              <CardRow
                key={card.id}
                title={card.label}
                meta={card.tags.join(" · ")}
                aside={markLabel[card.mark]}
                onOpen={() => onOpen(card.id)}
              />
            ))}
          </ul>
        </Stack>
      ) : null}
    </Screen>
  )
}
