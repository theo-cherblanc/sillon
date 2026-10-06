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

export function memoryFreshness(file: {
  profile: { createdAt: number }
  progress: readonly { updatedAt: number }[]
  reviews: readonly { at: number }[]
}): number {
  const times = [
    file.profile.createdAt,
    ...file.progress.map((row) => row.updatedAt),
    ...file.reviews.map((row) => row.at),
  ]
  if (times.length === 0 || times.some((time) => !Number.isFinite(time))) {
    throw new Error("A sync stamp needs a finite time")
  }
  return Math.max(...times)
}

export type SyncPlan =
  | { action: "keep"; stamp: number }
  | { action: "push"; exportedAt: number }
  | { action: "pull" }

export function planSync(localStamp: number | null, remoteExportedAt: number | null, freshness: number): SyncPlan {
  const stamp = localStamp ?? memoryFreshness({ profile: { createdAt: freshness }, progress: [], reviews: [] })
  const decision = decideSync(stamp, remoteExportedAt)
  if (decision === "pull") {
    return { action: "pull" }
  }
  if (decision === "push") {
    return { action: "push", exportedAt: stamp }
  }
  return { action: "keep", stamp }
}

function assertStamp(value: number | null): void {
  if (value !== null && !Number.isFinite(value)) {
    throw new Error("A sync stamp needs a finite time")
  }
}
