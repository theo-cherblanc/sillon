import type { ReactNode } from "react"
import { Stack } from "./Stack.tsx"
import { Kicker } from "./Type.tsx"

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <Stack gap={3}>
        <Kicker as="h2">{title}</Kicker>
        {children}
      </Stack>
    </section>
  )
}
