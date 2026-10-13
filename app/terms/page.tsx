import type { Metadata } from 'next'
import { PageHero } from '@/components/site/page-hero'
import { Container, Editable, Section } from '@/components/site/section'
import { clinic } from '@/lib/clinic'

export const metadata: Metadata = {
  title: 'ব্যবহারের শর্তাবলী',
  description: `${clinic.name}-এর ওয়েবসাইট ব্যবহারের শর্তাবলী, চিকিৎসাসেবার সাধারণ নিয়ম এবং আইনি তথ্য।`,
}

const sections = [
  {
    title: 'শর্তাবলীতে সম্মতি',
    body: [
      'এই ওয়েবসাইটটি ব্যবহারের মাধ্যমে আপনি এই ব্যবহারের শর্তাবলী ও নীতিমালার প্রতি আপনার সম্মতি জ্ঞাপন করছেন। যদি আপনি এই শর্তাবলীতে সম্মত না হন, তবে ওয়েবসাইট ব্যবহার থেকে বিরত থাকার অনুরোধ করা হলো।',
    ],
  },
  {
    title: 'চিকিৎসা পরামর্শ সংক্রান্ত সাধারণ অস্বীকৃতি (Disclaimer)',
    body: [
      'এই ওয়েবসাইটে প্রকাশিত সকল তথ্য শুধুমাত্র সাধারণ সচেতনতা ও শিক্ষামূলক উদ্দেশ্যে উপস্থাপিত।',
      'ওয়েবসাইটের কোনো তথ্য সরাসরি চিকিৎসকের পরামর্শ, রোগ নির্ণয় বা চিকিৎসার বিকল্প নয়। যেকোনো চিকিৎসা সিদ্ধান্তের পূর্বে চিকিৎসকের সাথে সরাসরি পরামর্শ করা বাধ্যতামূলক।',
    ],
  },
  {
    title: 'অ্যাপয়েন্টমেন্টের অনুরোধ ও চূড়ান্তকরণ',
    body: [
      'ওয়েবসাইটের ফর্ম বা WhatsApp-এর মাধ্যমে প্রেরিত অ্যাপয়েন্টমেন্ট শুধুমাত্র একটি অনুরোধ হিসেবে গণ্য হবে।',
      'ক্লিনিকের দায়িত্বপ্রাপ্ত কর্মী বা চিকিৎসকের মাধ্যমে ফোন কল করে নিশ্চিত করার পরই অ্যাপয়েন্টমেন্ট চূড়ান্ত হবে।',
    ],
  },
  {
    title: 'মেধা সম্পদ ও উপাদান ব্যবহার',
    body: [
      'ওয়েবসাইটের সকল লেখা, ডিজাইন, লোগো এবং উপাদানসমূহ রওজা বেবি কেয়ার হেলথ সেন্টারের নিজস্ব বা অনুমোদিত সম্পদ।',
      'অনুমোদন ব্যতিরেকে কোনো উপাদান বাণিজ্যিক উদ্দেশ্যে অনুলিপি, পুনরুৎপাদন বা বিতরণ করা সম্পূর্ণ নিষিদ্ধ।',
    ],
  },
  {
    title: 'শর্তাবলীর পরিবর্তন ও হালনাগাদ',
    body: [
      'ক্লিনিক কর্তৃপক্ষ যেকোনো সময় পূর্ব নোটিশ ব্যতিরেকে এই শর্তাবলী হালনাগাদ বা পরিবর্তন করার অধিকার সংরক্ষণ করে। পরিবর্তিত শর্তাবলী ওয়েবসাইটে প্রকাশের সময় থেকেই কার্যকর হবে।',
    ],
  },
  {
    title: 'যোগাযোগ ও প্রশ্ন',
    body: [
      'ব্যবহারের শর্তাবলী সম্পর্কিত যেকোনো প্রশ্নের জন্য আমাদের যোগাযোগের পাতা অথবা ক্লিনিকের ফোন নম্বরে যোগাযোগ করতে পারেন।',
    ],
  },
]

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="শর্তাবলী"
        title="ওয়েবসাইট ব্যবহারের শর্তাবলী"
        description={`${clinic.name}-এর ডিজিটাল প্ল্যাটফর্ম ব্যবহারের ক্ষেত্রে এই নিয়ম ও নির্দেশনাগুলো প্রযোজ্য। আপনার এবং ক্লিনিকের স্বার্থ সুরক্ষার জন্য এগুলো পাঠ করার অনুরোধ করা হচ্ছে।`}
      />
      <Section>
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="text-sm text-muted-foreground">
              সর্বশেষ হালনাগাদ: <Editable>[তারিখ]</Editable>
            </p>
          </div>
          <div className="flex flex-col divide-y border-y lg:col-span-9">
            {sections.map((s, i) => (
              <section key={s.title} className="grid gap-3 py-8 sm:grid-cols-[4rem_1fr] sm:gap-6">
                <span className="label-mono pt-1.5 text-primary">০{i + 1}</span>
                <div className="flex flex-col gap-3">
                  <h2 className="text-xl font-semibold">{s.title}</h2>
                  {s.body.map((p) => (
                    <p key={p} className="text-muted-foreground text-pretty">
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
