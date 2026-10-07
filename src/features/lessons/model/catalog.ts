import { cardsForLesson } from "../../../shared/content/pack.ts"
import type { CardTopic, Lesson } from "../../../shared/content/types.ts"

export const topicLabels: Record<CardTopic, string> = {
  javascript: "JavaScript",
  http: "HTTP",
  web: "Web",
  git: "Git",
  docker: "Docker",
  shell: "Shell",
  architecture: "Architecture",
  angular: "Angular",
}

export type LessonListItem = {
  id: string
  topic: CardTopic
  topicLabel: string
  order: number
  title: string
  minutes: number
  cardCount: number
  read: boolean
}

export type LessonGroup = {
  topic: CardTopic
  label: string
  items: LessonListItem[]
}

export function catalogLessons(
  lessons: readonly Lesson[],
  cards: readonly { lessonId?: string }[],
  readIds: ReadonlySet<string>,
): LessonListItem[] {
  return [...lessons]
    .sort((left, right) => left.topic.localeCompare(right.topic) || left.order - right.order || left.id.localeCompare(right.id))
    .map((lesson) => ({
      id: lesson.id,
      topic: lesson.topic,
      topicLabel: topicLabels[lesson.topic],
      order: lesson.order,
      title: lesson.title,
      minutes: lesson.minutes,
      cardCount: cardsForLesson(cards, lesson.id).length,
      read: readIds.has(lesson.id),
    }))
}

export function groupedLessons(items: readonly LessonListItem[]): LessonGroup[] {
  const groups: LessonGroup[] = []
  for (const item of items) {
    const last = groups.at(-1)
    if (!last || last.topic !== item.topic) {
      groups.push({ topic: item.topic, label: item.topicLabel, items: [item] })
      continue
    }
    last.items.push(item)
  }
  return groups
}
