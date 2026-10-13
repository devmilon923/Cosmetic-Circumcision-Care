import type { Metadata } from 'next'
import { PageHero } from '@/components/site/page-hero'
import { Container, Section, SectionHeading } from '@/components/site/section'
import { ImageFrame } from '@/components/site/image-frame'
import { CtaBand } from '@/components/site/cta-band'
import { images } from '@/lib/images'

export const metadata: Metadata = {
  title: 'শিশু বিনোদন জোন: শিশুবান্ধব ক্লিনিক পরিবেশ',
  description:
    'ক্লিনিকে অপেক্ষার সময়ে শিশুর আনন্দ ও স্বস্তির জন্য খেলনা, বই ও বসার আলাদা ব্যবস্থা নিয়ে আমাদের প্লে-জোন।',
}

const features = [
  {
    title: 'খেলনা ও গল্পের বই',
    text: 'বয়স অনুযায়ী নিরাপদ খেলনা ও রঙিন গল্পের বই, যাতে অপেক্ষার সময়ে শিশুর মন প্রফুল্ল থাকে।',
  },
  {
    title: 'অভিভাবকের বসার জায়গা',
    text: 'শিশুর পাশে বসে স্বস্তিতে অপেক্ষা করার ব্যবস্থা; প্রয়োজনে শিশুকে খাওয়ানোর ব্যক্তিগত জায়গা।',
  },
  {
    title: 'পরিচ্ছন্ন ও নিয়মিত জীবাণুমুক্ত',
    text: 'খেলনা ও বসার জায়গা নিয়মিত পরিষ্কার করা হয়, যাতে অসুস্থ শিশুর জন্যও নিরাপদ থাকে।',
  },
  {
    title: 'শান্ত পরিবেশ',
    text: 'চিকিৎসা কক্ষ থেকে সম্পূর্ণ আলাদা লাউঞ্জ, যাতে কোনো ধরনের ভয় বা উদ্বেগ ছাড়াই শান্ত থাকা যায়।',
  },
]

export default function PlayZonePage() {
  return (
    <>
      <PageHero
        eyebrow="শিশু বিনোদন জোন"
        title="শিশুর জন্য আনন্দময় ও চাপমুক্ত পরিবেশ"
        description="খৎনার দিনটা শিশুর জন্য যতটা সম্ভব সহজ করতে আমরা অপেক্ষার স্থানটিকে রঙিন ও বন্ধুত্বপূর্ণভাবে সাজিয়েছি।"
      />

      <Section>
        <Container className="grid gap-4 md:grid-cols-12">
          <ImageFrame
            {...images.playZone1}
            ratio="16/9"
            className="md:col-span-8"
            sizes="(min-width: 768px) 66vw, 100vw"
            caption="মূল খেলার জায়গা"
          />
          <ImageFrame
            {...images.playZone2}
            ratio="3/4"
            className="md:col-span-4"
            sizes="(min-width: 768px) 33vw, 100vw"
            caption="খেলনা ও বইয়ের কোণ"
          />
          <ImageFrame
            {...images.playZone3}
            ratio="1/1"
            className="md:col-span-4"
            sizes="(min-width: 768px) 33vw, 100vw"
            caption="অভিভাবকদের বসার জায়গা"
          />
          <div className="flex flex-col justify-center gap-6 rounded-lg border bg-surface p-6 md:col-span-8 md:p-10">
            <SectionHeading
              eyebrow="পরিবেশ"
              title="যা আছে, কেন আছে"
              description="আমাদের লক্ষ্য একটাই: চিকিৎসা প্রক্রিয়ার আগে ও পরে শিশু যেন শান্ত থাকে এবং অভিভাবক নিশ্চিন্ত মনে অপেক্ষা করতে পারেন।"
            />
          </div>
        </Container>
      </Section>

      <Section tone="surface">
        <Container>
          <ul className="grid divide-y border-y md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4">
            {features.map((f, i) => (
              <li key={f.title} className="flex flex-col gap-3 py-7 md:px-6 md:first:pl-0 md:last:pr-0 md:nth-[2]:border-r-0 lg:nth-[2]:border-r">
                <span className="label-mono text-primary">০{i + 1}</span>
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty">{f.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBand title="শিশুবান্ধব পরিবেশে সেবার জন্য অ্যাপয়েন্টমেন্ট নিন" />
    </>
  )
}
