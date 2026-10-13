import Link from 'next/link'
import {
  RiArrowRightLine,
  RiCustomerService2Fill,
  RiPhoneFill,
  RiWhatsappFill,
} from 'react-icons/ri'
import { Button } from '@/components/ui/button'
import { Container, Section, SectionHeading } from '@/components/site/section'
import { FaqAccordion } from '@/components/site/faq-accordion'
import { faqItems } from '@/lib/content/faq'
import { clinic, clinicLinks, defaultWhatsappMessage } from '@/lib/clinic'

const featuredIds = ['what-is-device-circumcision', 'pain-management', 'healing-time', 'booking']

export function FaqPreview() {
  const items = featuredIds
    .map((id) => faqItems.find((item) => item.id === id))
    .filter((item): item is NonNullable<typeof item> => Boolean(item))

  return (
    <Section tone="surface" className="py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-14">
        {/* Left Column: Heading & Quick Consultation Card */}
        <div className="flex flex-col gap-6 lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
          <div className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="প্রশ্নোত্তর ও স্পষ্ট ধারণা"
              title="অভিভাবকরা সচরাচর যেসব তথ্য জানতে চান"
              description="ব্যথা নিয়ন্ত্রণ, সেরে ওঠার সময় ও ডিভাইসের সুবিধা সম্পর্কে অভিভাবকদের সবচেয়ে সাধারণ প্রশ্নগুলোর উত্তর।"
            />

            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-fit font-medium hover:bg-background transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-xs hover:border-brand/40"
              render={<Link href="/faq" />}
            >
              সকল সাধারণ প্রশ্নোত্তর দেখুন
              <RiArrowRightLine data-icon="inline-end" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Quick Help Box for Hesitant Parents */}
          <div className="group flex flex-col gap-3.5 rounded-xl border border-border/80 bg-background p-6 shadow-2xs transition-all duration-300 ease-out hover:border-brand/40 hover:shadow-md hover:shadow-brand/5">
            <div className="flex items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-primary shadow-xs transition-transform duration-300 ease-out group-hover:scale-110">
                <RiCustomerService2Fill className="size-5" />
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-foreground transition-colors duration-200 group-hover:text-primary">মনে কোনো বিশেষ প্রশ্ন আছে?</span>
                <span className="text-xs text-muted-foreground">সরাসরি কথা বলে সংশয় দূর করুন</span>
              </div>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed">
              সন্তানের বয়স ও স্বাস্থ্য সংক্রান্ত তথ্যের জন্য ক্লিনিকে ফোন বা WhatsApp করতে পারেন। আমাদের টিম আপনাকে সঠিক তথ্য দিয়ে সহায়তা করবে।
            </p>

            <div className="flex flex-col gap-2 pt-1 sm:flex-row">
              <Button
                size="sm"
                className="w-full sm:w-auto font-medium transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-xs"
                render={<a href={clinicLinks.tel} />}
              >
                <RiPhoneFill data-icon="inline-start" className="size-3.5" />
                {clinic.phone.display}
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="w-full sm:w-auto font-medium hover:bg-brand-soft hover:text-primary transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-xs hover:border-brand/40"
                render={
                  <a
                    href={clinicLinks.whatsapp(defaultWhatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                <RiWhatsappFill data-icon="inline-start" className="size-3.5 text-emerald-600" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive FAQ Accordion */}
        <div className="rounded-xl border border-border/80 bg-background p-6 shadow-2xs lg:col-span-7 sm:p-8 transition-all duration-300 hover:border-brand/30 hover:shadow-sm">
          <FaqAccordion items={items} defaultOpen={[featuredIds[0]]} />
        </div>
      </Container>
    </Section>
  )
}

