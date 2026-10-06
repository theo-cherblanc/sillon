export type SyncDecision = "keep" | "push" | "pull"

export function decideSync(localExportedAt: number | null, remoteExportedAt: number | null): SyncDecision {
  assertStamp(localExportedAt)
  assertStamp(remoteExportedAt)
  if (localExportedAt === null && remoteExportedAt === null) {
    return "keep"
  }
  if (localExportedAt === null) {
    return "pull"
  }
  if (remoteExportedAt === null || localExportedAt > remoteExportedAt) {
    return "push"
  }
  if (remoteExportedAt > localExportedAt) {
    return "pull"
  }
  return "keep"
}

function assertStamp(value: number | null): void {
  if (value !== null && !Number.isFinite(value)) {
    throw new Error("A sync stamp needs a finite time")
  }
}
