const storageKey = "sillon.lastExport"
const dayPattern = /^\d{4}-\d{2}-\d{2}$/

type ExportMemory = {
  getItem(key: string): string | null
  setItem(key: string, value: string): void
}

export function lastExportNote(day: string | null): string {
  if (day === null) {
    return "Pas encore d'export"
  }
  if (!dayPattern.test(day)) {
    throw new Error("A last export needs a calendar day")
  }
  return `Dernier export le ${day}`
}

export function readLastExport(memory: Pick<ExportMemory, "getItem">): string | null {
  const value = memory.getItem(storageKey)
  return value !== null && dayPattern.test(value) ? value : null
}

export function rememberExport(memory: ExportMemory, day: string): void {
  if (!dayPattern.test(day)) {
    throw new Error("A last export needs a calendar day")
  }
  memory.setItem(storageKey, day)
}
