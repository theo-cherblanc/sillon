import { useState } from "react"
import { Chip } from "../../../shared/ui/Chip.tsx"
import { Field } from "../../../shared/ui/Field.tsx"
import { Cluster, Stack } from "../../../shared/ui/Stack.tsx"
import { Screen } from "../../../shared/ui/Screen.tsx"
import { TabBar } from "../../../shared/ui/TabBar.tsx"
import { Meta } from "../../../shared/ui/Type.tsx"
import { CardRow } from "../components/CardRow.tsx"
import { useLibrary } from "../hooks/useLibrary.ts"
import { matchingLibrary, type LibraryMark } from "../model/catalog.ts"

const markLabel: Record<LibraryMark, string> = {
  new: "Nouvelle",
  learning: "En apprentissage",
  due: "À revoir",
  ready: "À jour",
}

const marks: LibraryMark[] = ["new", "learning", "due", "ready"]

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
  const [mark, setMark] = useState<LibraryMark | null>(null)
  const [query, setQuery] = useState("")
  const visible = cards ? matchingLibrary(cards, { tag, mark, query }) : []

  return (
    <Screen title="Cartes" tabs={<TabBar onToday={onToday} onProgress={onProgress} onSettings={onSettings} />}>
      {error ? <p>{error}</p> : null}
      {!error && !cards ? <Meta>Chargement…</Meta> : null}
      {cards ? (
        <Stack gap={6} pad={6}>
          <Stack gap={3}>
            <Field
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Rechercher"
              aria-label="Rechercher une carte"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
            />
            <Cluster gap={2} scroll>
              <Chip pressed={mark === null} onClick={() => setMark(null)}>
                Toutes
              </Chip>
              {marks.map((name) => (
                <Chip key={name} pressed={mark === name} onClick={() => setMark(name)}>
                  {markLabel[name]}
                </Chip>
              ))}
            </Cluster>
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
          </Stack>
          {visible.length === 0 ? (
            <Meta>Aucune carte.</Meta>
          ) : (
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
          )}
        </Stack>
      ) : null}
    </Screen>
  )
}
