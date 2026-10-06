export function TabBar({
  current,
  onToday,
  onProgress,
  onSettings,
}: {
  current?: "today" | "progress" | "settings"
  onToday: () => void
  onProgress: () => void
  onSettings: () => void
}) {
  return (
    <nav className="grid grid-cols-3 border-t border-line pb-[env(safe-area-inset-bottom)]">
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
      className="relative min-h-13 border-0 bg-transparent px-1 pt-2 font-display text-xs leading-[1.2] font-medium tracking-[0.04em] text-muted uppercase aria-[current=page]:text-ink aria-[current=page]:shadow-[inset_0_3px_0_var(--color-accent)]"
    >
      {label}
    </button>
  )
}
