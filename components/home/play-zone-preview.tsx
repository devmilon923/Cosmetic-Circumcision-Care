import Link from 'next/link'
import {
  RiArrowRightLine,
  RiBearSmileLine,
  RiGamepadLine,
  RiHeart3Line,
} from 'react-icons/ri'
import { Button } from '@/components/ui/button'
import { Container, Section, SectionHeading } from '@/components/site/section'
import { ImageFrame } from '@/components/site/image-frame'
import { images } from '@/lib/images'

const playFeatures = [
  {
    icon: RiGamepadLine,
    title: 'রঙিন খেলনা ও রাইডস',
    text: 'অপেক্ষার সময় শিশুর মনোযোগ অন্যদিকে ব্যস্ত রাখতে নানা ধরনের নিরাপদ ও আকর্ষণীয় খেলনা।',
  },
  {
    icon: RiBearSmileLine,
    title: 'ভীতিমুক্ত রঙিন সাজসজ্জা',
    text: 'হাসপাতালের চেনা গম্ভীর পরিবেশ ভেঙে শিশুকে ঘরের মতোই আনন্দময় ও নিরাপদ অনুভূতি দেওয়া।',
  },
  {
    icon: RiHeart3Line,
    title: 'অভিভাবকদের স্বস্তি',
    text: 'শিশুকে কোলে নিয়ে বা পাশে বসে চাপমুক্তভাবে অপেক্ষা করার জন্য পরিচ্ছন্ন ও শান্ত লাউঞ্জ।',
  },
]

export function PlayZonePreview() {
  return (
    <Section className="py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        {/* Left Visual Area: Curated Image Collage */}
        <div className="relative grid grid-cols-2 gap-4 lg:col-span-7">
          <div className="relative col-span-2">
            <ImageFrame
              {...images.playZone1}
              ratio="16/9"
              sizes="(min-width: 1024px) 55vw, 100vw"
              frameClassName="rounded-xl border shadow-xs transition-all duration-300 hover:shadow-md hover:border-brand/30"
              caption="শিশুদের খেলার জন্য আলাদা সুরক্ষিত ও পরিচ্ছন্ন জোন"
            />
            {/* Playful Floating Badge */}
            <div className="absolute top-3 left-3 flex items-center gap-2 rounded-full border border-border/80 bg-background/90 px-3 py-1 text-xs font-semibold shadow-xs backdrop-blur-xs transition-all duration-300 hover:scale-105">
              <span className="flex size-2 rounded-full bg-amber-500 animate-pulse" />
              <span>চাইল্ড-ফ্রেন্ডলি প্লে স্পেস</span>
            </div>
          </div>

          <ImageFrame
            {...images.playZone2}
            ratio="4/3"
            sizes="(min-width: 1024px) 27vw, 50vw"
            frameClassName="rounded-xl border shadow-xs transition-all duration-300 hover:shadow-md hover:border-brand/30"
          />
          <ImageFrame
            {...images.playZone3}
            ratio="4/3"
            sizes="(min-width: 1024px) 27vw, 50vw"
            frameClassName="rounded-xl border shadow-xs transition-all duration-300 hover:shadow-md hover:border-brand/30"
          />
        </div>

        {/* Right Content Area */}
        <div className="flex flex-col gap-8 lg:col-span-5">
          <SectionHeading
            eyebrow="শিশু-বান্ধব চিকিৎসা পরিবেশ"
            title="ভীতিহীন পরিবেশে শিশুর হাসিমুখের অভিজ্ঞতা"
            description="ক্লিনিকের পরিবেশ শিশুর মনে যাতে ভীতি তৈরি না করে, সেজন্য রয়েছে রঙিন খেলনা ও বইয়ে সাজানো প্লে-জোন। খেলার ছলেই শিশু শান্ত ও চাপমুক্ত থাকে।"
          />

          {/* Child-friendly feature points */}
          <div className="flex flex-col gap-4">
            {playFeatures.map((feature) => (
              <div key={feature.title} className="group flex items-start gap-3.5 transition-all duration-300 ease-out hover:translate-x-1">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-primary shadow-2xs transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="size-4.5" />
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-foreground transition-colors duration-200 group-hover:text-primary sm:text-base">
                    {feature.title}
                  </span>
                  <span className="text-xs text-muted-foreground leading-relaxed sm:text-sm">
                    {feature.text}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-1">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-fit font-medium hover:bg-brand-soft hover:text-primary transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-xs hover:border-brand/40"
              render={<Link href="/play-zone" />}
            >
              প্লে-জোনের সুবিধা ও ছবি দেখুন
              <RiArrowRightLine data-icon="inline-end" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}

