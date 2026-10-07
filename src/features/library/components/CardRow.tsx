import { Stack } from "../../../shared/ui/Stack.tsx"
import { Meta } from "../../../shared/ui/Type.tsx"

export function CardRow({
  title,
  meta,
  aside,
  onOpen,
}: {
  title: string
  meta: string
  aside: string
  onOpen: () => void
}) {
  return (
    <li className="border-t border-line">
      <button
        type="button"
        onClick={onOpen}
        className="flex w-full min-h-11 items-start justify-between gap-4 py-3.5 text-left"
      >
        <Stack gap={1}>
          <p>{title}</p>
          <Meta>{meta}</Meta>
        </Stack>
        <Meta pin>{aside}</Meta>
      </button>
    </li>
  )
}
