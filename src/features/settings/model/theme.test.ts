import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { paintTheme, readTheme, rememberTheme, themeKey } from "./theme.ts"

describe("readTheme", () => {
  it("stays light when nothing is stored or the value is unknown", () => {
    assert.equal(readTheme({ getItem: () => null }), "light")
    assert.equal(readTheme({ getItem: () => "blue" }), "light")
  })

  it("keeps a stored dark theme", () => {
    assert.equal(readTheme({ getItem: () => "dark" }), "dark")
  })
})

describe("rememberTheme", () => {
  it("stores the chosen theme", () => {
    const stored = new Map<string, string>()
    const memory = {
      getItem: (key: string) => stored.get(key) ?? null,
      setItem: (key: string, value: string) => stored.set(key, value),
    }
    rememberTheme(memory, "dark")
    assert.equal(stored.get(themeKey), "dark")
    assert.equal(readTheme(memory), "dark")
  })

  it("rejects a theme outside light and dark", () => {
    const memory = {
      getItem: () => null,
      setItem: () => {
        throw new Error("should not store")
      },
    }
    assert.throws(() => rememberTheme(memory, "blue" as "light"), /light or dark/)
  })
})

describe("paintTheme", () => {
  it("marks the page so the stylesheet can follow", () => {
    const root = { dataset: {} as { theme?: string } }
    paintTheme(root, "dark")
    assert.equal(root.dataset.theme, "dark")
    paintTheme(root, "light")
    assert.equal(root.dataset.theme, "light")
  })
})
