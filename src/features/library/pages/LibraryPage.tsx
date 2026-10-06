import { useState } from "react"
import { Screen } from "../../../shared/ui/Screen.tsx"
import { TabBar } from "../../../shared/ui/TabBar.tsx"
import { useLibrary, type LibraryCard } from "../hooks/useLibrary.ts"
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
}: {
  onToday: () => void
  onProgress: () => void
  onSettings: () => void
}) {
  const { cards, tags, error } = useLibrary()
  const [tag, setTag] = useState<string | null>(null)
  const visible = cards ? matchingTag(cards, tag) : []

  return (
    <Screen fill>
      <h1 className="text-3xl font-semibold tracking-tight">Cartes</h1>
      {error ? <p className="mt-8 text-lg">{error}</p> : null}
      {!error && !cards ? <p className="mt-8 text-lg text-neutral-500">Chargement…</p> : null}
      {cards ? (
        <>
          <div className="mt-6 flex gap-2 overflow-x-auto pb-1">
            <FilterChip label="Tout" selected={tag === null} onSelect={() => setTag(null)} />
            {tags.map((name) => (
              <FilterChip key={name} label={name} selected={tag === name} onSelect={() => setTag(name)} />
            ))}
          </div>
          <ul className="mt-6 min-h-0 flex-1 overflow-y-auto">
            {visible.map((card) => (
              <CardRow key={card.id} card={card} />
            ))}
          </ul>
        </>
      ) : null}
      <TabBar onToday={onToday} onProgress={onProgress} onSettings={onSettings} />
    </Screen>
  )
}

function FilterChip({
  label,
  selected,
  onSelect,
}: {
  label: string
  selected: boolean
  onSelect: () => void
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onSelect}
      className={
        selected
          ? "shrink-0 rounded-full bg-neutral-900 px-3 py-1 text-sm text-white"
          : "shrink-0 rounded-full border border-neutral-300 px-3 py-1 text-sm"
      }
    >
      {label}
    </button>
  )
}

function CardRow({ card }: { card: LibraryCard }) {
  return (
    <li className="flex items-start justify-between gap-4 border-t border-neutral-200 py-4">
      <div>
        <p className="text-lg">{card.label}</p>
        <p className="mt-1 text-sm text-neutral-500">{card.tags.join(" · ")}</p>
      </div>
      <p className="shrink-0 text-sm text-neutral-500">{markLabel[card.mark]}</p>
    </li>
  )
}
