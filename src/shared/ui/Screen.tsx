import type { ReactNode } from "react"
import { Mark } from "./Mark.tsx"

export function Screen({
  title,
  trailing,
  extra,
  children,
  dock,
  tabs,
  largeMark = false,
}: {
  title: string
  trailing?: ReactNode
  extra?: ReactNode
  children: ReactNode
  dock?: ReactNode
  tabs?: ReactNode
  largeMark?: boolean
}) {
  return (
    <div className="mx-auto flex h-full w-full max-w-md flex-col overflow-hidden">
      <header className="flex items-center gap-3.5 px-5.5 pt-[max(16px,env(safe-area-inset-top))] pb-3.5">
        <Mark size={largeMark ? 36 : 28} />
        <h1 className="min-w-0 flex-1 font-display text-[28px] leading-[1.15] font-bold tracking-[0.04em] uppercase">{title}</h1>
        {trailing}
      </header>
      {extra ? <div className="px-5.5 pt-0.5 pb-4">{extra}</div> : null}
      <div className="min-h-0 flex-1 overflow-y-auto border-t-2 border-accent px-5.5 pt-5.5 pb-8">
        <div className="animate-arrive motion-reduce:animate-none">{children}</div>
      </div>
      {dock ? <div className="flex flex-col gap-2.5 px-5.5 pt-3 pb-4">{dock}</div> : null}
      {tabs}
    </div>
  )
}
