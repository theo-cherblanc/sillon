export function TabBar({
  current,
  onToday,
  onProgress,
  className = "",
}: {
  current: "today" | "progress"
  onToday: () => void
  onProgress: () => void
  className?: string
}) {
  return (
    <nav className={`flex gap-6 pt-6 ${className}`}>
      <button
        type="button"
        onClick={onToday}
        aria-current={current === "today" ? "page" : undefined}
        className={current === "today" ? "text-lg font-medium" : "text-lg text-neutral-500"}
      >
        Aujourd'hui
      </button>
      <button
        type="button"
        onClick={onProgress}
        aria-current={current === "progress" ? "page" : undefined}
        className={current === "progress" ? "text-lg font-medium" : "text-lg text-neutral-500"}
      >
        Progression
      </button>
    </nav>
  )
}
