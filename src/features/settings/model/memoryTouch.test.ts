import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { readMemoryTouch, rememberMemoryTouch } from "./memoryTouch.ts"

describe("rememberMemoryTouch", () => {
  it("keeps the time of the last local change", () => {
    const stored = new Map<string, string>()
    const memory = {
      getItem: (key: string) => stored.get(key) ?? null,
      setItem: (key: string, value: string) => stored.set(key, value),
    }
    rememberMemoryTouch(memory, 20)
    assert.equal(readMemoryTouch(memory), 20)
  })

  it("ignores a stored value that is not a time", () => {
    assert.equal(readMemoryTouch({ getItem: () => "hier" }), null)
  })

  it("rejects a time that is not finite", () => {
    assert.throws(() => rememberMemoryTouch({ getItem: () => null, setItem: () => undefined }, Number.NaN), /finite time/)
  })
})
