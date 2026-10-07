import type { Lesson } from "./types.ts"
import loaded from "./lessons.json"

export const lessons: readonly Lesson[] = loaded as Lesson[]
