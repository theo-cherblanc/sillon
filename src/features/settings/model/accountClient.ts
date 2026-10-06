import { createClient, type SupabaseClient } from "@supabase/supabase-js"
import { accountCredentials, type AccountConfig } from "./account.ts"

export type SignedIn = {
  email: string
}

export type AccountClient = {
  current(): Promise<SignedIn | null>
  signIn(email: string, password: string): Promise<SignedIn>
  signUp(email: string, password: string): Promise<SignedIn | null>
  signOut(): Promise<void>
}

let shared: SupabaseClient | null = null
let sharedKey = ""

export function sharedSupabase(config: AccountConfig): SupabaseClient {
  const key = `${config.url}\n${config.anonKey}`
  if (!shared || sharedKey !== key) {
    shared = createClient(config.url, config.anonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: false,
      },
    })
    sharedKey = key
  }
  return shared
}

export function createAccountClient(config: AccountConfig): AccountClient {
  const supabase = sharedSupabase(config)
  return {
    current: () => current(supabase),
    signIn: (email, password) => signIn(supabase, email, password),
    signUp: (email, password) => signUp(supabase, email, password),
    signOut: async () => {
      const { error } = await supabase.auth.signOut()
      if (error) {
        throw new Error("Sign out failed")
      }
    },
  }
}

async function current(supabase: SupabaseClient): Promise<SignedIn | null> {
  const { data, error } = await supabase.auth.getSession()
  if (error) {
    throw new Error("The session could not be read")
  }
  return data.session?.user.email ? { email: data.session.user.email } : null
}

async function signIn(supabase: SupabaseClient, email: string, password: string): Promise<SignedIn> {
  const credentials = accountCredentials(email, password)
  const { data, error } = await supabase.auth.signInWithPassword(credentials)
  if (error || !data.user?.email) {
    throw new Error("Sign in failed")
  }
  return { email: data.user.email }
}

async function signUp(supabase: SupabaseClient, email: string, password: string): Promise<SignedIn | null> {
  const credentials = accountCredentials(email, password)
  const { data, error } = await supabase.auth.signUp(credentials)
  if (error) {
    throw new Error("Sign up failed")
  }
  return data.session?.user.email ? { email: data.session.user.email } : null
}
