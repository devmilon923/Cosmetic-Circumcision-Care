import type { Metadata } from 'next'
import Link from 'next/link'
import { RiArrowRightLine, RiCheckLine, RiCloseLine, RiInformationLine } from 'react-icons/ri'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { PageHero } from '@/components/site/page-hero'
import { Container, Editable, Eyebrow, Section, SectionHeading } from '@/components/site/section'
import { StepList } from '@/components/site/step-list'
import { ImageFrame } from '@/components/site/image-frame'
import { CtaBand } from '@/components/site/cta-band'
import { benefits, limitations, procedureSteps, suitabilityChecklist } from '@/lib/content/procedure'
import { images } from '@/lib/images'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'ডিভাইস কসমেটিক খৎনা: পদ্ধতি, সুবিধা ও সতর্কতা',
  description:
    'ডিভাইস দিয়ে কসমেটিক খৎনা কীভাবে করা হয়, ব্যথা নিয়ন্ত্রণ, সম্ভাব্য সুবিধা ও সুস্থতার সময়কাল সম্পর্কে বিস্তারিত তথ্য।',
}

export default function ProcedurePage() {
  return (
    <>
      <PageHero
        eyebrow="ডিভাইস কসমেটিক খৎনা"
        title="ডিভাইস খৎনা পদ্ধতি: প্রস্তুতি থেকে সুস্থতা"
        description="ডিভাইস-ভিত্তিক খৎনার প্রতিটি ধাপের বিস্তারিত তথ্য: কীভাবে সম্পন্ন হয়, কী সুবিধা আশা করা যায় এবং ব্যথা নিয়ন্ত্রণে আমাদের ব্যবস্থাপনা।"
        aside={
          <ImageFrame
            {...images.equipment}
            ratio="4/3"
            sizes="(min-width: 1024px) 40vw, 100vw"
            caption="চিকিৎসায় ব্যবহৃত জীবাণুমুক্ত ডিভাইস ও মেডিকেল সরঞ্জাম"
          />
        }
      >
        <div className="flex flex-wrap items-center gap-2.5 pt-2">
          <Badge variant="secondary" className="gap-1.5 py-1 text-xs">
            <RiCheckLine className="size-3.5 text-primary" />
            ১০০% ডিসপোজেবল ডিভাইস
          </Badge>
          <Badge variant="secondary" className="gap-1.5 py-1 text-xs">
            <RiCheckLine className="size-3.5 text-primary" />
            রক্তপাতহীন ও সেলাইমুক্ত
          </Badge>
          <Badge variant="secondary" className="gap-1.5 py-1 text-xs">
            <RiCheckLine className="size-3.5 text-primary" />
            BMDC নিবন্ধিত ডাক্তার
          </Badge>
        </div>
      </PageHero>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="flex flex-col gap-5 lg:col-span-5">
            <Eyebrow>কী ও কীভাবে</Eyebrow>
            <h2 className="display-md text-balance">ডিভাইস কীভাবে কাজ করে</h2>
            <p className="text-muted-foreground text-pretty md:text-lg">
              কসমেটিক খৎনায় অগ্রভাগের চামড়া (foreskin) পরিমাপ করে সমানভাবে অপসারণ করা হয়। ডিভাইস
              পদ্ধতিতে শিশুর মাপ অনুযায়ী একটি জীবাণুমুক্ত, একবার ব্যবহারযোগ্য ডিভাইস নির্বাচন করে
              চামড়ার ওপর স্থাপন করা হয়। ডিভাইসটি চামড়াকে নির্দিষ্ট অবস্থানে সুরক্ষিত রাখে। এর ফলে
              কাটার প্রক্রিয়া নিয়ন্ত্রিত হয়, রক্তপাত সাধারণত কম থাকে এবং বেশিরভাগ ক্ষেত্রে
              সেলাইয়ের প্রয়োজন পড়ে না।
            </p>
          </div>
          <div className="flex flex-col gap-6 lg:col-span-7">
            <div className="flex flex-col gap-4 rounded-xl border border-border/80 bg-background p-6 shadow-xs md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl font-bold tracking-tight">NERO Narrow Super ডিভাইস</h3>
                <Badge variant="secondary" className="font-mono text-xs">
                  মেডিকেল ডিভাইস
                </Badge>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                আমাদের সেন্টারে ব্যবহৃত আন্তর্জাতিক মানসম্মত মেডিকেল ডিভাইস। শিশুর নিখুঁত পরিমাপ, দ্রুত সুস্থতা ও সংক্রমণ প্রতিরোধে এটি অত্যন্ত কার্যকর।
              </p>
              <dl className="grid gap-3 border-t pt-4 text-sm sm:grid-cols-2">
                <div className="flex flex-col gap-1">
                  <dt className="label-mono text-muted-foreground">কার্যপ্রণালী</dt>
                  <dd className="font-medium text-foreground">
                    সঠিক মাপে রক্তনালী সুরক্ষিত রেখে সুষম কাটিং
                  </dd>
                </div>
                <div className="flex flex-col gap-1">
                  <dt className="label-mono text-muted-foreground">উপলব্ধ মাপ</dt>
                  <dd className="font-medium text-foreground">
                    নবজাতক থেকে শুরু করে বিভিন্ন বয়সের মাপ
                  </dd>
                </div>
                <div className="flex flex-col gap-1">
                  <dt className="label-mono text-muted-foreground">ব্যবহার মানদণ্ড</dt>
                  <dd className="font-medium text-foreground">একবার ব্যবহারযোগ্য, সিলপ্যাক জীবাণুমুক্ত</dd>
                </div>
                <div className="flex flex-col gap-1">
                  <dt className="label-mono text-muted-foreground">উপাদান ও গুণমান</dt>
                  <dd className="font-medium text-foreground">
                    সার্টিফাইড মেডিকেল গ্রেড পলিমার
                  </dd>
                </div>
              </dl>
            </div>
            <Alert className="rounded-xl border border-border/80 bg-surface/50">
              <RiInformationLine className="size-4 text-primary" />
              <AlertTitle className="font-bold">স্বচ্ছতার নীতি</AlertTitle>
              <AlertDescription className="text-sm leading-relaxed text-muted-foreground">
                আমরা ডিভাইস সম্পর্কে কোনো অবাস্তব তথ্য প্রচার করি না। সরাসরি পরামর্শের সময় দায়িত্বপ্রাপ্ত চিকিৎসক ডিভাইসটি অভিভাবকদের সামনে প্রদর্শন করেন এবং কার্যপ্রণালী বিস্তারিতভাবে বুঝিয়ে দেন।
              </AlertDescription>
            </Alert>
          </div>
        </Container>
      </Section>

      <Section tone="surface">
        <Container className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="ধাপে ধাপে"
            title="ক্লিনিকে আসা থেকে ফলো-আপ পর্যন্ত"
            description="সাধারণত কয়েক ঘণ্টার মধ্যেই আপনি শিশুকে নিয়ে বাড়ি ফিরতে পারেন।"
          />
          <StepList steps={procedureSteps} className="rounded-xl border border-border/80 bg-background px-6 shadow-2xs md:px-8 [&>li]:py-7" />
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="flex flex-col gap-6">
            <Eyebrow>সম্ভাব্য সুবিধা</Eyebrow>
            <h2 className="display-sm text-balance">যা আশা করা যায়</h2>
            <ul className="flex flex-col divide-y border-y border-border/70">
              {benefits.map((b) => (
                <li key={b.title} className="flex gap-4 py-5">
                  <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-soft text-primary">
                    <RiCheckLine className="size-3.5" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-foreground">{b.title}</span>
                    <span className="text-sm text-muted-foreground text-pretty">{b.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <Eyebrow className="text-muted-foreground">সীমাবদ্ধতা ও সতর্কতা</Eyebrow>
            <h2 className="display-sm text-balance">যা আমরা খোলামেলা জানাই</h2>
            <ul className="flex flex-col divide-y border-y border-border/70">
              {limitations.map((item) => (
                <li key={item} className="flex gap-4 py-5">
                  <span className="mt-1.5 size-2 shrink-0 rounded-full border-2 border-foreground/40" />
                  <span className="text-sm text-pretty text-muted-foreground md:text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section tone="surface">
        <Container className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="flex flex-col gap-5 lg:col-span-5">
            <Eyebrow>ব্যথা নিয়ন্ত্রণ</Eyebrow>
            <h2 className="display-md text-balance">ব্যথা ব্যবস্থাপনার পদক্ষেপ</h2>
            <p className="text-muted-foreground text-pretty md:text-lg">
              প্রক্রিয়ার আগে লোকাল অ্যানেসথেসিয়া প্রয়োগ করা হয়, যাতে খৎনার সময় শিশু ব্যথা অনুভব
              না করে। অবশভাব কার্যকর হয়েছে নিশ্চিত হয়ে তবেই ডাক্তার শুরু করেন।
            </p>
            <p className="text-muted-foreground text-pretty md:text-lg">
              অবশভাব কেটে যাওয়ার পর কিছুটা অস্বস্তি হওয়া স্বাভাবিক। এজন্য বয়স ও ওজন অনুযায়ী
              চিকিৎসকের প্রেসক্রিপশন মোতাবেক ব্যথানাশক ওষুধ দেওয়া হয়, যাতে শিশুর কষ্ট ন্যূনতম থাকে।
            </p>
          </div>
          <div className="flex flex-col gap-6 lg:col-span-7">
            <h3 className="text-xl font-bold tracking-tight text-foreground">কার জন্য উপযুক্ত: প্রাথমিক ধারণা</h3>
            <ul className="grid gap-px overflow-hidden rounded-xl border border-border/80 bg-border sm:grid-cols-2">
              {suitabilityChecklist.map((row) => (
                <li key={row.text} className="flex items-start gap-3 bg-background p-4 text-sm">
                  <span
                    className={cn(
                      'mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full',
                      row.ok ? 'bg-brand-soft text-primary' : 'bg-muted text-muted-foreground',
                    )}
                  >
                    {row.ok ? <RiCheckLine className="size-3.5" /> : <RiCloseLine className="size-3.5" />}
                  </span>
                  <span className="text-pretty text-foreground/90">{row.text}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground">
              এটি সাধারণ নির্দেশিকা মাত্র। চূড়ান্ত সিদ্ধান্ত সরাসরি শারীরিক মূল্যায়নের পর ডাক্তার নিশ্চিত করবেন।
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button render={<Link href="/faq" />}>
                সাধারণ প্রশ্নোত্তর
                <RiArrowRightLine data-icon="inline-end" />
              </Button>
              <Button variant="outline" render={<Link href="/appointment" />}>
                অ্যাপয়েন্টমেন্টের অনুরোধ
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand title="সন্তানের সুবিধাজনক সময়ে পরামর্শের জন্য যোগাযোগ করুন" />
    </>
  )
}
