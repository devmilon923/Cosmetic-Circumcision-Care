import type { Metadata } from 'next'
import { RiDirectionLine, RiMapPin2Line } from 'react-icons/ri'
import { Button } from '@/components/ui/button'
import { PageHero } from '@/components/site/page-hero'
import { Container, Editable, Eyebrow, Section } from '@/components/site/section'
import { ContactActions } from '@/components/site/contact-actions'
import { CtaBand } from '@/components/site/cta-band'
import { clinic, clinicLinks } from '@/lib/clinic'

export const metadata: Metadata = {
  title: 'যোগাযোগ ও ঠিকানা',
  description:
    'রওজা বেবি কেয়ার হেলথ সেন্টারের ঠিকানা, ফোন, WhatsApp, খোলার সময় ও Google Maps দিকনির্দেশনা।',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="যোগাযোগ"
        title="যোগাযোগ ও ক্লিনিকের অবস্থান"
        description="যেকোনো তথ্যের জন্য ফোন, WhatsApp অথবা সরাসরি ক্লিনিকে আসতে পারেন। আসার পূর্বে অ্যাপয়েন্টমেন্ট নিশ্চিত করে নিলে অপেক্ষার সময় কমে।"
        aside={<ContactActions className="lg:justify-end" />}
      />

      <Section>
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="flex flex-col gap-8 lg:col-span-5">
            <div className="flex flex-col gap-5">
              <Eyebrow>ঠিকানা</Eyebrow>
              <address className="flex flex-col gap-1 text-lg not-italic">
                <span className="font-semibold">{clinic.name}</span>
                {clinic.address.lines.map((line) =>
                  line.startsWith('[') ? (
                    <Editable key={line} className="w-fit text-base">
                      {line}
                    </Editable>
                  ) : (
                    <span key={line} className="text-base text-muted-foreground">
                      {line}
                    </span>
                  ),
                )}
              </address>
              <Button
                variant="outline"
                className="w-fit"
                render={<a href={clinicLinks.directions} target="_blank" rel="noopener noreferrer" />}
              >
                <RiDirectionLine data-icon="inline-start" />
                দিকনির্দেশনা নিন
              </Button>
            </div>

            <div className="flex flex-col gap-4">
              <Eyebrow>খোলার সময়</Eyebrow>
              <dl className="flex flex-col divide-y border-y">
                {clinic.hours.rows.map((row) => (
                  <div key={row.days} className="flex items-center justify-between gap-4 py-3 text-sm">
                    <dt className="text-muted-foreground">{row.days}</dt>
                    <dd className="font-medium">
                      {clinic.hours.isPlaceholder ? <Editable>{row.time}</Editable> : row.time}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="text-sm text-muted-foreground">{clinic.hours.note}</p>
            </div>

            <dl className="grid gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-2">
              <div className="flex flex-col gap-1 bg-background p-4">
                <dt className="label-mono text-muted-foreground">ফোন</dt>
                <dd className="font-medium">
                  <a href={clinicLinks.tel} className="hover:text-primary">
                    {clinic.phone.isPlaceholder ? (
                      <Editable>{clinic.phone.display}</Editable>
                    ) : (
                      clinic.phone.display
                    )}
                  </a>
                </dd>
              </div>
              <div className="flex flex-col gap-1 bg-background p-4">
                <dt className="label-mono text-muted-foreground">WhatsApp</dt>
                <dd className="font-medium">
                  <a
                    href={clinicLinks.whatsapp()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    {clinic.phone.isPlaceholder ? (
                      <Editable>{clinic.phone.display}</Editable>
                    ) : (
                      clinic.phone.display
                    )}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-7">
            <div className="dot-grid relative flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-lg border bg-surface lg:aspect-auto lg:h-full lg:min-h-[28rem]">
              <span className="flex size-12 items-center justify-center rounded-lg border bg-background text-primary">
                <RiMapPin2Line className="size-5" />
              </span>
              <span className="label-mono text-muted-foreground">Google Maps embed</span>
              <p className="max-w-xs px-6 text-center text-sm text-muted-foreground">
                যাচাইকৃত ঠিকানা পাওয়ার পর এখানে মানচিত্র যুক্ত হবে।
              </p>
              <Button
                className="mt-2"
                render={<a href={clinicLinks.mapSearch} target="_blank" rel="noopener noreferrer" />}
              >
                Google Maps-এ খুলুন
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  )
}
