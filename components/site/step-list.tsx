import { cn } from '@/lib/utils'

export function StepList({
  steps,
  className,
}: {
  steps: { step: string; title: string; text: string }[]
  className?: string
}) {
  return (
    <ol className={cn('flex flex-col divide-y border-y', className)}>
      {steps.map((item) => (
        <li key={item.step} className="grid gap-3 py-6 sm:grid-cols-[4rem_1fr] sm:gap-6">
          <span className="label-mono pt-1.5 text-primary">{item.step}</span>
          <div className="flex flex-col gap-1.5">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-muted-foreground text-pretty md:text-base">{item.text}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
