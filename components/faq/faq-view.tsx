'use client'

import { useMemo, useState } from 'react'
import {
  RiCalendarLine,
  RiCustomerService2Fill,
  RiHeartPulseLine,
  RiPhoneFill,
  RiQuestionLine,
  RiShieldCheckLine,
  RiStethoscopeLine,
  RiWhatsappFill,
} from 'react-icons/ri'
import { FaqAccordion } from '@/components/site/faq-accordion'
import { Button } from '@/components/ui/button'
import { clinicLinks } from '@/lib/clinic'
import type { FaqItem } from '@/lib/content/faq'
import { cn } from '@/lib/utils'

type CategoryId = 'all' | FaqItem['category']

const categoryMeta: Record<
  FaqItem['category'],
  { label: string; icon: React.ComponentType<{ className?: string }> }
> = {
  procedure: {
    label: 'পদ্ধতি ও ডিভাইস',
    icon: RiStethoscopeLine,
  },
  safety: {
    label: 'ব্যথা ও নিরাপত্তা',
    icon: RiShieldCheckLine,
  },
  aftercare: {
    label: 'পরিচর্যা ও সুস্থতা',
    icon: RiHeartPulseLine,
  },
  appointment: {
    label: 'অ্যাপয়েন্টমেন্ট ও খরচ',
    icon: RiCalendarLine,
  },
}

export function FaqView({
  items,
  categories,
}: {
  items: FaqItem[]
  categories: readonly { id: FaqItem['category']; label: string; count: number }[]
}) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all')

  // Filtered items based on active category
  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') return items
    return items.filter((item) => item.category === selectedCategory)
  }, [items, selectedCategory])

  // Count items by category for tabs
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: items.length }
    categories.forEach((cat) => {
      counts[cat.id] = items.filter((i) => i.category === cat.id).length
    })
    return counts
  }, [items, categories])

  return (
    <div className="flex flex-col gap-8 md:gap-10">
      {/* Mobile/Tablet Category Pill Navigation (Horizontal Scrollable) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none lg:hidden">
        <button
          type="button"
          onClick={() => setSelectedCategory('all')}
          className={cn(
            'flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all duration-200 sm:text-sm',
            selectedCategory === 'all'
              ? 'bg-primary text-primary-foreground shadow-xs'
              : 'bg-background text-muted-foreground border border-border/80 hover:bg-muted/70 hover:text-foreground'
          )}
        >
          <span>সকল প্রশ্ন</span>
          <span
            className={cn(
              'rounded-full px-1.5 py-0.2 text-[10px] font-mono',
              selectedCategory === 'all'
                ? 'bg-primary-foreground/20 text-primary-foreground'
                : 'bg-muted text-muted-foreground'
            )}
          >
            {categoryCounts.all}
          </span>
        </button>

        {categories.map((cat) => {
          const Meta = categoryMeta[cat.id]
          const isSelected = selectedCategory === cat.id
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={cn(
                'flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all duration-200 sm:text-sm',
                isSelected
                  ? 'bg-primary text-primary-foreground shadow-xs'
                  : 'bg-background text-muted-foreground border border-border/80 hover:bg-muted/70 hover:text-foreground'
              )}
            >
              {Meta ? <Meta.icon className="size-3.5" /> : null}
              <span>{cat.label}</span>
              <span
                className={cn(
                  'rounded-full px-1.5 py-0.2 text-[10px] font-mono',
                  isSelected
                    ? 'bg-primary-foreground/20 text-primary-foreground'
                    : 'bg-muted text-muted-foreground'
                )}
              >
                {categoryCounts[cat.id]}
              </span>
            </button>
          )
        })}
      </div>

      {/* Main Grid: Left Navigation & Support Card + Right Accordion */}
      <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
        {/* Left Sticky Sidebar */}
        <aside className="flex flex-col gap-6 lg:col-span-4 lg:sticky lg:top-24">
          {/* Desktop Category Navigation Panel */}
          <div className="hidden flex-col gap-2 rounded-xl border border-border/80 bg-background p-4 shadow-2xs lg:flex">
            <span className="label-mono px-3 pt-1 text-[11px] text-muted-foreground">
              ক্যাটাগরি নির্বাচন করুন
            </span>
            <div className="flex flex-col gap-1 pt-1">
              <button
                type="button"
                onClick={() => setSelectedCategory('all')}
                className={cn(
                  'flex items-center justify-between rounded-lg px-3.5 py-2.5 text-sm font-medium transition-all duration-200 text-left',
                  selectedCategory === 'all'
                    ? 'bg-brand-soft text-primary font-semibold shadow-2xs'
                    : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground'
                )}
              >
                <div className="flex items-center gap-2.5">
                  <RiQuestionLine className="size-4" />
                  <span>সকল সাধারণ জিজ্ঞাসা</span>
                </div>
                <span className="font-mono text-xs opacity-75">
                  {categoryCounts.all}
                </span>
              </button>

              {categories.map((cat) => {
                const Meta = categoryMeta[cat.id]
                const isSelected = selectedCategory === cat.id
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={cn(
                      'flex items-center justify-between rounded-lg px-3.5 py-2.5 text-sm font-medium transition-all duration-200 text-left',
                      isSelected
                        ? 'bg-brand-soft text-primary font-semibold shadow-2xs'
                        : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground'
                    )}
                  >
                    <div className="flex items-center gap-2.5">
                      {Meta ? <Meta.icon className="size-4" /> : null}
                      <span>{cat.label}</span>
                    </div>
                    <span className="font-mono text-xs opacity-75">
                      {categoryCounts[cat.id]}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Direct Doctor Support Card */}
          <div className="flex flex-col gap-4 rounded-xl border border-brand/25 bg-brand-soft/40 p-5 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="label-mono text-[11px] font-bold text-primary">
                সরাসরি কাউন্সেলিং
              </span>
              <span className="flex size-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            <div className="flex flex-col gap-1.5">
              <h3 className="text-base font-bold text-foreground">
                মনমতো উত্তর খুঁজে পাচ্ছেন না?
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground text-pretty">
                আপনার শিশুর নির্দিষ্ট বয়স বা শারীরিক অবস্থা নিয়ে কোনো প্রশ্ন থাকলে সরাসরি চিকিৎসকের সাথে কথা বলে নিশ্চিন্ত হোন।
              </p>
            </div>

            <div className="flex flex-col gap-2 pt-1">
              <Button
                size="default"
                className="w-full font-medium shadow-xs"
                render={<a href={clinicLinks.tel} />}
              >
                <RiPhoneFill data-icon="inline-start" className="size-4" />
                সরাসরি কল করুন
              </Button>
              <Button
                variant="outline"
                size="default"
                className="w-full font-medium bg-background"
                render={
                  <a
                    href={clinicLinks.whatsapp('আমার শিশুর খৎনা নিয়ে কিছু জানার ছিল।')}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                <RiWhatsappFill data-icon="inline-start" className="size-4 text-emerald-600" />
                WhatsApp-এ মেসেজ দিন
              </Button>
            </div>

            <div className="border-t border-border/60 pt-3 text-[11px] text-muted-foreground">
              পরামর্শ সময়: সকাল ৯:০০ থেকে রাত ৮:০০
            </div>
          </div>
        </aside>

        {/* Right FAQ List Area */}
        <main className="flex flex-col gap-6 lg:col-span-8">
          {/* Header Info */}
          <div className="flex items-center justify-between border-b border-border/70 pb-3">
            <div className="flex items-center gap-2">
              <span className="label-mono text-xs font-bold text-foreground">
                {selectedCategory === 'all'
                  ? 'সকল সাধারণ প্রশ্নোত্তর'
                  : categoryMeta[selectedCategory].label}
              </span>
            </div>
            <span className="label-mono text-xs text-muted-foreground">
              {filteredItems.length}টি প্রশ্ন
            </span>
          </div>

          {/* Accordion List */}
          <FaqAccordion items={filteredItems} />

          {/* Clinical Disclaimer Note */}
          <div className="flex items-start gap-4 rounded-xl border border-border/80 bg-surface/50 p-5 mt-2">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-primary mt-0.5">
              <RiCustomerService2Fill className="size-4.5" />
            </span>
            <div className="flex flex-col gap-1 text-xs md:text-sm">
              <span className="font-bold text-foreground">
                চিকিৎসকের সরাসরি পরামর্শের বিকল্প নয়
              </span>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                এখানে দেওয়া প্রতিটি তথ্য অভিভাবকদের সাধারণ অবগতির উদ্দেশ্যে প্রস্তুতকৃত। যেকোনো চূড়ান্ত সিদ্ধান্ত গ্রহণের পূর্বে ক্লিনিকে এসে দায়িত্বপ্রাপ্ত চিকিৎসকের শারীরিক মূল্যায়ন গ্রহণ করার পরামর্শ দেওয়া হয়।
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
