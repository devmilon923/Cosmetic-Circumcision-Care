'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { RiAlertLine, RiHome4Line, RiPhoneLine, RiRestartLine } from 'react-icons/ri'
import { Button } from '@/components/ui/button'
import { Container, Section } from '@/components/site/section'
import { clinic, clinicLinks } from '@/lib/clinic'

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error to monitoring if needed
    console.error('Application runtime error:', error)
  }, [error])

  return (
    <Section className="py-20 md:py-28">
      <Container className="flex max-w-2xl flex-col items-center text-center">
        <span className="mb-4 flex size-14 items-center justify-center rounded-2xl bg-destructive/10 text-destructive">
          <RiAlertLine className="size-7" />
        </span>

        <span className="label-mono text-destructive">ত্রুটি দেখা দিয়েছে</span>
        <h1 className="display-sm mt-3 text-balance">কিছু একটা সমস্যা হয়েছে</h1>

        <p className="mt-4 text-base text-muted-foreground text-pretty md:text-lg">
          সাময়িক কারিগরি সমস্যার কারণে পাতাটি প্রদর্শন করা যাচ্ছে না। আপনি পুনরায় চেষ্টা করতে
          পারেন অথবা জরুরি প্রয়োজনে সরাসরি ক্লিনিকে যোগাযোগ করতে পারেন।
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" onClick={() => reset()}>
            <RiRestartLine data-icon="inline-start" />
            আবার চেষ্টা করুন
          </Button>
          <Button size="lg" variant="outline" render={<Link href="/" />}>
            <RiHome4Line data-icon="inline-start" />
            হোম পেজে ফিরুন
          </Button>
          <Button size="lg" variant="outline" render={<a href={clinicLinks.tel} />}>
            <RiPhoneLine data-icon="inline-start" />
            {clinic.phone.display}
          </Button>
        </div>
      </Container>
    </Section>
  )
}
