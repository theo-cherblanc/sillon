function assertValid(now: Date) {
  if (Number.isNaN(now.getTime())) {
    throw new Error("A local day needs a valid date")
  }
}

function padded(value: number) {
  return String(value).padStart(2, "0")
}

export function localDate(now: Date): string {
  assertValid(now)
  return `${now.getFullYear()}-${padded(now.getMonth() + 1)}-${padded(now.getDate())}`
}

export function nextLocalMidnight(now: Date): number {
  assertValid(now)
  return new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1).getTime()
}
