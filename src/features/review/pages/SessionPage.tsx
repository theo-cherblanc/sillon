import { useState } from "react"
import { cards } from "../../../shared/content/cards.ts"
import type { Card } from "../../../shared/content/types.ts"
import { getDatabase } from "../../../shared/db/client.ts"
import type { CardProgress } from "../../../shared/db/types.ts"
import { Screen } from "../../../shared/ui/Screen.tsx"
import { PromptText } from "../components/PromptText.tsx"
import { useToday } from "../hooks/useToday.ts"
import { gradeChoices, type GradeChoice } from "../model/grade.ts"
import { recordGrade } from "../model/record.ts"
import { previewForProgress, type DelayPreview } from "../model/schedule.ts"

export function SessionPage({ onClose }: { onClose: () => void }) {
  const { summary, queue, progress, error } = useToday()
  const [index, setIndex] = useState(0)
  const [saving, setSaving] = useState(false)
  const [saveError, setSaveError] = useState<string | null>(null)
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
      await recordGrade(getDatabase(), {
        card,
        progress: remembered,
        choice,
        mcqChoiceId,
        mcqCorrect,
        now: new Date(),
        finishesQueue: lastCard,
        queueSize: lastCard ? queue.length : undefined,
      })
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
  const [now] = useState(() => new Date())
  const mcqCorrect =
    card.type !== "mcq" || choiceId === null ? null : choiceId === card.correctChoiceId
  const answered = card.type === "reveal" ? revealed : mcqCorrect !== null
  const correctText = card.choices?.find((choice) => choice.id === card.correctChoiceId)?.text

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
          {mcqCorrect === false ? (
            <p className="text-lg font-medium">
              Mauvaise réponse. La bonne réponse : {correctText}.
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
