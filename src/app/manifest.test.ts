import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import { describe, it } from "node:test"

describe("manifest", () => {
  it("opens Sillon on its own, without the browser chrome", () => {
    const manifest = JSON.parse(readFileSync("public/manifest.webmanifest", "utf8"))
    assert.equal(manifest.name, "Sillon")
    assert.equal(manifest.display, "standalone")
    assert.equal(manifest.start_url, "/")
    assert.equal(manifest.lang, "fr")

    for (const icon of manifest.icons) {
      const bytes = readFileSync(`public${icon.src}`)
      assert.equal(bytes.subarray(0, 8).toString("hex"), "89504e470d0a1a0a")
    }
  })
})
