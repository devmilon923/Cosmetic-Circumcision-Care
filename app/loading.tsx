import { Container } from '@/components/site/section'

export default function Loading() {
  return (
    <div className="flex min-h-[50vh] w-full items-center justify-center py-20">
      <Container className="flex flex-col items-center justify-center gap-4 text-center">
        <div className="relative flex size-12 items-center justify-center">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand/30 opacity-75" />
          <span className="relative inline-flex size-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        </div>
        <p className="label-mono text-muted-foreground">লোড হচ্ছে...</p>
      </Container>
    </div>
  )
}
