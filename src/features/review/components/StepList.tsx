export function StepList({ steps }: { steps: string[] }) {
  return (
    <ol className="list-decimal space-y-2 pl-5">
      {steps.map((step) => (
        <li key={step}>{step}</li>
      ))}
    </ol>
  )
}
