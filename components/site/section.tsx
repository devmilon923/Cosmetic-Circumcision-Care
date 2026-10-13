import { cn } from '@/lib/utils'

export function Container({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return <div className={cn('mx-auto w-full max-w-6xl px-5 md:px-8', className)}>{children}</div>
}

export function Section({
  id,
  className,
  tone = 'default',
  children,
}: {
  id?: string
  className?: string
  tone?: 'default' | 'surface' | 'dark'
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-20',
        tone === 'surface' && 'bg-surface',
        tone === 'dark' && 'bg-foreground text-background',
        className,
      )}
    >
      {children}
    </section>
  )
}

export function Eyebrow({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <p className={cn('label-mono flex items-center gap-2 text-primary', className)}>
      <span aria-hidden className="inline-block size-1.5 rounded-full bg-brand" />
      {children}
    </p>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  as: Heading = 'h2',
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
  as?: 'h1' | 'h2' | 'h3'
}) {
  return (
    <div
      className={cn(
        'flex max-w-2xl flex-col gap-4',
        align === 'center' && 'mx-auto items-center text-center',
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <Heading className="display-md text-balance">{title}</Heading>
      {description ? (
        <p className="text-base text-muted-foreground text-pretty md:text-lg">{description}</p>
      ) : null}
    </div>
  )
}

/** Visually marks content the clinic still needs to replace with verified data. */
export function Editable({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <span
      title="সম্পাদনাযোগ্য: যাচাইকৃত তথ্য দিয়ে প্রতিস্থাপন করুন"
      className={cn(
        'rounded-[4px] border border-dashed border-brand/60 bg-brand-soft px-1 text-foreground',
        className,
      )}
    >
      {children}
    </span>
  )
}
