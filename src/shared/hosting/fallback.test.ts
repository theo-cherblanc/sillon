import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { spaFallback } from "./fallback.ts"

describe("spaFallback", () => {
  it("copies the built page so an unknown path still opens the app", () => {
    const page = "<!doctype html><title>Sillon</title>"
    const copy = spaFallback([{ fileName: "index.html", source: page }])
    assert.deepEqual(copy, { fileName: "404.html", source: page })
  })

  it("leaves the build alone when the page is missing or the fallback already exists", () => {
    assert.equal(spaFallback([{ fileName: "app.js", source: "console.log(1)" }]), null)
    assert.equal(
      spaFallback([
        { fileName: "index.html", source: "page" },
        { fileName: "404.html", source: "already" },
      ]),
      null,
    )
  })
})
