import Link from 'next/link'
import {
  RiArrowRightLine,
  RiCalendarCheckLine,
  RiHome4Line,
  RiPhoneLine,
  RiQuestionLine,
  RiShieldCheckLine,
  RiStethoscopeLine,
} from 'react-icons/ri'
import { Button } from '@/components/ui/button'
import { Container, Eyebrow, Section } from '@/components/site/section'
import { clinic, clinicLinks } from '@/lib/clinic'

const helpfulLinks = [
  {
    href: '/procedure',
    title: 'ডিভাইস কসমেটিক খৎনা',
    description: 'পদ্ধতি, ধাপ ও ব্যথা নিয়ন্ত্রণের বিস্তারিত তথ্য।',
    icon: RiStethoscopeLine,
  },
  {
    href: '/doctor',
    title: 'ডাক্তার পরিচিতি',
    description: 'দায়িত্বপ্রাপ্ত চিকিৎসকের যোগ্যতা, অভিজ্ঞতা ও রেজিস্ট্রেশন তথ্য।',
    icon: RiShieldCheckLine,
  },
  {
    href: '/faq',
    title: 'সাধারণ প্রশ্নোত্তর',
    description: 'খৎনা নিয়ে অভিভাবকদের সচরাচর জিজ্ঞাসা ও উত্তর।',
    icon: RiQuestionLine,
  },
  {
    href: '/appointment',
    title: 'অ্যাপয়েন্টমেন্টের অনুরোধ',
    description: 'ক্লিনিকে আসার আগে সুবিধাজনক সময় বেছে নিন।',
    icon: RiCalendarCheckLine,
  },
]

export default function NotFound() {
  return (
    <Section className="py-16 md:py-24">
      <Container className="flex flex-col items-center text-center">
        <Eyebrow className="mb-4">৪০৪ ত্রুটি</Eyebrow>

        <h1 className="max-w-2xl text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl lg:text-5xl lg:leading-[1.18]">
          পাতাটি খুঁজে পাওয়া যায়নি
        </h1>

        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
          আপনি যে পাতাটিতে যেতে চাচ্ছেন তা হয়তো স্থানান্তরিত হয়েছে, লিংকটি ভুল ছিল, অথবা পাতাটি
          বিদ্যমান নেই।
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" render={<Link href="/" />}>
            <RiHome4Line data-icon="inline-start" />
            হোম পেজে ফিরুন
          </Button>
          <Button size="lg" variant="outline" render={<Link href="/appointment" />}>
            অ্যাপয়েন্টমেন্ট নিন
          </Button>
          <Button size="lg" variant="outline" render={<a href={clinicLinks.tel} />}>
            <RiPhoneLine data-icon="inline-start" />
            {clinic.phone.display}
          </Button>
        </div>

        <div className="mt-16 w-full max-w-4xl border-t pt-12 text-left">
          <div className="mb-6 flex flex-col gap-1 text-center sm:text-left">
            <span className="label-mono text-primary">প্রয়োজনীয় পাতাগুলো</span>
            <h2 className="text-xl font-semibold">নিচের পাতাগুলো থেকে খুঁজে নিতে পারেন</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {helpfulLinks.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-start gap-4 rounded-lg border bg-surface p-5 transition-colors hover:border-primary/50 hover:bg-surface/80"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-background text-primary">
                    <Icon className="size-5" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="flex items-center gap-1.5 font-semibold group-hover:text-primary">
                      {item.title}
                      <RiArrowRightLine className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                    <span className="text-sm text-muted-foreground text-pretty">
                      {item.description}
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </Container>
    </Section>
  )
}
