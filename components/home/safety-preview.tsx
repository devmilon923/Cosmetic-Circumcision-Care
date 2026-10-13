import Link from "next/link";
import {
  RiArrowRightLine,
  RiCheckLine,
  RiHeartPulseLine,
  RiPhoneFill,
  RiShieldCheckLine,
} from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { Container, Section, SectionHeading } from "@/components/site/section";
import { clinic, clinicLinks } from "@/lib/clinic";

const careChecklist = [
  "ডাক্তারের দেওয়া লিখিত নির্দেশনা ও প্রেসক্রিপশন হাতের কাছে রাখুন এবং সঠিক নিয়মে অনুসরণ করুন।",
  "ক্ষত স্পর্শ করা বা পরিচর্যার পূর্বে সাবান ও পানি দিয়ে হাত অন্তত ২০ সেকেন্ড জীবাণুমুক্ত করে নিন।",
  "ব্যথানাশক ওষুধ চিকিৎসকের নির্দেশিত সময়ে দিন, শিশু অস্বস্তি বোধ করার আগেই।",
  "শিশুকে আরামদায়ক, ঢিলেঢালা সুতির পোশাক পরান; ডায়াপার যেন ক্ষতের ওপর সরাসরি চাপ না ফেলে।",
  "খৎনার পর প্রথম প্রস্রাব কখন হলো তা লক্ষ্য রাখুন এবং শিশুকে পর্যাপ্ত পরিমাণে তরল বা বুকের দুধ দিন।",
];

const routineObservations = [
  {
    title: "স্বাভাবিক প্রস্রাব পর্যবেক্ষণ",
    text: "খৎনার পর প্রথম কয়েক ঘণ্টার মধ্যে প্রস্রাবের স্বাভাবিকতা খেয়াল রাখুন এবং শিশুকে তরল বা বুকের দুধ দিন।",
  },
  {
    title: "ক্ষতের স্বাভাবিক পরিবর্তন",
    text: "প্রথম কয়েক দিন হালকা ফোলা বা লালচে আভা সেরে ওঠার স্বাভাবিক অংশ। অগ্রগতি বুঝতে আমাদের পরামর্শ নিন।",
  },
  {
    title: "শারীরিক আরাম ও তাপমাত্রা",
    text: "শিশুকে আরামদায়ক ও পরিচ্ছন্ন পরিবেশে রাখুন; কোনো অস্বস্তি দেখা দিলে ডাক্তারের পরামর্শমাফিক ওষুধ দিন।",
  },
  {
    title: "পরিচর্যা ও ডায়াপার ব্যবহার",
    text: "ক্ষতস্থানটি যথাসম্ভব পরিষ্কার ও শুকনো রাখুন এবং শক্ত ডায়াপার না পরিয়ে ঢিলেঢালা পোশাক পরান।",
  },
];

export function SafetyPreview() {
  return (
    <Section tone="surface" className="py-20 md:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="পরিচর্যা ও আরোগ্য প্রক্রিয়া"
          title="দ্রুত সুস্থতার জন্য সঠিক পরিচর্যা ও পরামর্শ"
          description="বাড়ি ফেরার পর শিশুর দ্রুত সুস্থতা নিশ্চিত করতে প্রতিটি অভিভাবককে বিস্তারিত নিয়মাবলি দেওয়া হয় এবং আমাদের অন-কল টিম পাশে থাকে।"
        />

        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* Left Card: Routine Home-Care Dos */}
          <div className="group flex flex-col justify-between gap-6 rounded-xl border border-border/80 bg-background p-7 shadow-2xs transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand/40 hover:shadow-md hover:shadow-brand/5 lg:col-span-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-border/60 pb-4">
                <div className="flex items-center gap-2">
                  <span className="flex size-7 items-center justify-center rounded-md bg-brand-soft text-primary transition-transform duration-300 group-hover:scale-110">
                    <RiShieldCheckLine className="size-4" />
                  </span>
                  <h3 className="text-lg font-bold text-foreground">
                    বাড়িতে যা মেনে চলবেন
                  </h3>
                </div>
                <span className="label-mono text-[11px] text-primary">
                  হোম-কেয়ার গাইড
                </span>
              </div>

              <ul className="flex flex-col gap-4">
                {careChecklist.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm leading-relaxed text-foreground/90 transition-transform duration-200 hover:translate-x-1 sm:text-base"
                  >
                    <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-primary shadow-2xs transition-transform duration-200 hover:scale-110">
                      <RiCheckLine className="size-3.5" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-fit font-medium hover:bg-brand-soft hover:text-primary transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-xs hover:border-brand/40"
                render={<Link href="/faq" />}
              >
                পরিচর্যা বিষয়ক সাধারণ প্রশ্নোত্তর
                <RiArrowRightLine
                  data-icon="inline-end"
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Button>
            </div>
          </div>

          {/* Right Card: Neutral & Reassuring Follow-up Support */}
          <div className="group flex flex-col gap-5 rounded-xl border border-border/80 bg-background p-7 shadow-2xs transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand/40 hover:shadow-md hover:shadow-brand/5 lg:col-span-6 md:p-8">
            {/* Calm Supportive Header */}
            <div className="flex flex-col gap-3 rounded-lg border border-border/70 bg-surface/70 p-4 transition-colors duration-300 group-hover:border-brand/30">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-foreground font-bold">
                  <span className="flex size-7 items-center justify-center rounded-md bg-brand-soft text-primary transition-transform duration-300 group-hover:scale-110">
                    <RiHeartPulseLine className="size-4" />
                  </span>
                  <span className="text-sm font-bold tracking-tight">
                    সেরে ওঠার পর্যবেক্ষণ ও সার্বক্ষণিক পরামর্শ
                  </span>
                </div>
                <span className="label-mono text-[10px] text-primary font-bold">
                  ২৪/৭ সাপোর্ট
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                বাড়ি ফেরার পর যেকোনো স্বাভাবিক জিজ্ঞাসা বা নিশ্চিত হতে আমাদের
                চিকিৎসকের সাথে সরাসরি যোগাযোগ করুন।
              </p>
              <div className="pt-1">
                <a
                  href={clinicLinks.tel}
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-3.5 py-1.5 text-xs font-semibold text-foreground shadow-2xs transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-brand/50 hover:text-primary hover:shadow-xs active:translate-y-0"
                >
                  <RiPhoneFill className="size-3.5 text-primary" />
                  পরামর্শে ফোন করুন · {clinic.phone.display}
                </a>
              </div>
            </div>

            {/* Observation Points Grid */}
            <div className="grid gap-3 sm:grid-cols-2">
              {routineObservations.map((item) => (
                <div
                  key={item.title}
                  className="group/obs flex flex-col gap-1.5 rounded-lg border border-border/70 bg-surface/40 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand/40 hover:bg-surface hover:shadow-xs"
                >
                  <span className="text-sm font-bold text-foreground flex items-center gap-1.5 transition-colors duration-200 group-hover/obs:text-primary">
                    <span className="size-1.5 rounded-full bg-primary transition-transform duration-200 group-hover/obs:scale-150" />
                    {item.title}
                  </span>
                  <span className="text-xs leading-relaxed text-muted-foreground text-pretty">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <p className="border-t border-border/60 pt-3 text-xs leading-relaxed text-muted-foreground">
              ✓ শিশুর সম্পূর্ণ সুস্থ হওয়া পর্যন্ত আমাদের বিশেষজ্ঞ টিম নিয়মিত
              ফলো-আপ ও দিকনির্দেশনা প্রদান করে।
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
