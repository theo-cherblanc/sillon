export const themeKey = "sillon.theme"

export type Theme = "light" | "dark"

type ThemeMemory = {
  getItem(key: string): string | null
  setItem(key: string, value: string): void
}

type ThemeRoot = {
  dataset: { theme?: string }
}

export function readTheme(memory: Pick<ThemeMemory, "getItem">): Theme {
  return memory.getItem(themeKey) === "dark" ? "dark" : "light"
}

export function rememberTheme(memory: ThemeMemory, theme: Theme): void {
  if (theme !== "light" && theme !== "dark") {
    throw new Error("A theme is light or dark")
  }
  memory.setItem(themeKey, theme)
}

export function paintTheme(root: ThemeRoot, theme: Theme): void {
  if (theme !== "light" && theme !== "dark") {
    throw new Error("A theme is light or dark")
  }
  root.dataset.theme = theme
}
