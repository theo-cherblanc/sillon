import { useEffect, useState } from "react"
import { readAccountConfig } from "../model/account.ts"
import { createAccountClient, type AccountClient, type SignedIn } from "../model/accountClient.ts"

export function useAccount(): {
  enabled: boolean
  ready: boolean
  email: string | null
  signIn: (email: string, password: string) => Promise<SignedIn>
  signUp: (email: string, password: string) => Promise<SignedIn | null>
  signOut: () => Promise<void>
} {
  const config = readAccountConfig({
    url: import.meta.env.VITE_SUPABASE_URL,
    anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
  })
  const [client, setClient] = useState<AccountClient | null>(null)
  const [email, setEmail] = useState<string | null>(null)
  const [ready, setReady] = useState(config === null)

  useEffect(() => {
    if (!config) {
      return
    }
    const next = createAccountClient(config)
    let cancelled = false
    setClient(next)
    void next
      .current()
      .then((session) => {
        if (!cancelled) {
          setEmail(session?.email ?? null)
          setReady(true)
        }
      })
      .catch(() => {
        if (!cancelled) {
          setReady(true)
        }
      })
    return () => {
      cancelled = true
    }
  }, [config?.url, config?.anonKey])

  return {
    enabled: config !== null,
    ready,
    email,
    signIn: async (address, password) => {
      if (!client) {
        throw new Error("Account is off")
      }
      const session = await client.signIn(address, password)
      setEmail(session.email)
      return session
    },
    signUp: async (address, password) => {
      if (!client) {
        throw new Error("Account is off")
      }
      const session = await client.signUp(address, password)
      setEmail(session?.email ?? null)
      return session
    },
    signOut: async () => {
      if (!client) {
        throw new Error("Account is off")
      }
      await client.signOut()
      setEmail(null)
    },
  }
}
