import { Stack } from "../../../shared/ui/Stack.tsx"
import { Answer, Kicker, Meta } from "../../../shared/ui/Type.tsx"

export function Notes({
  mistake,
  insight,
  source,
  related,
}: {
  mistake?: string
  insight?: string
  source?: string
  related: readonly { id: string; label: string }[]
}) {
  if (!mistake && !insight && !source && related.length === 0) {
    return null
  }

  return (
    <Stack gap={6}>
      {mistake ? (
        <Stack gap={3}>
          <Kicker as="h2">Piège courant</Kicker>
          <Answer>{mistake}</Answer>
        </Stack>
      ) : null}
      {insight ? (
        <Stack gap={3}>
          <Kicker as="h2">Pour la route</Kicker>
          <Answer>{insight}</Answer>
        </Stack>
      ) : null}
      {source ? (
        <Stack gap={3}>
          <Kicker as="h2">Source</Kicker>
          {looksLikeUrl(source) ? (
            <a href={source} className="text-base leading-normal text-accent break-all" target="_blank" rel="noreferrer">
              {sourceLabel(source)}
            </a>
          ) : (
            <Meta>{source}</Meta>
          )}
        </Stack>
      ) : null}
      {related.length > 0 ? (
        <Stack gap={3}>
          <Kicker as="h2">Cartes liées</Kicker>
          <Stack gap={2}>
            {related.map((item) => (
              <Meta key={item.id}>{item.label}</Meta>
            ))}
          </Stack>
        </Stack>
      ) : null}
    </Stack>
  )
}

function looksLikeUrl(value: string): boolean {
  try {
    const parsed = new URL(value)
    return parsed.protocol === "https:" || parsed.protocol === "http:"
  } catch {
    return false
  }
}

function sourceLabel(value: string): string {
  try {
    const host = new URL(value).hostname.replace(/^www\./, "")
    if (host === "developer.mozilla.org") {
      return "MDN"
    }
    if (host === "git-scm.com") {
      return "Git"
    }
    if (host === "docs.docker.com") {
      return "Docker"
    }
    if (host.endsWith("ietf.org") || host === "httpwg.org") {
      return "HTTP"
    }
    return host
  } catch {
    return value
  }
}
