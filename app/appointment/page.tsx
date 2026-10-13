import type { Metadata } from 'next'
import Link from 'next/link'
import { RiPhoneFill, RiTimeLine, RiWhatsappFill } from 'react-icons/ri'
import { Button } from '@/components/ui/button'
import { AppointmentForm } from '@/components/site/appointment-form'
import { Container, Editable, Eyebrow, Section } from '@/components/site/section'
import { clinic, clinicLinks, defaultWhatsappMessage } from '@/lib/clinic'

export const metadata: Metadata = {
  title: 'অ্যাপয়েন্টমেন্টের অনুরোধ',
  description:
    'শিশুর ডিভাইস কসমেটিক খৎনার জন্য অ্যাপয়েন্টমেন্টের অনুরোধ পাঠান। ক্লিনিক থেকে ফোন করে তারিখ ও সময় নিশ্চিত করা হবে।',
}

const nextSteps = [
  { title: 'অনুরোধ পাঠান', text: 'ফর্ম পূরণ করে WhatsApp-এ পাঠান, অথবা সরাসরি ফোন করুন।' },
  { title: 'ক্লিনিক থেকে ফোন', text: 'আমরা ফোন করে তারিখ ও সময় নিশ্চিত করব এবং প্রস্তুতির নির্দেশনা দেব।' },
  { title: 'পরামর্শ ও পরীক্ষা', text: 'নির্ধারিত দিনে ডাক্তার শিশুকে পরীক্ষা করে সব প্রশ্নের উত্তর দেবেন।' },
  { title: 'সিদ্ধান্ত আপনার', text: 'পরামর্শের পর আপনি চাইলে একই দিনে বা পরে পদ্ধতি করাতে পারেন।' },
]

export default function AppointmentPage() {
  return (
    <>
      <Section tone="surface" className="py-12 md:py-16">
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="reveal flex flex-col gap-8 lg:col-span-5">
            <div className="flex flex-col gap-3">
              <Eyebrow>অ্যাপয়েন্টমেন্ট</Eyebrow>
              <h1 className="text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl lg:text-5xl lg:leading-[1.18]">
                অ্যাপয়েন্টমেন্টের অনুরোধ পাঠান
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
                অনলাইনে তথ্য পাঠানোর পর আমাদের ক্লিনিক থেকে কল করে সুবিধাজনক তারিখ ও সময় ফোনে নিশ্চিত করা হবে।
              </p>
            </div>

            <ol className="flex flex-col divide-y border-y">
              {nextSteps.map((step, i) => (
                <li key={step.title} className="grid grid-cols-[2.5rem_1fr] gap-3 py-4">
                  <span className="label-mono pt-1 text-primary">০{i + 1}</span>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-semibold">{step.title}</span>
                    <span className="text-sm text-muted-foreground text-pretty">{step.text}</span>
                  </div>
                </li>
              ))}
            </ol>

            <div className="flex flex-col gap-4 rounded-lg border bg-background p-5">
              <span className="label-mono text-muted-foreground">ফর্ম ছাড়াই যোগাযোগ</span>
              <div className="flex flex-col gap-2">
                <Button variant="outline" className="justify-start" render={<a href={clinicLinks.tel} />}>
                  <RiPhoneFill data-icon="inline-start" />
                  {clinic.phone.display}
                </Button>
                <Button
                  variant="outline"
                  className="justify-start"
                  render={
                    <a
                      href={clinicLinks.whatsapp(defaultWhatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                >
                  <RiWhatsappFill data-icon="inline-start" />
                  WhatsApp-এ বার্তা
                </Button>
              </div>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <RiTimeLine className="mt-0.5 size-4 shrink-0" />
                <span>
                  {clinic.hours.rows[0].days}: <Editable>{clinic.hours.rows[0].time}</Editable>
                </span>
              </div>
            </div>

            <p className="text-xs text-muted-foreground text-pretty">
              আপনার তথ্য শুধুমাত্র অ্যাপয়েন্টমেন্ট ব্যবস্থাপনার জন্য ব্যবহার করা হয়; তৃতীয় পক্ষের সাথে
              শেয়ার করা হয় না।{' '}
              <Link href="/privacy" className="text-primary underline underline-offset-4">
                গোপনীয়তা নীতি
              </Link>
            </p>
          </div>

          <div className="reveal lg:col-span-7" style={{ animationDelay: '150ms' }}>
            <AppointmentForm />
          </div>
        </Container>
      </Section>
    </>
  )
}
