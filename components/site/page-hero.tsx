import { Container, Eyebrow } from '@/components/site/section'
import { cn } from '@/lib/utils'

export function PageHero({
  eyebrow,
  title,
  description,
  aside,
  children,
  className,
  align = 'center',
}: {
  eyebrow: string
  title: string
  description?: string
  aside?: React.ReactNode
  children?: React.ReactNode
  className?: string
  align?: 'start' | 'center' | 'end'
}) {
  const alignClass = {
    start: 'lg:items-start',
    center: 'lg:items-center',
    end: 'lg:items-end',
  }[align]

  return (
    <div className={cn('border-b', className)}>
      <Container className={cn('grid gap-10 py-14 md:py-20 lg:grid-cols-12', alignClass)}>
        <div className={cn('reveal flex flex-col gap-6', aside ? 'lg:col-span-7' : 'lg:col-span-9')}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl lg:text-5xl lg:leading-[1.18]">
              {title}
            </h1>
            {description ? (
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
                {description}
              </p>
            ) : null}
          </div>
          {children}
        </div>
        {aside ? (
          <div className="reveal lg:col-span-5" style={{ animationDelay: '150ms' }}>
            {aside}
          </div>
        ) : null}
      </Container>
    </div>
  )
}
