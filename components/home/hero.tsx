import Link from "next/link";
import {
  RiArrowRightLine,
  RiPhoneFill,
  RiShieldCheckLine,
  RiSparklingFill,
  RiTimeLine,
  RiVerifiedBadgeFill,
} from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/section";
import { ImageFrame } from "@/components/site/image-frame";
import { images } from "@/lib/images";
import { clinic, clinicLinks } from "@/lib/clinic";

const trustMetrics = [
  {
    icon: RiTimeLine,
    label: "প্রতিষ্ঠা ও অভিজ্ঞতা",
    value: "২০১৯ সাল থেকে",
    text: "শিশুদের ডিভাইস খৎনায় ৭+ বছরের ক্লিনিক্যাল অভিজ্ঞতা",
  },
  {
    icon: RiSparklingFill,
    label: "আধুনিক চিকিৎসা",
    value: "ডিভাইস পদ্ধতি",
    text: "স্বল্প রক্তপাত ও সেলাইহীন আধুনিক চিকিৎসা",
  },
  {
    icon: RiShieldCheckLine,
    label: "সার্বক্ষণিক ফলো-আপ",
    value: "২৪/৭ সাপোর্ট",
    text: "বাড়ি ফেরার পরও নিয়মিত ফলো-আপ ও জরুরি পরামর্শ",
  },
];

export function Hero() {
  return (
    <div className="relative overflow-hidden border-b bg-gradient-to-b from-surface/40 via-background to-background">
      {/* Subtle ambient medical glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl"
      />

      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:items-center lg:gap-14 lg:py-24">
        {/* Left Column: Information & Actions */}
        <div className="reveal flex flex-col gap-6 lg:col-span-7 lg:gap-8">
          {/* Availability Badge */}
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-brand/25 bg-brand-soft/80 px-3.5 py-1 text-xs font-medium text-brand-strong shadow-2xs backdrop-blur-xs transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-brand/40 hover:bg-brand-soft sm:text-sm">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-brand" />
            </span>
            <span>২০২৬ সালের অ্যাপয়েন্টমেন্ট গ্রহণ চলছে</span>
          </div>

          {/* Headline - warm, relatable, and affectionate */}
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl lg:leading-[1.18]">
              আদরের সোনামণির খৎনা হোক{" "}
              <span className="text-primary font-bold">
                ব্যথামুক্ত ও পরম যত্নে
              </span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
              ২০১৯ সাল থেকে অভিজ্ঞ চিকিৎসকের তত্ত্বাবধানে আধুনিক ডিভাইস পদ্ধতিতে
              সেলাইহীন ও নিরাপদ খৎনা সেবা। আপনার সন্তানের জন্য আরামদায়ক ও
              ভীতিহীন পরিবেশ।
            </p>
          </div>

          {/* Primary & Secondary Actions */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              size="lg"
              className="group h-11 px-6 font-medium shadow-sm shadow-brand/15 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md hover:shadow-brand/20 active:translate-y-0"
              render={<Link href="/appointment" />}
            >
              অ্যাপয়েন্টমেন্টের অনুরোধ পাঠান
              <RiArrowRightLine
                data-icon="inline-end"
                className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
              />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-11 border-border px-6 font-medium transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-brand/40 hover:bg-surface active:translate-y-0"
              render={<Link href="/procedure" />}
            >
              পদ্ধতি সম্পর্কে জানুন
            </Button>
          </div>

          {/* Streamlined Trust Metrics */}
          <div className="mt-1 grid grid-cols-1 gap-3 border-t pt-5 sm:grid-cols-3 sm:gap-3">
            {trustMetrics.map((item) => (
              <div
                key={item.label}
                className="group flex items-center gap-3 rounded-lg border border-border/70 bg-surface/40 p-3 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand/40 hover:bg-surface hover:shadow-md hover:shadow-brand/5 sm:flex-col sm:items-start sm:gap-1.5"
              >
                <div className="flex items-center gap-1.5">
                  <span className="flex size-5 items-center justify-center rounded-md bg-brand-soft text-primary transition-transform duration-300 ease-out group-hover:scale-110">
                    <item.icon className="size-3" />
                  </span>
                  <span className="label-mono text-[10px] text-muted-foreground">
                    {item.label}
                  </span>
                </div>
                <div>
                  <span className="text-sm font-bold text-foreground transition-colors duration-200 group-hover:text-primary sm:text-base">
                    {item.value}
                  </span>
                  <p className="text-xs text-muted-foreground leading-snug">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Visual Frame & Floating Trust Cards */}
        <div className="reveal relative lg:col-span-5 [animation-delay:150ms]">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Ambient behind image */}
            <div
              aria-hidden
              className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-brand/20 to-teal-500/10 blur-xl opacity-70"
            />

            <ImageFrame
              {...images.hero}
              ratio="4/5"
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              frameClassName="rounded-2xl border-2 border-background/80 shadow-[0_24px_50px_-20px_rgb(17_24_39_/_0.25)] ring-1 ring-border transition-all duration-300 hover:shadow-[0_28px_60px_-20px_rgb(17_24_39_/_0.3)]"
            />

            {/* Top-Right Floating Trust Chip */}
            <div className="absolute -top-3.5 right-4 flex items-center gap-2 rounded-full border border-border bg-background/95 px-3 py-1.5 text-xs font-semibold shadow-md backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md sm:-top-4 sm:right-6">
              <span className="flex size-2 rounded-full bg-emerald-500" />
              <span>শিশু-বান্ধব খেলার জোন অন্তর্ভুক্ত</span>
            </div>

            {/* Bottom Floating Helpline Card */}
            <div className="group absolute -bottom-5 left-3 right-3 flex items-center justify-between gap-3 rounded-xl border border-border bg-background/95 p-3.5 shadow-md backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand/40 hover:shadow-md sm:-bottom-6 sm:left-4 sm:right-auto sm:min-w-[280px]">
              <div className="flex items-center gap-3">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-primary shadow-xs transition-transform duration-300 ease-out group-hover:scale-105">
                  <RiPhoneFill className="size-5" />
                </span>
                <div className="flex flex-col">
                  <span className="label-mono text-[11px] text-muted-foreground">
                    পরামর্শ ও সার্বক্ষণিক হেল্পলাইন
                  </span>
                  <a
                    href={clinicLinks.tel}
                    className="text-sm font-bold text-foreground transition-colors duration-200 group-hover:text-primary sm:text-base"
                  >
                    {clinic.phone.display}
                  </a>
                </div>
              </div>
              <span className="hidden rounded-md bg-brand-soft px-2 py-1 text-[11px] font-medium text-brand-strong transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground sm:inline-block">
                সরাসরি কল
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
