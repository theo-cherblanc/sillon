import type { ButtonHTMLAttributes, ReactNode } from "react"

type Variant = "plain" | "accent" | "left" | "square"

const face: Record<Variant, string> = {
  plain:
    "w-full min-h-12 border border-line bg-transparent px-4 py-3 text-center text-base leading-[1.3] font-medium tracking-[0.06em] text-ink",
  accent:
    "w-full border-0 bg-accent px-5.5 pt-4 pb-3.5 text-center text-[22px] leading-[1.15] font-bold tracking-[0.08em] text-accent-ink [clip-path:polygon(0_0,calc(100%-16px)_0,100%_16px,100%_100%,16px_100%,0_calc(100%-16px))]",
  left: "w-full min-h-12 border border-line bg-transparent px-4 py-3 text-left text-base leading-[1.3] font-medium tracking-[0.04em] text-ink",
  square: "size-11 shrink-0 border border-line bg-transparent p-0 text-center text-base font-medium tracking-normal text-ink",
}

export function Button({
  variant = "plain",
  hint,
  type = "button",
  children,
  ...props
}: Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
  variant?: Variant
  hint?: string
}) {
  return (
    <button
      {...props}
      type={type}
      className={`rounded-none font-display uppercase transition-colors duration-[140ms] ease-linear disabled:opacity-40 motion-reduce:transition-none ${face[variant]}`}
    >
      {hint ? (
        <>
          <span className="block">{children}</span>
          <Hint accent={variant === "accent"}>{hint}</Hint>
        </>
      ) : (
        children
      )}
    </button>
  )
}

function Hint({ accent, children }: { accent: boolean; children: ReactNode }) {
  return (
    <span
      className={
        accent
          ? "mt-2 block text-[13px] font-medium tracking-[0.06em] text-accent-ink"
          : "mt-2 block text-sm font-medium tracking-[0.04em] text-muted"
      }
    >
      {children}
    </span>
  )
}
