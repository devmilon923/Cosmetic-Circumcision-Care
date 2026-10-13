import type { Metadata } from 'next'
import { RiCheckLine, RiShieldCheckLine, RiVerifiedBadgeFill } from 'react-icons/ri'
import { PageHero } from '@/components/site/page-hero'
import { Container, Section } from '@/components/site/section'
import { CtaBand } from '@/components/site/cta-band'
import { Badge } from '@/components/ui/badge'
import { FaqView } from '@/components/faq/faq-view'
import { faqCategories, faqItems } from '@/lib/content/faq'

export const metadata: Metadata = {
  title: 'সাধারণ প্রশ্নোত্তর: খৎনা নিয়ে অভিভাবকদের জিজ্ঞাসা ও চিকিৎসকের উত্তর',
  description:
    'ডিভাইস কসমেটিক খৎনা, ব্যথা নিয়ন্ত্রণ, নিরাপত্তা, ক্ষত শুকানোর সময়কাল ও অ্যাপয়েন্টমেন্ট সংক্রান্ত যাবতীয় প্রশ্নের নির্ভরযোগ্য চিকিৎসাগত উত্তর।',
}

export default function FaqPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer.join(' ') },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHero
        eyebrow="অভিভাবকদের জিজ্ঞাসা"
        title="খৎনা সম্পর্কিত সাধারণ প্রশ্ন ও চিকিৎসকের সঠিক উত্তর"
        description="ডিভাইস প্রযুক্তি, ব্যথা নিয়ন্ত্রণ, সুস্থতার সময়কাল এবং অ্যাপয়েন্টমেন্ট সম্পর্কিত যাবতীয় তথ্যের স্পষ্ট ও দায়িত্বশীল নির্দেশনা।"
      >
        <div className="flex flex-wrap items-center gap-2.5 pt-2">
          <Badge variant="secondary" className="gap-1.5 py-1 text-xs">
            <RiVerifiedBadgeFill className="size-3.5 text-primary" />
            BMDC নিবন্ধিত চিকিৎসকের উত্তর
          </Badge>
          <Badge variant="secondary" className="gap-1.5 py-1 text-xs">
            <RiCheckLine className="size-3.5 text-primary" />
            কোনো লুকানো খরচ নেই
          </Badge>
          <Badge variant="secondary" className="gap-1.5 py-1 text-xs">
            <RiShieldCheckLine className="size-3.5 text-primary" />
            ২৪/৭ অন-কল পরামর্শ
          </Badge>
        </div>
      </PageHero>

      <Section className="py-14 md:py-20">
        <Container>
          <FaqView items={faqItems} categories={faqCategories} />
        </Container>
      </Section>

      <CtaBand
        title="আরও কোনো প্রশ্ন বা বিশেষ পরামর্শ প্রয়োজন?"
        description="সরাসরি কল বা WhatsApp করে আপনার শিশুর জন্য সুবিধাজনক অ্যাপয়েন্টমেন্ট শিডিউল করুন। আমাদের টিম সব তথ্যে আপনাকে সাহায্য করবে।"
      />
    </>
  )
}
