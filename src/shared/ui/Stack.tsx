import type { ReactNode } from "react"

const gapClass = {
  1: "gap-1",
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  5: "gap-5",
  6: "gap-6",
  8: "gap-8",
} as const

const padClass = {
  6: "pt-6",
} as const

export type Space = keyof typeof gapClass

export function Stack({
  gap = 4,
  pad,
  rise = false,
  children,
}: {
  gap?: Space
  pad?: keyof typeof padClass
  rise?: boolean
  children: ReactNode
}) {
  return (
    <div
      className={classes(
        "flex flex-col",
        gapClass[gap],
        pad ? padClass[pad] : false,
        rise && "animate-arrive motion-reduce:animate-none",
      )}
    >
      {children}
    </div>
  )
}

export function Cluster({
  gap = 3,
  align = "center",
  between = false,
  scroll = false,
  children,
}: {
  gap?: Space
  align?: "center" | "start"
  between?: boolean
  scroll?: boolean
  children: ReactNode
}) {
  return (
    <div
      className={classes(
        "flex",
        align === "start" ? "items-start" : "items-center",
        gapClass[gap],
        between && "justify-between",
        scroll && "overflow-x-auto pb-1",
      )}
    >
      {children}
    </div>
  )
}

function classes(...parts: Array<string | false>) {
  return parts.filter(Boolean).join(" ")
}
