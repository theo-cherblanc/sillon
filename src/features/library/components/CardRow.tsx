import { Stack } from "../../../shared/ui/Stack.tsx"
import { Meta } from "../../../shared/ui/Type.tsx"

export function CardRow({ title, meta, aside }: { title: string; meta: string; aside: string }) {
  return (
    <li className="flex items-start justify-between gap-4 border-t border-line py-3.5">
      <Stack gap={1}>
        <p>{title}</p>
        <Meta>{meta}</Meta>
      </Stack>
      <Meta pin>{aside}</Meta>
    </li>
  )
}
