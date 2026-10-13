import type { Metadata } from 'next'
import Link from 'next/link'
import { RiArrowRightLine, RiVerifiedBadgeFill } from 'react-icons/ri'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Container, Editable, Eyebrow, Section } from '@/components/site/section'
import { ImageFrame } from '@/components/site/image-frame'
import { CtaBand } from '@/components/site/cta-band'
import { images } from '@/lib/images'
import { clinic } from '@/lib/clinic'

export const metadata: Metadata = {
  title: 'ডাক্তার পরিচিতি: যোগ্যতা, অভিজ্ঞতা ও রেজিস্ট্রেশন',
  description:
    'রওজা বেবি কেয়ার হেলথ সেন্টারের দায়িত্বপ্রাপ্ত চিকিৎসকের যাচাইকৃত যোগ্যতা, অভিজ্ঞতা ও পেশাগত রেজিস্ট্রেশন তথ্য।',
}

const principles = [
  {
    title: 'আগে পরীক্ষা, পরে পদ্ধতি',
    text: 'প্রতিটি শিশুকে আলাদাভাবে পরীক্ষা করে তবেই ডিভাইস পদ্ধতি উপযুক্ত কি না সিদ্ধান্ত নেওয়া হয়।',
  },
  {
    title: 'অভিভাবককে বোঝানো',
    text: 'সুবিধা ও ঝুঁকি দুটোই সহজ ভাষায় ব্যাখ্যা করা হয়; প্রশ্ন শেষ না হওয়া পর্যন্ত পরামর্শ শেষ হয় না।',
  },
  {
    title: 'ফলো-আপে নিজে উপস্থিত',
    text: 'সেরে ওঠার অগ্রগতি ডাক্তার নিজে দেখেন এবং পরবর্তী নির্দেশনা দেন।',
  },
]

export default function DoctorPage() {
  const { doctor } = clinic
  return (
    <>
      <Section className="border-b py-14 md:py-20">
        <Container className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <ImageFrame
              {...images.doctor}
              ratio="4/5"
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              frameClassName="shadow-md"
            />
          </div>
          <div
            className="reveal flex flex-col gap-7 lg:col-span-7 lg:pl-6"
            style={{ animationDelay: '150ms' }}
          >
            <Eyebrow>ডাক্তার পরিচিতি</Eyebrow>
            <div className="flex flex-col gap-3">
              <h1 className="text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl lg:text-5xl lg:leading-[1.18]">
                <Editable>{doctor.name}</Editable>
              </h1>
              <p className="text-base font-semibold text-primary sm:text-lg">
                <Editable>{doctor.designation}</Editable>
              </p>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
                {doctor.experienceSummary}
              </p>
            </div>

            <dl className="grid gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-2">
              <div className="flex flex-col gap-2 bg-background p-5">
                <dt className="label-mono text-muted-foreground">যোগ্যতা</dt>
                <dd className="flex flex-col gap-1.5">
                  {doctor.qualifications.map((q) => (
                    <span key={q} className="text-sm font-medium">
                      <Editable>{q}</Editable>
                    </span>
                  ))}
                </dd>
              </div>
              <div className="flex flex-col gap-2 bg-background p-5">
                <dt className="label-mono text-muted-foreground">পেশাগত রেজিস্ট্রেশন</dt>
                <dd className="flex flex-col gap-1.5">
                  <span className="text-sm font-medium">
                    {doctor.registration.body} Reg. No.{' '}
                    <Editable>{doctor.registration.number}</Editable>
                  </span>
                  <Badge variant="secondary" className="w-fit">
                    <RiVerifiedBadgeFill />
                    যাচাইযোগ্য
                  </Badge>
                </dd>
              </div>
              <div className="flex flex-col gap-2 bg-background p-5">
                <dt className="label-mono text-muted-foreground">অভিজ্ঞতা</dt>
                <dd className="text-sm font-medium">ডিভাইস কসমেটিক খৎনা (২০১৯ সাল থেকে)</dd>
              </div>
              <div className="flex flex-col gap-2 bg-background p-5">
                <dt className="label-mono text-muted-foreground">বিশেষত্ব</dt>
                <dd className="text-sm font-medium">শিশুদের ডিভাইস-ভিত্তিক খৎনা ও পরবর্তী পরিচর্যা</dd>
              </div>
            </dl>

            <p className="text-sm text-muted-foreground">
              এই তথ্যসমূহ চিকিৎসকের মূল সনদ ও বিএমডিসি রেজিস্ট্রেশন তথ্যের ভিত্তিতে উপস্থাপিত।
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="surface">
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="flex flex-col gap-4 lg:col-span-4">
            <Eyebrow>কাজের নীতি</Eyebrow>
            <h2 className="display-sm text-balance">প্রতিটি শিশুর ক্ষেত্রে যা মেনে চলা হয়</h2>
          </div>
          <ol className="grid gap-px overflow-hidden rounded-lg border bg-border lg:col-span-8 md:grid-cols-3">
            {principles.map((p, i) => (
              <li key={p.title} className="flex flex-col gap-3 bg-background p-6">
                <span className="label-mono text-primary">০{i + 1}</span>
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty">{p.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section>
        <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">পদ্ধতিটি কীভাবে কাজ করে জানতে চান?</h2>
            <p className="text-muted-foreground">ডিভাইস খৎনার প্রতিটি ধাপ, সুবিধা ও সীমাবদ্ধতা।</p>
          </div>
          <Button variant="outline" render={<Link href="/procedure" />}>
            ডিভাইস খৎনা সম্পর্কে
            <RiArrowRightLine data-icon="inline-end" />
          </Button>
        </Container>
      </Section>

      <CtaBand />
    </>
  )
}
