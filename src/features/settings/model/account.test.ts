import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { accountCredentials, readAccountConfig } from "./account.ts"

describe("readAccountConfig", () => {
  it("stays off when either value is missing", () => {
    assert.equal(readAccountConfig({}), null)
    assert.equal(readAccountConfig({ url: "https://example.supabase.co" }), null)
    assert.equal(readAccountConfig({ anonKey: "public" }), null)
    assert.equal(readAccountConfig({ url: "   ", anonKey: "public" }), null)
  })

  it("keeps a public url and key", () => {
    assert.deepEqual(readAccountConfig({ url: " https://example.supabase.co ", anonKey: " public " }), {
      url: "https://example.supabase.co",
      anonKey: "public",
    })
  })

  it("ignores a url that is not http", () => {
    assert.equal(readAccountConfig({ url: "notaurl", anonKey: "public" }), null)
  })
})

describe("accountCredentials", () => {
  it("keeps a trimmed email and a long enough password", () => {
    assert.deepEqual(accountCredentials("  ada@example.com ", "motdepasse"), {
      email: "ada@example.com",
      password: "motdepasse",
    })
  })

  it("rejects a bad email or a short password", () => {
    assert.throws(() => accountCredentials("ada", "motdepasse"), /email/)
    assert.throws(() => accountCredentials("ada@example.com", "court"), /8 characters/)
  })
})
