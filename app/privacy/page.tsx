import type { Metadata } from 'next'
import { PageHero } from '@/components/site/page-hero'
import { Container, Editable, Section } from '@/components/site/section'
import { clinic } from '@/lib/clinic'

export const metadata: Metadata = {
  title: 'গোপনীয়তা নীতি',
  description: 'অ্যাপয়েন্টমেন্ট ও যোগাযোগের মাধ্যমে সংগৃহীত তথ্য কীভাবে ব্যবহার ও সুরক্ষিত রাখা হয়।',
}

const sections = [
  {
    title: 'কী তথ্য সংগ্রহ করা হয়',
    body: [
      'অ্যাপয়েন্টমেন্টের অনুরোধে আপনি যে তথ্য দেন: অভিভাবকের নাম, ফোন নম্বর, শিশুর বয়সসীমা, পছন্দের তারিখ ও সময়, এবং ঐচ্ছিক বার্তা।',
      'আমরা শিশুর পূর্ণ নাম, ছবি বা পরিচয় প্রকাশকারী কোনো তথ্য ওয়েবসাইটের মাধ্যমে সংগ্রহ করি না।',
    ],
  },
  {
    title: 'কেন ব্যবহার করা হয়',
    body: [
      'শুধুমাত্র অ্যাপয়েন্টমেন্ট নিশ্চিত করা, প্রস্তুতির নির্দেশনা জানানো এবং পরবর্তী ফলো-আপের জন্য আপনার সাথে যোগাযোগ করতে।',
      'বিপণন বা অন্য কোনো উদ্দেশ্যে আপনার তথ্য ব্যবহার করা হয় না।',
    ],
  },
  {
    title: 'কার সাথে শেয়ার করা হয়',
    body: [
      'ক্লিনিকের দায়িত্বপ্রাপ্ত কর্মী ও চিকিৎসক ছাড়া কারও সাথে নয়। তৃতীয় পক্ষের কাছে বিক্রি বা হস্তান্তর করা হয় না।',
      'WhatsApp-এর মাধ্যমে পাঠানো বার্তা WhatsApp-এর নিজস্ব গোপনীয়তা নীতির আওতায় পড়ে।',
    ],
  },
  {
    title: 'কতদিন রাখা হয়',
    body: [
      'চিকিৎসা-সংক্রান্ত রেকর্ড ক্লিনিকের নিয়ম অনুযায়ী সংরক্ষিত হয়। অ্যাপয়েন্টমেন্ট না হলে অনুরোধের তথ্য যুক্তিসঙ্গত সময়ের মধ্যে মুছে ফেলা হয়।',
    ],
  },
  {
    title: 'আপনার অধিকার',
    body: [
      'আপনি যেকোনো সময় আপনার তথ্য দেখতে, সংশোধন করতে বা মুছে ফেলার অনুরোধ করতে পারেন। এজন্য ক্লিনিকের ফোন নম্বরে যোগাযোগ করুন।',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="গোপনীয়তা নীতি"
        title="আপনার তথ্য, আপনার নিয়ন্ত্রণে"
        description={`${clinic.name} অভিভাবক ও শিশুর তথ্যের গোপনীয়তাকে চিকিৎসা নৈতিকতার অংশ হিসেবে দেখে। এই নীতি সংক্ষেপে ব্যাখ্যা করে আমরা কী সংগ্রহ করি, কেন করি এবং কীভাবে সুরক্ষিত রাখি।`}
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
