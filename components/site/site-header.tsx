'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { RiMenu4Line, RiPhoneLine } from 'react-icons/ri'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'
import { Container } from '@/components/site/section'
import { Logo } from '@/components/site/logo'
import { primaryNav, secondaryNav } from '@/lib/navigation'
import { clinic, clinicLinks } from '@/lib/clinic'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur supports-backdrop-filter:bg-background/75">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${clinic.name}: হোম`}>
          <Logo />
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold">{clinic.shortName}</span>
            <span className="label-mono text-[10px] text-muted-foreground">Health Center</span>
          </span>
        </Link>

        <nav aria-label="প্রধান নেভিগেশন" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {primaryNav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'rounded-lg px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground',
                      active && 'bg-muted text-foreground',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="hidden md:inline-flex"
            render={<a href={clinicLinks.tel} />}
          >
            <RiPhoneLine data-icon="inline-start" />
            ফোন করুন
          </Button>
          <Button render={<Link href="/appointment" />}>অ্যাপয়েন্টমেন্ট</Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={<Button variant="ghost" size="icon" className="lg:hidden" aria-label="মেনু খুলুন" />}
            >
              <RiMenu4Line />
            </SheetTrigger>
            <SheetContent side="right" className="w-[88vw] sm:max-w-sm">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <Logo />
                  {clinic.shortName}
                </SheetTitle>
                <SheetDescription>{clinic.tagline}</SheetDescription>
              </SheetHeader>
              <nav aria-label="মোবাইল নেভিগেশন" className="flex flex-col gap-1 px-2">
                {[{ href: '/', label: 'হোম' }, ...primaryNav].map((item) => {
                  const active = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? 'page' : undefined}
                      className={cn(
                        'rounded-lg px-3 py-2.5 text-base transition-colors hover:bg-muted',
                        active && 'bg-muted font-medium',
                      )}
                    >
                      {item.label}
                    </Link>
                  )
                })}
                <Separator className="my-2" />
                {secondaryNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-2 p-4">
                <Button size="lg" render={<Link href="/appointment" onClick={() => setOpen(false)} />}>
                  অ্যাপয়েন্টমেন্ট নিন
                </Button>
                <Button size="lg" variant="outline" render={<a href={clinicLinks.tel} />}>
                  <RiPhoneLine data-icon="inline-start" />
                  {clinic.phone.display}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  )
}
