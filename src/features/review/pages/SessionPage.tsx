import { useState } from "react"
import { cards } from "../../../shared/content/cards.ts"
import type { Card } from "../../../shared/content/types.ts"
import { getDatabase, localProfileId } from "../../../shared/db/client.ts"
import type { CardProgress } from "../../../shared/db/types.ts"
import { localDate } from "../../../shared/lib/dates.ts"
import { Screen } from "../../../shared/ui/Screen.tsx"
import { PromptText } from "../components/PromptText.tsx"
import { useToday } from "../hooks/useToday.ts"
import { clozeMatches, gradeChoices, shuffledSteps, stepsMatch, type GradeChoice } from "../model/grade.ts"
import { recordGrade } from "../model/record.ts"
import { formatDelay, previewForProgress, type DelayPreview } from "../model/schedule.ts"
import { soonestDue } from "../model/today.ts"

export function SessionPage({ onClose }: { onClose: () => void }) {
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
                    title: cardTitle(source.prompt),
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
      <Screen>
        <h1 className="text-3xl font-semibold tracking-tight">Journée terminée</h1>
        <p className="mt-8 text-lg">Série {done.streak}</p>
        <p className="mt-1 text-lg">{done.xp} XP aujourd'hui</p>
        {done.soonest.length > 0 ? (
          <div className="mt-8">
            <h2 className="text-sm font-medium text-neutral-500">Prochaines cartes</h2>
            <ul className="mt-3 flex flex-col gap-4">
              {done.soonest.map((item) => (
                <li key={item.cardId}>
                  <p className="text-lg">{item.title}</p>
                  <p className="text-sm text-neutral-500">{item.label}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        <button
          type="button"
          onClick={onClose}
          className="mt-auto w-full rounded-2xl bg-neutral-900 px-6 py-4 text-lg font-medium text-white"
        >
          Retour
        </button>
      </Screen>
    )
  }

  return (
    <Screen>
      <div className="flex items-center justify-between">
        <p className="text-sm text-neutral-500">
          {summary ? `${index + 1} / ${summary.queueSize}` : "Session"}
        </p>
        <button type="button" onClick={onClose} className="text-sm font-medium">
          Fermer
        </button>
      </div>
      {error ? <p className="mt-8 text-lg">{error}</p> : null}
      {saveError ? <p className="mt-8 text-lg">{saveError}</p> : null}
      {!error && !summary ? <p className="mt-8 text-lg text-neutral-500">Chargement…</p> : null}
      {summary && !card ? <p className="mt-8 text-lg">Cette carte est introuvable.</p> : null}
      {card ? (
        <SessionCard
          key={card.id}
          card={card}
          remembered={remembered}
          saving={saving}
          onGrade={grade}
        />
      ) : null}
    </Screen>
  )
}

function cardTitle(prompt: string) {
  const line = prompt.split("\n").find((part) => part.trim().length > 0) ?? ""
  const plain = line.replaceAll("`", "").trim()
  return plain.length > 0 ? plain : "Carte"
}

const gradeLabel: Record<GradeChoice, string> = {
  again: "À revoir",
  guessed: "J'ai deviné",
  hesitated: "J'ai hésité",
  knew: "Je savais",
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
  onGrade,
}: {
  card: Card
  remembered: CardProgress | null
  saving: boolean
  onGrade: (choice: GradeChoice, mcqChoiceId: string | null, mcqCorrect: boolean | null) => void
}) {
  const [choiceId, setChoiceId] = useState<string | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [hole, setHole] = useState("")
  const [holeChecked, setHoleChecked] = useState(false)
  const [arranged, setArranged] = useState<string[]>(() =>
    card.type === "order" && card.steps ? shuffledSteps(card.steps, Math.random) : [],
  )
  const [orderChecked, setOrderChecked] = useState(false)
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

  return (
    <>
      <div className="mt-8">
        <PromptText text={card.prompt} />
      </div>
      {card.type === "mcq" && card.choices ? (
        <div className="mt-8 flex flex-col gap-3">
          {card.choices.map((choice) => {
            const selected = choice.id === choiceId
            return (
              <button
                key={choice.id}
                type="button"
                aria-pressed={selected}
                onClick={() => setChoiceId(choice.id)}
                className={
                  selected
                    ? "rounded-2xl bg-neutral-900 px-4 py-4 text-left text-lg text-white"
                    : "rounded-2xl border border-neutral-300 px-4 py-4 text-left text-lg"
                }
              >
                {choice.text}
              </button>
            )
          })}
        </div>
      ) : null}
      {card.type === "reveal" && revealed && card.answer ? (
        <div className="mt-6">
          <PromptText text={card.answer} />
        </div>
      ) : null}
      {card.type === "cloze" && !holeChecked ? (
        <form
          className="mt-auto pt-8"
          onSubmit={(event) => {
            event.preventDefault()
            if (hole.trim().length === 0) {
              return
            }
            setHoleChecked(true)
          }}
        >
          <input
            value={hole}
            onChange={(event) => setHole(event.target.value)}
            aria-label="Texte manquant"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
            className="w-full rounded-2xl border border-neutral-300 px-4 py-4 font-mono text-lg"
          />
          <button
            type="submit"
            disabled={hole.trim().length === 0}
            className="mt-3 w-full rounded-2xl bg-neutral-900 px-6 py-4 text-lg font-medium text-white disabled:opacity-40"
          >
            Vérifier
          </button>
        </form>
      ) : null}
      {card.type === "order" && !orderChecked ? (
        <form
          className="mt-8"
          onSubmit={(event) => {
            event.preventDefault()
            setOrderChecked(true)
          }}
        >
          <ul className="flex flex-col">
            {arranged.map((step, index) => (
              <li key={step} className="flex items-center gap-3 border-t border-neutral-200 py-3">
                <p className="min-w-0 flex-1 text-lg">{step}</p>
                <button
                  type="button"
                  aria-label={`Monter ${step}`}
                  disabled={index === 0}
                  onClick={() => moveStep(index, -1)}
                  className="h-12 w-12 shrink-0 rounded-2xl border border-neutral-300 text-lg disabled:opacity-40"
                >
                  ↑
                </button>
                <button
                  type="button"
                  aria-label={`Descendre ${step}`}
                  disabled={index === arranged.length - 1}
                  onClick={() => moveStep(index, 1)}
                  className="h-12 w-12 shrink-0 rounded-2xl border border-neutral-300 text-lg disabled:opacity-40"
                >
                  ↓
                </button>
              </li>
            ))}
          </ul>
          <button
            type="submit"
            className="mt-6 w-full rounded-2xl bg-neutral-900 px-6 py-4 text-lg font-medium text-white"
          >
            Vérifier
          </button>
        </form>
      ) : null}
      {card.type === "reveal" && !revealed ? (
        <div className="mt-auto pt-8">
          <button
            type="button"
            onClick={() => setRevealed(true)}
            className="w-full rounded-2xl bg-neutral-900 px-6 py-4 text-lg font-medium text-white"
          >
            Voir la réponse
          </button>
        </div>
      ) : null}
      {answered ? (
        <div className="mt-8">
          {mcqCorrect === true ? <p className="text-lg font-medium">Bonne réponse.</p> : null}
          {mcqCorrect === false && card.type === "order" ? (
            <div>
              <p className="text-lg font-medium">Mauvaise réponse.</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-lg">
                {card.steps?.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
          ) : null}
          {mcqCorrect === false && card.type !== "order" ? (
            <p className="text-lg font-medium">
              Mauvaise réponse. La bonne réponse : <span className="font-mono">{correctText}</span>.
            </p>
          ) : null}
          <h2 className="mt-6 text-sm font-medium text-neutral-500">Explication</h2>
          <div className="mt-2">
            <PromptText text={card.explanation} />
          </div>
          <div className="mt-6 flex flex-col gap-3 pb-2">
            {gradeChoices(card.type, mcqCorrect).map((choice) => (
              <button
                key={choice}
                type="button"
                disabled={saving}
                onClick={() =>
                  onGrade(choice, card.type === "mcq" ? choiceId : null, mcqCorrect)
                }
                className="rounded-2xl border border-neutral-300 px-4 py-3 text-left disabled:opacity-50"
              >
                <span className="block text-lg">{gradeLabel[choice]}</span>
                <span className="block text-sm text-neutral-500">
                  {delayFor(choice, previewForProgress(remembered, now))}
                </span>
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </>
  )
}
