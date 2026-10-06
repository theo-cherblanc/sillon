import type { InputHTMLAttributes } from "react"

export function Field({
  mono = false,
  ...props
}: Omit<InputHTMLAttributes<HTMLInputElement>, "className"> & { mono?: boolean }) {
  return (
    <input
      {...props}
      className={
        mono
          ? "w-full min-h-12 rounded-none border border-line bg-transparent px-3 py-2.5 font-mono text-sm"
          : "w-full min-h-12 rounded-none border border-line bg-transparent px-3 py-2.5 text-base"
      }
    />
  )
}
