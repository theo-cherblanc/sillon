const storageKey = "sillon.memoryTouched"

type TouchMemory = {
  getItem(key: string): string | null
  setItem(key: string, value: string): void
}

export function readMemoryTouch(memory: Pick<TouchMemory, "getItem">): number | null {
  const value = memory.getItem(storageKey)
  if (value === null) {
    return null
  }
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : null
}

export function rememberMemoryTouch(memory: TouchMemory, at: number): void {
  if (!Number.isFinite(at)) {
    throw new Error("A sync stamp needs a finite time")
  }
  memory.setItem(storageKey, String(at))
}
