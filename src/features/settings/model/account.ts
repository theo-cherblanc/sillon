export type AccountConfig = {
  url: string
  anonKey: string
}

export function readAccountConfig(env: { url?: string; anonKey?: string }): AccountConfig | null {
  const url = env.url?.trim() ?? ""
  const anonKey = env.anonKey?.trim() ?? ""
  if (url === "" || anonKey === "") {
    return null
  }
  let parsed: URL
  try {
    parsed = new URL(url)
  } catch {
    return null
  }
  if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
    return null
  }
  return { url, anonKey }
}

export function accountCredentials(email: string, password: string): { email: string; password: string } {
  const trimmed = email.trim()
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
    throw new Error("An account needs an email")
  }
  if (password.length < 8) {
    throw new Error("A password needs at least 8 characters")
  }
  return { email: trimmed, password }
}
