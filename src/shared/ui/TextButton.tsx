import type { ButtonHTMLAttributes } from "react"

export function TextButton({
  type = "button",
  children,
  ...props
}: Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">) {
  return (
    <button
      {...props}
      type={type}
      className="min-h-11 shrink-0 border-0 bg-transparent p-0 font-display text-base font-medium tracking-[0.08em] text-ink uppercase"
    >
      {children}
    </button>
  )
}
