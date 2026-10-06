export function TabBar({
  current,
  onToday,
  onProgress,
  onSettings,
  className = "",
}: {
  current?: "today" | "progress" | "settings"
  onToday: () => void
  onProgress: () => void
  onSettings: () => void
  className?: string
}) {
  return (
    <nav className={`flex justify-between gap-3 pt-6 ${className}`}>
      <Tab current={current === "today"} onClick={onToday} label="Aujourd'hui" />
      <Tab current={current === "progress"} onClick={onProgress} label="Progression" />
      <Tab current={current === "settings"} onClick={onSettings} label="Réglages" />
    </nav>
  )
}

function Tab({ current, onClick, label }: { current: boolean; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={current ? "page" : undefined}
      className={current ? "text-base font-medium" : "text-base text-neutral-500"}
    >
      {label}
    </button>
  )
}
