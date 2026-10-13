import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { RiCheckLine, RiQuestionLine } from 'react-icons/ri'
import type { FaqItem } from '@/lib/content/faq'
import { cn } from '@/lib/utils'

export function FaqAccordion({
  items,
  className,
  defaultOpen,
}: {
  items: FaqItem[]
  className?: string
  defaultOpen?: string[]
}) {
  return (
    <Accordion className={cn('flex flex-col gap-3', className)} defaultValue={defaultOpen}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          value={item.id}
          className="group/item overflow-hidden rounded-xl border border-border/80 bg-background transition-all duration-200 hover:border-brand/40 hover:shadow-2xs not-last:border-b"
        >
          <AccordionTrigger className="flex items-center gap-4 px-5 py-4 text-left text-base font-semibold text-foreground transition-colors hover:no-underline group-hover/item:text-primary md:px-6 md:py-4.5 md:text-lg">
            <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-primary transition-transform duration-200 group-hover/item:scale-105">
              <RiQuestionLine className="size-4" />
            </span>
            <span className="flex-1 tracking-tight text-pretty">{item.question}</span>
          </AccordionTrigger>

          <AccordionContent className="border-t border-border/50 bg-surface/30 px-5 pt-4 pb-5 md:px-6 md:pb-6">
            <div className="flex flex-col gap-3.5">
              {item.highlight ? (
                <div className="inline-flex w-fit items-center gap-1.5 rounded-md bg-brand-soft/70 px-2.5 py-1 text-xs font-semibold text-primary">
                  <RiCheckLine className="size-3.5" />
                  <span>{item.highlight}</span>
                </div>
              ) : null}

              <div className="flex flex-col gap-2.5 text-sm leading-relaxed text-muted-foreground md:text-base">
                {item.answer.map((paragraph, i) => (
                  <p key={i} className="text-pretty">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
