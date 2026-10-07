import { useEffect, useState } from "react"
import { cards } from "../../../shared/content/cards.ts"
import { lessons } from "../../../shared/content/lessons.ts"
import { cardsForLesson } from "../../../shared/content/pack.ts"
import { getDatabase } from "../../../shared/db/client.ts"
import { ensureProfile } from "../../../shared/db/profile.ts"
import { Button } from "../../../shared/ui/Button.tsx"
import { Screen } from "../../../shared/ui/Screen.tsx"
import { Stack } from "../../../shared/ui/Stack.tsx"
import { TextButton } from "../../../shared/ui/TextButton.tsx"
import { Kicker, Meta } from "../../../shared/ui/Type.tsx"
import { cardLabel } from "../../library/index.ts"
import { LessonBody } from "../components/LessonBody.tsx"
import { topicLabels } from "../model/catalog.ts"
import { markLessonRead } from "../model/progress.ts"

export function LessonPage({
  lessonId,
  onClose,
  onReview,
  onRecorded,
}: {
  lessonId: string
  onClose: () => void
  onReview: (cardIds: readonly string[]) => void
  onRecorded?: (at: number) => void
}) {
  const lesson = lessons.find((item) => item.id === lessonId) ?? null
  const linked = lesson ? cardsForLesson(cards, lesson.id) : []
  const [readAt, setReadAt] = useState<number | null | undefined>(undefined)
  const [error, setError] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const database = getDatabase()
        await ensureProfile(database, Date.now())
        const row = await database.lessons.get(lessonId)
        if (!cancelled) {
          setReadAt(row?.readAt ?? null)
        }
      } catch {
        if (!cancelled) {
          setError("La leçon n'a pas pu être lue.")
        }
      }
    }

    void load()
    return () => {
      cancelled = true
    }
  }, [lessonId])

  async function markRead() {
    if (saving) {
      return
    }
    setSaving(true)
    setError(null)
    try {
      const row = await markLessonRead(getDatabase(), lessonId, Date.now())
      setReadAt(row.readAt)
      if (row.updatedAt !== null) {
        onRecorded?.(row.updatedAt)
      }
    } catch {
      setError("La leçon n'a pas pu être marquée comme lue.")
    } finally {
      setSaving(false)
    }
  }

  const read = readAt !== null && readAt !== undefined
  const dock =
    readAt === undefined ? null : read && linked.length > 0 ? (
      <Button variant="accent" onClick={() => onReview(linked.map((card) => card.id))}>
        Réviser les cartes
      </Button>
    ) : !read ? (
      <Button variant="accent" disabled={saving} onClick={() => void markRead()}>
        Marquer comme lue
      </Button>
    ) : null

  return (
    <Screen title="Leçon" trailing={<TextButton onClick={onClose}>Fermer</TextButton>} dock={dock}>
      {error ? <p>{error}</p> : null}
      {!error && !lesson ? <p>Cette leçon est introuvable.</p> : null}
      {!error && lesson && readAt === undefined ? <Meta>Chargement…</Meta> : null}
      {lesson && readAt !== undefined ? (
        <Stack gap={6}>
          <Stack gap={2}>
            <Kicker>
              {topicLabels[lesson.topic]} · {lesson.minutes} min
            </Kicker>
            <h2 className="font-display text-[26px] font-bold leading-[1.2] tracking-[0.04em] uppercase">
              {lesson.title}
            </h2>
            <Meta>
              {read ? "Lu" : "À lire"}
              {linked.length > 0 ? ` · ${linked.length === 1 ? "1 carte" : `${linked.length} cartes`}` : ""}
            </Meta>
          </Stack>
          {lesson.needsReview ? (
            <Meta>{lesson.reviewNote ?? "Cette leçon a un point à revérifier."}</Meta>
          ) : null}
          <LessonBody body={lesson.body} />
          {linked.length > 0 ? (
            <Stack gap={3}>
              <Kicker as="h2">Cartes</Kicker>
              <Stack gap={2}>
                {linked.map((card) => (
                  <Meta key={card.id}>{cardLabel(card.prompt)}</Meta>
                ))}
              </Stack>
            </Stack>
          ) : null}
          {lesson.source.length > 0 ? (
            <Stack gap={3}>
              <Kicker as="h2">Sources</Kicker>
              {lesson.source.map((url) => (
                <a
                  key={url}
                  href={url}
                  className="text-base leading-normal text-accent break-all"
                  target="_blank"
                  rel="noreferrer"
                >
                  {url}
                </a>
              ))}
            </Stack>
          ) : null}
        </Stack>
      ) : null}
    </Screen>
  )
}
