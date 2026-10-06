import type { ReactNode } from "react"

export function Screen({ children, fill = false }: { children: ReactNode; fill?: boolean }) {
  return (
    <main
      className={`mx-auto flex w-full max-w-md flex-col bg-white px-6 pt-[max(1.5rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))] text-neutral-900 ${fill ? "h-dvh overflow-hidden" : "min-h-dvh"}`}
    >
      {children}
    </main>
  )
}
