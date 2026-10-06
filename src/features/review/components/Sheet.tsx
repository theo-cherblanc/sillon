import type { ReactNode } from "react"

export function Sheet({ children }: { children: ReactNode }) {
  return (
    <div className="relative animate-card border border-line bg-surface px-4.5 pt-4.5 pb-5 motion-reduce:animate-none before:absolute before:-top-px before:-left-px before:size-3 before:border-t-2 before:border-l-2 before:border-accent before:content-[''] after:absolute after:-right-px after:-bottom-px after:size-3 after:border-r-2 after:border-b-2 after:border-accent after:content-['']">
      {children}
    </div>
  )
}
