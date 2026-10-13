import type { Metadata } from 'next'
import { RiDoubleQuotesL, RiShieldCheckLine } from 'react-icons/ri'
import { Button } from '@/components/ui/button'
import { PageHero } from '@/components/site/page-hero'
import { Container, Editable, Eyebrow, Section, SectionHeading } from '@/components/site/section'
import { CtaBand } from '@/components/site/cta-band'
import { clinicLinks } from '@/lib/clinic'

export const metadata: Metadata = {
  title: 'অভিভাবকদের মতামত: বাস্তব অভিজ্ঞতা ও প্রতিক্রিয়া',
  description:
    'রওজা বেবি কেয়ার হেলথ সেন্টারে সেবা নেওয়া অভিভাবকদের আসল মতামত। কোনো বানানো রিভিউ বা রেটিং এখানে প্রকাশ করা হয় না।',
}

/**
 * Review slots. Only verified, consented reviews go here — never fabricated ones.
 * Replace the placeholder fields with the real quote, first name/initials, child's age range and month.
 */
const reviewSlots = [
  { id: 'r1', size: 'large' as const },
  { id: 'r2', size: 'small' as const },
  { id: 'r3', size: 'small' as const },
  { id: 'r4', size: 'large' as const },
]

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="অভিভাবকদের মতামত"
        title="অন্য অভিভাবকরা কী বলেছেন"
        description="এই পাতায় কেবল সেই অভিভাবকদের কথা থাকবে যাঁরা আমাদের এখানে সেবা নিয়েছেন এবং প্রকাশের অনুমতি দিয়েছেন। আমরা কোনো মতামত বানাই না, কোনো রেটিং অনুমান করি না।"
        aside={
          <div className="flex gap-4 rounded-lg border bg-surface p-6">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-background text-primary">
              <RiShieldCheckLine className="size-5" />
            </span>
            <div className="flex flex-col gap-1 text-sm">
              <span className="font-semibold">সততার নীতি</span>
              <span className="text-muted-foreground text-pretty">
                প্রতিটি মতামত অভিভাবকের লিখিত বা মৌখিক সম্মতিতে, নাম সংক্ষিপ্ত করে প্রকাশ করা হয়।
                শিশুর পরিচয় কখনো প্রকাশ করা হয় না।
              </span>
            </div>
          </div>
        }
      />

      <Section>
        <Container className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <Eyebrow>মতামত</Eyebrow>
            <p className="text-sm text-muted-foreground">
              এখানে চিকিৎসায় সেবা গ্রহণকারী অভিভাবকদের সরাসরি প্রতিক্রিয়া ও অভিজ্ঞতা তুলে ধরা হয়।
            </p>
          </div>
          <ul className="grid gap-4 md:grid-cols-2">
            {reviewSlots.map((slot) => (
              <li
                key={slot.id}
                className="flex flex-col justify-between gap-8 rounded-lg border p-6 hover-lift md:p-8"
              >
                <div className="flex flex-col gap-5">
                  <RiDoubleQuotesL className="size-6 text-brand" />
                  <blockquote className="text-base text-pretty md:text-lg">
                    <Editable>
                      [অভিভাবকের নিজের ভাষায় অভিজ্ঞতা: সম্মতিসহ অপরিবর্তিত উদ্ধৃতি]
                    </Editable>
                  </blockquote>
                </div>
                <footer className="flex items-center justify-between gap-4 border-t pt-4 text-sm">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-medium">
                      <Editable>[নামের আদ্যক্ষর / প্রথম নাম]</Editable>
                    </span>
                    <span className="text-muted-foreground">
                      <Editable>[শিশুর বয়সসীমা]</Editable> · <Editable>[মাস, বছর]</Editable>
                    </span>
                  </div>
                  <span className="label-mono text-muted-foreground">Verified</span>
                </footer>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="surface">
        <Container className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <SectionHeading
            className="lg:col-span-7"
            eyebrow="আপনার অভিজ্ঞতা"
            title="আমাদের এখানে সেবা নিয়েছেন? আপনার কথা জানান"
            description="আপনার মতামত অন্য অভিভাবকদের সিদ্ধান্ত নিতে সাহায্য করবে। প্রকাশের আগে আমরা আপনার সম্মতি নেব এবং নাম সংক্ষিপ্ত করে দেব।"
          />
          <div className="flex flex-col gap-3 lg:col-span-5 lg:items-end">
            <Button
              size="lg"
              render={
                <a
                  href={clinicLinks.whatsapp('আসসালামু আলাইকুম। আমি আমার অভিজ্ঞতা শেয়ার করতে চাই।')}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              WhatsApp-এ মতামত পাঠান
            </Button>
            <p className="text-xs text-muted-foreground">
              Google বা Facebook রিভিউ লিংক: <Editable>[যাচাইকৃত লিংক যুক্ত করুন]</Editable>
            </p>
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  )
}
