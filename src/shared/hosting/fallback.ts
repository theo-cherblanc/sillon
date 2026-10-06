export type HostedFile = {
  fileName: string
  source: string | Uint8Array
}

export function spaFallback(files: readonly HostedFile[]): HostedFile | null {
  const index = files.find((file) => file.fileName === "index.html")
  if (!index || files.some((file) => file.fileName === "404.html")) {
    return null
  }
  return { fileName: "404.html", source: index.source }
}
