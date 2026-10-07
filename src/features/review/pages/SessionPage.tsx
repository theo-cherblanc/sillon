import { useEffect, useState, type ReactNode } from "react"
import { cards } from "../../../shared/content/cards.ts"
import type { Card } from "../../../shared/content/types.ts"
import { cardLabel } from "../../library/index.ts"
import { getDatabase, localProfileId } from "../../../shared/db/client.ts"
import { ensureProfile } from "../../../shared/db/profile.ts"
import type { CardProgress } from "../../../shared/db/types.ts"
import { localDate } from "../../../shared/lib/dates.ts"
import { Button } from "../../../shared/ui/Button.tsx"
import { Screen } from "../../../shared/ui/Screen.tsx"
import { Stack } from "../../../shared/ui/Stack.tsx"
import { ProgressMeter, XpMeter } from "../../../shared/ui/Meter.tsx"
import { TextButton } from "../../../shared/ui/TextButton.tsx"
import { Answer, Display, Kicker, Meta, Mono } from "../../../shared/ui/Type.tsx"
import { Choice, ChoiceList } from "../components/Choice.tsx"
import { ClozeDock } from "../components/ClozeDock.tsx"
import { Feedback } from "../components/Feedback.tsx"
import { Notes } from "../components/Notes.tsx"
import { GradeDock } from "../components/GradeDock.tsx"
import { OrderList } from "../components/OrderList.tsx"
import { PromptText } from "../components/PromptText.tsx"
import { Sheet } from "../components/Sheet.tsx"
import { StepList } from "../components/StepList.tsx"
import { useToday } from "../hooks/useToday.ts"
import { bugMatches, clozeMatches, gradeChoices, shuffledSteps, stepsMatch, type GradeChoice } from "../model/grade.ts"
import { recordGrade } from "../model/record.ts"
import { formatDelay, previewForProgress, type DelayPreview } from "../model/schedule.ts"
import { soonestDue } from "../model/today.ts"

export function SessionPage({
  cardId,
  cardIds,
  onClose,
  onRecorded,
  onOpen,
  onOpenLesson,
}: {
  cardId?: string
  cardIds?: readonly string[]
  onClose: () => void
  onRecorded?: (at: number) => void
  onOpen?: (cardId: string) => void
  onOpenLesson?: (lessonId: string) => void
}) {
  if (cardId) {
    return (
      <OpenedCard
        key={cardId}
        cardId={cardId}
        onClose={onClose}
        onRecorded={onRecorded}
        onOpen={onOpen}
        onOpenLesson={onOpenLesson}
      />
    )
  }

  if (cardIds) {
    return (
      <PracticeSession
        cardIds={cardIds}
        onClose={onClose}
        onRecorded={onRecorded}
        onOpen={onOpen}
        onOpenLesson={onOpenLesson}
      />
    )
  }

  return <TodaySession onClose={onClose} onRecorded={onRecorded} onOpen={onOpen} onOpenLesson={onOpenLesson} />
}

function TodaySession({
  onClose,
  onRecorded,
  onOpen,
  onOpenLesson,
}: {
  onClose: () => void
  onRecorded?: (at: number) => void
  onOpen?: (cardId: string) => void
  onOpenLesson?: (lessonId: string) => void
}) {
  const { summary, queue, progress, error } = useToday()
  const [index, setIndex] = useState(0)
  const [saving, setSaving] = useState(false)
  const [saveError, setSaveError] = useState<string | null>(null)
  const [done, setDone] = useState<{
    streak: number
    xp: number
    soonest: { cardId: string; title: string; label: string }[]
  } | null>(null)
  const card = cards.find((item) => item.id === queue[index])
  const remembered = progress.find((item) => item.cardId === card?.id) ?? null

  async function grade(choice: GradeChoice, mcqChoiceId: string | null, mcqCorrect: boolean | null) {
    if (!card || saving) {
      return
    }
    setSaving(true)
    setSaveError(null)
    try {
      const lastCard = index + 1 >= queue.length
      const now = new Date()
      const database = getDatabase()
      await recordGrade(database, {
        card,
        progress: remembered,
        choice,
        mcqChoiceId,
        mcqCorrect,
        now,
        finishesQueue: lastCard,
        queueSize: lastCard ? queue.length : undefined,
      })
      onRecorded?.(now.getTime())
      if (lastCard) {
        const profile = await database.profile.get(localProfileId)
        const reviews = await database.reviews.toArray()
        const date = localDate(now)
        const xp = reviews
          .filter((review) => review.fromQueue && localDate(new Date(review.at)) === date)
          .reduce((total, review) => total + review.xp, 0)
        if (!profile) {
          throw new Error("A review needs a profile")
        }
        const saved = await database.progress.toArray()
        const soonest =
          saved.length === 0
            ? []
            : soonestDue(saved, 3).flatMap((row) => {
                const source = cards.find((item) => item.id === row.cardId)
                if (!source) {
                  return []
                }
                const minutes = (row.due - now.getTime()) / 60_000
                return [
                  {
                    cardId: row.cardId,
                    title: cardLabel(source.prompt),
                    label: minutes < 0 ? "maintenant" : formatDelay(minutes),
                  },
                ]
              })
        setDone({ streak: profile.streak, xp, soonest })
        return
      }
      setIndex(index + 1)
    } catch {
      setSaveError("La note n'a pas pu être enregistrée.")
    } finally {
      setSaving(false)
    }
  }

  if (done) {
    return (
      <Screen
        title="Journée terminée"
        largeMark
        dock={
          <Button variant="accent" onClick={onClose}>
            Retour
          </Button>
        }
      >
        <Stack gap={6}>
          <Stack gap={4}>
            <Kicker>Série {done.streak}</Kicker>
            <Display>{done.xp} XP</Display>
            <XpMeter xp={done.xp} />
          </Stack>
          {done.soonest.length > 0 ? (
            <Stack gap={3}>
              <Kicker as="h2">Prochaines cartes</Kicker>
              <Stack gap={4}>
                {done.soonest.map((item) => (
                  <div key={item.cardId}>
                    <p>{item.title}</p>
                    <Meta>{item.label}</Meta>
                  </div>
                ))}
              </Stack>
            </Stack>
          ) : null}
        </Stack>
      </Screen>
    )
  }

  if (!card || !summary) {
    return (
      <Screen title="Session" trailing={<TextButton onClick={onClose}>Fermer</TextButton>}>
        {error ? <p>{error}</p> : null}
        {saveError ? <p>{saveError}</p> : null}
        {!error && !summary ? <Meta>Chargement…</Meta> : null}
        {summary && !card ? <p>Cette carte est introuvable.</p> : null}
      </Screen>
    )
  }

  return (
    <SessionCard
      key={card.id}
      card={card}
      remembered={remembered}
      saving={saving}
      doneCount={index + 1}
      total={summary.queueSize}
      onClose={onClose}
      onGrade={grade}
      onOpen={onOpen}
      onOpenLesson={onOpenLesson}
    />
  )
}

function PracticeSession({
  cardIds,
  onClose,
  onRecorded,
  onOpen,
  onOpenLesson,
}: {
  cardIds: readonly string[]
  onClose: () => void
  onRecorded?: (at: number) => void
  onOpen?: (cardId: string) => void
  onOpenLesson?: (lessonId: string) => void
}) {
  const [index, setIndex] = useState(0)
  const [remembered, setRemembered] = useState<CardProgress | null | undefined>(undefined)
  const [error, setError] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)
  const [saveError, setSaveError] = useState<string | null>(null)
  const queue = cardIds.filter((id) => cards.some((card) => card.id === id))
  const card = cards.find((item) => item.id === queue[index]) ?? null

  useEffect(() => {
    let cancelled = false
    const cardId = queue[index]
    if (!cardId) {
      setRemembered(null)
      return
    }
    const currentId = cardId

    async function load() {
      try {
        const database = getDatabase()
        await ensureProfile(database, Date.now())
        const row = (await database.progress.get(currentId)) ?? null
        if (!cancelled) {
          setRemembered(row)
        }
      } catch {
        if (!cancelled) {
          setError("La carte n'a pas pu être lue.")
        }
      }
    }

    setRemembered(undefined)
    void load()
    return () => {
      cancelled = true
    }
  }, [index, queue.join("\0")])

  async function grade(choice: GradeChoice, mcqChoiceId: string | null, mcqCorrect: boolean | null) {
    if (!card || saving || remembered === undefined) {
      return
    }
    setSaving(true)
    setSaveError(null)
    try {
      const now = new Date()
      await recordGrade(getDatabase(), {
        card,
        progress: remembered,
        choice,
        mcqChoiceId,
        mcqCorrect,
        now,
        fromQueue: false,
      })
      onRecorded?.(now.getTime())
      if (index + 1 >= queue.length) {
        onClose()
        return
      }
      setIndex(index + 1)
    } catch {
      setSaveError("La note n'a pas pu être enregistrée.")
    } finally {
      setSaving(false)
    }
  }

  if (!card || remembered === undefined) {
    return (
      <Screen title="Cartes" trailing={<TextButton onClick={onClose}>Fermer</TextButton>}>
        {error ? <p>{error}</p> : null}
        {saveError ? <p>{saveError}</p> : null}
        {!error && !card ? <p>Cette carte est introuvable.</p> : null}
        {!error && card && remembered === undefined ? <Meta>Chargement…</Meta> : null}
      </Screen>
    )
  }

  return (
    <SessionCard
      key={card.id}
      card={card}
      remembered={remembered}
      saving={saving}
      doneCount={index + 1}
      total={queue.length}
      title="Cartes"
      error={saveError}
      onClose={onClose}
      onGrade={grade}
      onOpen={onOpen}
      onOpenLesson={onOpenLesson}
    />
  )
}

function OpenedCard({
  cardId,
  onClose,
  onRecorded,
  onOpen,
  onOpenLesson,
}: {
  cardId: string
  onClose: () => void
  onRecorded?: (at: number) => void
  onOpen?: (cardId: string) => void
  onOpenLesson?: (lessonId: string) => void
}) {
  const card = cards.find((item) => item.id === cardId) ?? null
  const [remembered, setRemembered] = useState<CardProgress | null | undefined>(undefined)
  const [error, setError] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)
  const [saveError, setSaveError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const database = getDatabase()
        await ensureProfile(database, Date.now())
        const row = (await database.progress.get(cardId)) ?? null
        if (!cancelled) {
          setRemembered(row)
        }
      } catch {
        if (!cancelled) {
          setError("La carte n'a pas pu être lue.")
        }
      }
    }

    void load()
    return () => {
      cancelled = true
    }
  }, [cardId])

  async function grade(choice: GradeChoice, mcqChoiceId: string | null, mcqCorrect: boolean | null) {
    if (!card || saving || remembered === undefined) {
      return
    }
    setSaving(true)
    setSaveError(null)
    try {
      const now = new Date()
      await recordGrade(getDatabase(), {
        card,
        progress: remembered,
        choice,
        mcqChoiceId,
        mcqCorrect,
        now,
        fromQueue: false,
      })
      onRecorded?.(now.getTime())
      onClose()
    } catch {
      setSaveError("La note n'a pas pu être enregistrée.")
    } finally {
      setSaving(false)
    }
  }

  if (!card || remembered === undefined) {
    return (
      <Screen title="Carte" trailing={<TextButton onClick={onClose}>Fermer</TextButton>}>
        {error ? <p>{error}</p> : null}
        {saveError ? <p>{saveError}</p> : null}
        {!error && !card ? <p>Cette carte est introuvable.</p> : null}
        {!error && card && remembered === undefined ? <Meta>Chargement…</Meta> : null}
      </Screen>
    )
  }

  return (
    <SessionCard
      key={card.id}
      card={card}
      remembered={remembered}
      saving={saving}
      title="Carte"
      error={saveError}
      onClose={onClose}
      onGrade={grade}
      onOpen={onOpen}
      onOpenLesson={onOpenLesson}
    />
  )
}

function delayFor(choice: GradeChoice, delays: DelayPreview) {
  if (choice === "hesitated") {
    return delays.hard
  }
  if (choice === "knew") {
    return delays.good
  }
  return delays.again
}

function SessionCard({
  card,
  remembered,
  saving,
  doneCount,
  total,
  title = "Session",
  error,
  onClose,
  onGrade,
  onOpen,
  onOpenLesson,
}: {
  card: Card
  remembered: CardProgress | null
  saving: boolean
  doneCount?: number
  total?: number
  title?: string
  error?: string | null
  onClose: () => void
  onGrade: (choice: GradeChoice, mcqChoiceId: string | null, mcqCorrect: boolean | null) => void
  onOpen?: (cardId: string) => void
  onOpenLesson?: (lessonId: string) => void
}) {
  const [choiceId, setChoiceId] = useState<string | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [hole, setHole] = useState("")
  const [holeChecked, setHoleChecked] = useState(false)
  const [arranged, setArranged] = useState<string[]>(() =>
    card.type === "order" && card.steps ? shuffledSteps(card.steps, Math.random) : [],
  )
  const [orderChecked, setOrderChecked] = useState(false)
  const [lineNumber, setLineNumber] = useState<number | null>(null)
  const [now] = useState(() => new Date())
  const mcqCorrect =
    card.type === "mcq"
      ? choiceId === null
        ? null
        : choiceId === card.correctChoiceId
      : card.type === "cloze"
        ? !holeChecked || !card.answer
          ? null
          : clozeMatches(hole, card.answer)
        : card.type === "order"
          ? !orderChecked || !card.steps
            ? null
            : stepsMatch(arranged, card.steps)
          : card.type === "bug"
            ? lineNumber === null || card.bugLine === undefined
              ? null
              : bugMatches(lineNumber, card.bugLine)
            : null
  const answered = card.type === "reveal" ? revealed : mcqCorrect !== null
  const correctText =
    card.type === "cloze" ? card.answer : card.choices?.find((choice) => choice.id === card.correctChoiceId)?.text

  function moveStep(index: number, direction: -1 | 1) {
    setArranged((current) => {
      const target = index + direction
      if (target < 0 || target >= current.length) {
        return current
      }
      const next = [...current]
      const item = next[index]
      next[index] = next[target]
      next[target] = item
      return next
    })
  }

  const dock = answered ? (
    <GradeDock
      choices={gradeChoices(card.type, mcqCorrect)}
      delay={(choice) => delayFor(choice, previewForProgress(remembered, now))}
      saving={saving}
      onGrade={(choice) => onGrade(choice, card.type === "mcq" ? choiceId : null, mcqCorrect)}
    />
  ) : card.type === "reveal" && !revealed ? (
    <Button variant="accent" onClick={() => setRevealed(true)}>
      Voir la réponse
    </Button>
  ) : card.type === "cloze" && !holeChecked ? (
    <ClozeDock value={hole} onChange={setHole} onSubmit={() => setHoleChecked(true)} />
  ) : card.type === "order" && !orderChecked ? (
    <Button variant="accent" type="submit" form="order-form">
      Vérifier
    </Button>
  ) : null

  return (
    <Screen
      title={title}
      trailing={<TextButton onClick={onClose}>Fermer</TextButton>}
      extra={
        doneCount !== undefined && total !== undefined ? <ProgressMeter done={doneCount} total={total} /> : null
      }
      dock={dock}
    >
      <Stack gap={6}>
        {error ? <p>{error}</p> : null}
        <Sheet>
          <PromptText text={card.prompt} />
        </Sheet>
        {card.type === "mcq" && card.choices ? (
          <ChoiceList>
            {card.choices.map((choice) => (
              <Choice
                key={choice.id}
                pressed={choice.id === choiceId}
                result={mcqCorrect}
                onClick={() => setChoiceId(choice.id)}
              >
                {choice.text}
              </Choice>
            ))}
          </ChoiceList>
        ) : null}
        {card.type === "bug" && card.lines ? (
          <ChoiceList>
            {card.lines.map((line, index) => {
              const number = index + 1
              return (
                <Choice
                  key={number}
                  pressed={number === lineNumber}
                  result={mcqCorrect}
                  code
                  prefix={number}
                  onClick={() => setLineNumber(number)}
                >
                  {line}
                </Choice>
              )
            })}
          </ChoiceList>
        ) : null}
        {card.type === "order" && !orderChecked ? (
          <OrderList steps={arranged} onSubmit={() => setOrderChecked(true)} onMove={moveStep} />
        ) : null}
        {answered ? (
          <Feedback
            lead={card.type === "reveal" && card.answer ? <PromptText text={card.answer} /> : null}
            correct={card.type === "reveal" ? null : mcqCorrect}
            detail={wrongDetail(card, correctText)}
            explanation={card.explanation}
            notes={
              <Notes
                mistake={card.commonMistake}
                insight={card.insight}
                source={card.source}
                related={relatedCards(card)}
                onOpen={onOpen}
              />
            }
          />
        ) : null}
        {answered && card.lessonId && onOpenLesson ? (
          <Button variant="plain" onClick={() => onOpenLesson(card.lessonId ?? "")}>
            Voir la leçon
          </Button>
        ) : null}
      </Stack>
    </Screen>
  )
}

function relatedCards(card: Card): { id: string; label: string }[] {
  return (card.related ?? []).flatMap((id) => {
    const found = cards.find((item) => item.id === id)
    if (!found) {
      return []
    }
    return [{ id, label: cardLabel(found.prompt) }]
  })
}

function wrongDetail(card: Card, correctText: string | undefined): ReactNode {
  if (card.type === "order") {
    return <StepList steps={card.steps ?? []} />
  }
  if (card.type === "bug") {
    return <Answer>La ligne fausse est la {card.bugLine}.</Answer>
  }
  return (
    <Answer>
      La bonne réponse : <Mono>{correctText}</Mono>.
    </Answer>
  )
}
