import Image from 'next/image'
import { RiImage2Line } from 'react-icons/ri'
import { cn } from '@/lib/utils'

export type FrameRatio = '1/1' | '4/5' | '3/4' | '3/2' | '4/3' | '16/9' | '21/9'

const ratioClass: Record<FrameRatio, string> = {
  '1/1': 'aspect-square',
  '4/5': 'aspect-[4/5]',
  '3/4': 'aspect-[3/4]',
  '3/2': 'aspect-[3/2]',
  '4/3': 'aspect-[4/3]',
  '16/9': 'aspect-video',
  '21/9': 'aspect-[21/9]',
}

type ImageFrameProps = {
  src?: string | null
  alt: string
  /** Shown inside the empty frame, e.g. "Hero · 4:5". */
  label?: string
  caption?: string
  ratio?: FrameRatio
  priority?: boolean
  sizes?: string
  className?: string
  frameClassName?: string
}

/**
 * Reusable photo frame. Renders the real image when `src` is set,
 * otherwise a designed empty state that keeps the layout intentional.
 */
export function ImageFrame({
  src,
  alt,
  label,
  caption,
  ratio = '4/3',
  priority,
  sizes = '(min-width: 1024px) 50vw, 100vw',
  className,
  frameClassName,
}: ImageFrameProps) {
  return (
    <figure className={cn('flex flex-col gap-2', className)}>
      <div
        role={src ? undefined : 'img'}
        aria-label={src ? undefined : `${alt}: ছবি শীঘ্রই যুক্ত হবে`}
        className={cn(
          'relative w-full overflow-hidden rounded-lg border bg-surface',
          ratioClass[ratio],
          frameClassName,
        )}
      >
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className="object-cover"
          />
        ) : (
          <EmptyFrame label={label} />
        )}
      </div>
      {caption ? (
        <figcaption className="text-sm text-muted-foreground">{caption}</figcaption>
      ) : null}
    </figure>
  )
}

function EmptyFrame({ label }: { label?: string }) {
  return (
    <div aria-hidden className="dot-grid absolute inset-0 flex items-center justify-center">
      <FrameCorner className="top-2 left-2 border-t border-l" />
      <FrameCorner className="top-2 right-2 border-t border-r" />
      <FrameCorner className="bottom-2 left-2 border-b border-l" />
      <FrameCorner className="right-2 bottom-2 border-r border-b" />
      <div className="flex flex-col items-center gap-2 px-4 text-center">
        <span className="flex size-10 items-center justify-center rounded-lg border bg-background text-muted-foreground">
          <RiImage2Line className="size-4" />
        </span>
        {label ? <span className="label-mono text-muted-foreground">{label}</span> : null}
      </div>
    </div>
  )
}

function FrameCorner({ className }: { className: string }) {
  return <span className={cn('absolute size-4 border-foreground/30', className)} />
}
