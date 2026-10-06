import { getDatabase } from "../../../shared/db/client.ts"
import { readAccountConfig } from "./account.ts"
import { sharedSupabase } from "./accountClient.ts"
import { readExport, type ProgressFile } from "./export.ts"
import { parseProgressFile, replaceMemory } from "./import.ts"
import { readMemoryTouch, rememberMemoryTouch } from "./memoryTouch.ts"
import { memoryFreshness, planSync } from "./sync.ts"
import type { SupabaseClient } from "@supabase/supabase-js"
import type { Profile } from "../../../shared/db/types.ts"

export async function publishMemory(at: number): Promise<void> {
  try {
    rememberMemoryTouch(localStorage, at)
    const ready = await signedIn()
    if (!ready) {
      return
    }
    const file = await readExport(getDatabase(), at)
    await writeRemoteMemory(ready.supabase, ready.userId, file)
  } catch {
    // The note is already on this device. A paused project must not fail the review.
  }
}

export async function openRemoteMemory(): Promise<ProgressFile | null> {
  try {
    const ready = await signedIn()
    if (!ready) {
      return null
    }
    const remote = await readRemoteMemory(ready.supabase)
    const local = await readExport(getDatabase(), Date.now())
    const freshness = memoryFreshness(local)
    const touch = readMemoryTouch(localStorage)
    const plan = planSync(touch, remote?.exportedAt ?? null, freshness)
    if (plan.action === "push") {
      const file = await readExport(getDatabase(), plan.exportedAt)
      await writeRemoteMemory(ready.supabase, ready.userId, file)
      rememberMemoryTouch(localStorage, plan.exportedAt)
      return null
    }
    if (plan.action === "pull" && remote) {
      return remote.payload
    }
    if (touch === null) {
      rememberMemoryTouch(localStorage, freshness)
    }
    return null
  } catch {
    return null
  }
}

export async function acceptRemoteMemory(file: ProgressFile): Promise<Profile> {
  const profile = await replaceMemory(getDatabase(), file)
  rememberMemoryTouch(localStorage, file.exportedAt)
  return profile
}

async function signedIn(): Promise<{ supabase: SupabaseClient; userId: string } | null> {
  const config = readAccountConfig({
    url: import.meta.env.VITE_SUPABASE_URL,
    anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
  })
  if (!config) {
    return null
  }
  const supabase = sharedSupabase(config)
  const { data, error } = await supabase.auth.getSession()
  if (error || !data.session) {
    return null
  }
  return { supabase, userId: data.session.user.id }
}

async function readRemoteMemory(supabase: SupabaseClient): Promise<{ exportedAt: number; payload: ProgressFile } | null> {
  const { data, error } = await supabase.from("memory").select("exported_at, payload").maybeSingle()
  if (error) {
    throw new Error("The remote memory could not be read")
  }
  if (!data) {
    return null
  }
  const row = data as { exported_at: number; payload: unknown }
  return { exportedAt: row.exported_at, payload: parseProgressFile(row.payload) }
}

async function writeRemoteMemory(supabase: SupabaseClient, userId: string, file: ProgressFile): Promise<void> {
  const { error } = await supabase.from("memory").upsert({
    user_id: userId,
    exported_at: file.exportedAt,
    payload: file,
  })
  if (error) {
    throw new Error("The memory could not be sent")
  }
}
