import { readFileSync, writeFileSync } from "node:fs"
import { resolve } from "node:path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig, type Plugin } from "vite"
import { VitePWA } from "vite-plugin-pwa"
import { spaFallback } from "./src/shared/hosting/fallback.ts"

function spa404(): Plugin {
  let outDir = "dist"
  return {
    name: "sillon-spa-404",
    apply: "build",
    configResolved(config) {
      outDir = config.build.outDir
    },
    closeBundle() {
      let source: string
      try {
        source = readFileSync(resolve(outDir, "index.html"), "utf8")
      } catch {
        return
      }
      const copy = spaFallback([{ fileName: "index.html", source }])
      if (!copy || typeof copy.source !== "string") {
        return
      }
      writeFileSync(resolve(outDir, copy.fileName), copy.source)
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    spa404(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: false,
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,webmanifest}"],
        navigateFallback: "index.html",
      },
      devOptions: {
        enabled: false,
      },
    }),
  ],
})
