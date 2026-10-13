'use client'

import { useState } from 'react'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog'
import { ImageFrame } from '@/components/site/image-frame'
import { galleryCategories, type GalleryCategory, type GalleryItem } from '@/lib/content/gallery'
import { toBn } from '@/lib/bn'
import { cn } from '@/lib/utils'

type Filter = GalleryCategory | 'all'

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [filter, setFilter] = useState<Filter>('all')
  const [active, setActive] = useState<GalleryItem | null>(null)

  const visible = filter === 'all' ? items : items.filter((item) => item.category === filter)

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <ToggleGroup
          value={[filter]}
          onValueChange={(value) => {
            const next = value[0] as Filter | undefined
            if (next) setFilter(next)
          }}
          variant="outline"
          className="flex-wrap"
          aria-label="গ্যালারি বিভাগ"
        >
          {galleryCategories.map((cat) => (
            <ToggleGroupItem key={cat.id} value={cat.id} className="px-3">
              {cat.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
        <p className="label-mono text-muted-foreground" aria-live="polite">
          {toBn(visible.length)} টি ছবি
        </p>
      </div>

      <ul className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {visible.map((item) => (
          <li
            key={item.id}
            className={cn(item.wide && 'col-span-2')}
          >
            <button
              type="button"
              onClick={() => setActive(item)}
              className="group/tile w-full rounded-lg text-left outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              aria-label={`${item.caption}: বড় করে দেখুন`}
            >
              <ImageFrame
                src={item.src}
                alt={item.alt}
                label={galleryCategories.find((c) => c.id === item.category)?.label}
                ratio={item.wide ? '16/9' : item.ratio === '3/2' ? '4/3' : item.ratio}
                caption={item.caption}
                sizes="(min-width: 768px) 33vw, 50vw"
                frameClassName="transition-transform duration-300 group-hover/tile:scale-[1.01]"
              />
            </button>
          </li>
        ))}
      </ul>

      <Dialog open={Boolean(active)} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-4xl p-2 sm:p-3">
          <DialogTitle className="sr-only">{active?.caption}</DialogTitle>
          <DialogDescription className="sr-only">
            {active ? `${active.alt}: পূর্ণাঙ্গ ভিউ` : ''}
          </DialogDescription>
          {active ? (
            <ImageFrame
              src={active.src}
              alt={active.alt}
              label={active.caption}
              ratio="16/9"
              sizes="(min-width: 1024px) 900px, 100vw"
              caption={active.caption}
              className="[&_figcaption]:px-2 [&_figcaption]:pb-1"
            />
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  )
}
