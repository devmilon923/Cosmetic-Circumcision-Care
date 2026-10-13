import Link from 'next/link'
import { RiMapPin2Line, RiPhoneLine, RiWhatsappFill } from 'react-icons/ri'
import { Container, Editable } from '@/components/site/section'
import { Logo } from '@/components/site/logo'
import { footerColumns } from '@/lib/navigation'
import { clinic, clinicLinks, defaultWhatsappMessage } from '@/lib/clinic'
import { toBn } from '@/lib/bn'

export function SiteFooter() {
  const year = toBn(new Date().getFullYear())

  return (
    <footer className="border-t bg-surface">
      <Container className="grid gap-12 py-16 lg:grid-cols-12">
        <div className="flex flex-col gap-5 lg:col-span-5">
          <Link href="/" className="flex items-center gap-2.5">
            <Logo />
            <span className="font-semibold">{clinic.name}</span>
          </Link>
          <p className="max-w-sm text-sm text-muted-foreground">
            ২০১৯ সাল থেকে শিশুদের জন্য ডিভাইস-ভিত্তিক কসমেটিক খৎনা সেবা। সঠিক তথ্য, জীবাণুমুক্ত পরিবেশ ও সার্বক্ষণিক ফলো-আপের মাধ্যমে আমরা শিশুর সর্বোচ্চ যত্ন নিশ্চিত করি।
          </p>
          <address className="flex flex-col gap-3 text-sm not-italic">
            <span className="flex items-start gap-2.5">
              <RiMapPin2Line className="mt-1 size-4 shrink-0 text-primary" />
              <span className="flex flex-col">
                {clinic.address.lines.map((line) =>
                  clinic.address.isPlaceholder && line.startsWith('[') ? (
                    <Editable key={line} className="w-fit">
                      {line}
                    </Editable>
                  ) : (
                    <span key={line}>{line}</span>
                  ),
                )}
              </span>
            </span>
            <a href={clinicLinks.tel} className="flex items-center gap-2.5 hover:text-primary">
              <RiPhoneLine className="size-4 shrink-0 text-primary" />
              {clinic.phone.isPlaceholder ? (
                <Editable>{clinic.phone.display}</Editable>
              ) : (
                clinic.phone.display
              )}
            </a>
            <a
              href={clinicLinks.whatsapp(defaultWhatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 hover:text-primary"
            >
              <RiWhatsappFill className="size-4 shrink-0 text-primary" />
              WhatsApp-এ বার্তা পাঠান
            </a>
          </address>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
          {footerColumns.map((col) => (
            <nav key={col.title} aria-label={col.title} className="flex flex-col gap-3">
              <p className="label-mono text-muted-foreground">{col.title}</p>
              <ul className="flex flex-col gap-2">
                {col.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </Container>

      <div className="border-t">
        <Container className="flex flex-col gap-3 py-5 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {clinic.name}। সর্বস্বত্ব সংরক্ষিত।
          </p>
          <p className="max-w-xl text-pretty">
            এই ওয়েবসাইটের চিকিৎসা-সংক্রান্ত তথ্য শুধুমাত্র সচেতনতার জন্য; এটি সরাসরি চিকিৎসকের
            পরামর্শের বিকল্প নয়। চূড়ান্ত সিদ্ধান্তের আগে চিকিৎসকের সাথে কথা বলুন।
          </p>
        </Container>
      </div>
    </footer>
  )
}
