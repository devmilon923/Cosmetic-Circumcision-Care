import Link from "next/link";
import {
  RiArrowRightLine,
  RiCheckDoubleLine,
  RiHeartPulseLine,
  RiMedicineBottleLine,
  RiShieldCheckLine,
  RiSparklingFill,
  RiTimeLine,
} from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { Container, Section, SectionHeading } from "@/components/site/section";

const procedureSteps = [
  {
    step: "০১",
    phase: "ধাপ ০১ · শুরু",
    title: "পরামর্শ ও প্রাথমিক শারীরিক মূল্যায়ন",
    text: "অভিজ্ঞ চিকিৎসক শিশুকে নিবিড়ভাবে পরীক্ষা করেন, পূর্ববর্তী স্বাস্থ্যের ইতিহাস জানেন এবং ডিভাইস পদ্ধতির জন্য সম্পূর্ণ প্রস্তুত কি না তা নিশ্চিত করেন।",
    tag: "শারীরিক উপযোগিতা যাচাই",
  },
  {
    step: "০২",
    phase: "ধাপ ০২ · প্রস্তুতি",
    title: "জীবাণুমুক্তকরণ ও মৃদু অবশকরণ",
    text: "চিকিৎসা স্থানটি অ্যান্টিসেপটিক দিয়ে জীবাণুমুক্ত করে লোকাল অ্যানেসথেসিয়ার মাধ্যমে অনুভূতিহীন করা হয়, যাতে শিশু কোনো তীব্র ব্যথা না পায়।",
    tag: "ব্যথাহীন অনুভূতি নিশ্চিতকরণ",
  },
  {
    step: "০৩",
    phase: "ধাপ ০৩ · চিকিৎসা",
    title: "ডিভাইস স্থাপন ও নিখুঁত কাট",
    text: "শিশুর সঠিক মাপে নতুন সিলপ্যাকের জীবাণুমুক্ত ডিভাইস ব্যবহার করে সুষমভাবে খৎনা সম্পন্ন করা হয়, যাতে সেলাইয়ের প্রয়োজন হয় না।",
    tag: "১০০% ডিসপোজেবল ডিভাইস",
  },
  {
    step: "০৪",
    phase: "ধাপ ০৪ · রিকভারি",
    title: "পর্যবেক্ষণ ও লিখিত গাইড প্রদান",
    text: "প্রক্রিয়া শেষে শিশুকে বিশ্রাম কক্ষে ৩০ থেকে ৪০ মিনিট পর্যবেক্ষণে রাখা হয়। সবকিছু স্বাভাবিক নিশ্চিত করে প্রেসক্রিপশন ও পরিচর্যার নির্দেশনাসহ ছুটি দেওয়া হয়।",
    tag: "স্থিতিশীলতা ও কেয়ার কিট",
  },
  {
    step: "০৫",
    phase: "ধাপ ০৫ · আরোগ্য",
    title: "ফলো-আপ ও সার্বক্ষণিক হেল্পলাইন",
    text: "কয়েক দিন পর নির্ধারিত ফলো-আপ সাক্ষাতে চিকিৎসক সেরে ওঠার অগ্রগতি দেখেন। যেকোনো সময়ে আমাদের অন-কল ফোন সাপোর্ট সর্বদা খোলা থাকে।",
    tag: "২৪/৭ অন-কল সাপোর্ট",
  },
];

const fastFacts = [
  { icon: RiTimeLine, label: "ক্লিনিকে সময়", value: "১ থেকে ১.৫ ঘণ্টা" },
  {
    icon: RiHeartPulseLine,
    label: "মূল প্রক্রিয়া",
    value: "১৫ থেকে ২০ মিনিট",
  },
  { icon: RiShieldCheckLine, label: "ব্যথা নিয়ন্ত্রণ", value: "লোকাল অবশকরণ" },
  { icon: RiMedicineBottleLine, label: "সেলাই", value: "সাধারণত প্রয়োজন নেই" },
];

export function ProcedureOverview() {
  return (
    <Section tone="surface" className="py-20 md:py-28">
      <Container className="flex flex-col gap-12">
        {/* Centered Heading */}
        <div className="flex flex-col items-center gap-6 text-center">
          <SectionHeading
            align="center"
            eyebrow="ধাপে ধাপে চিকিৎসা প্রক্রিয়া"
            title="পরামর্শ থেকে সুস্থতা: সহজ ও সুশৃঙ্খল ৫টি ধাপ"
            description="ক্লিনিকে আসার পর প্রতিটি ধাপ আগে থেকেই জানা থাকলে চিকিৎসা প্রক্রিয়া সহজ ও স্বস্তিদায়ক হয়।"
          />

          {/* Quick Clinical Highlights Strip */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
            {fastFacts.map((fact) => (
              <div
                key={fact.label}
                className="group flex items-center gap-2 rounded-full border border-border/80 bg-background px-3.5 py-1.5 shadow-2xs text-xs sm:text-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-brand/40 hover:bg-surface/80 hover:shadow-xs"
              >
                <span className="flex size-5 items-center justify-center rounded-full bg-brand-soft text-primary transition-transform duration-300 group-hover:scale-110">
                  <fact.icon className="size-3" />
                </span>
                <span className="text-muted-foreground">{fact.label}:</span>
                <span className="font-semibold text-foreground">
                  {fact.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 6-Card Symmetrical Grid (5 Steps + 1 Action Highlight Card) */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {procedureSteps.map((item) => (
            <div
              key={item.step}
              className="group relative flex flex-col justify-between gap-5 rounded-xl border border-border/70 bg-background p-6 shadow-2xs transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-brand/50 hover:shadow-md hover:shadow-brand/5"
            >
              <div className="flex flex-col gap-3.5">
                {/* Header: Step Number & Phase Pill */}
                <div className="flex items-center justify-between border-b border-border/60 pb-3">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-brand-soft text-sm font-bold text-primary transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                    {item.step}
                  </span>
                  <span className="label-mono text-[10px] text-muted-foreground transition-colors duration-200 group-hover:text-foreground">
                    {item.phase}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-base font-bold text-foreground transition-colors duration-200 group-hover:text-primary sm:text-lg">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground text-pretty sm:text-sm">
                  {item.text}
                </p>
              </div>

              {/* Bottom Feature Tag */}
              <div className="flex items-center gap-1.5 rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors duration-300 group-hover:bg-brand-soft/70">
                <RiCheckDoubleLine className="size-3.5 text-primary shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="truncate">{item.tag}</span>
              </div>
            </div>
          ))}

          {/* 6th Card: Summary & Direct Procedure Link */}
          <div className="group flex flex-col justify-between gap-5 rounded-xl border border-brand/30 bg-gradient-to-br from-brand-soft/70 via-background to-background p-6 shadow-2xs transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-brand/50 hover:shadow-md hover:shadow-brand/10">
            <div className="flex flex-col gap-3.5">
              <div className="flex items-center justify-between border-b border-brand/20 pb-3">
                <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground shadow-2xs transition-transform duration-300 ease-out group-hover:scale-110">
                  <RiSparklingFill className="size-4" />
                </span>
                <span className="label-mono text-[10px] text-brand-strong font-semibold">
                  সম্পূর্ণ বিবরণ
                </span>
              </div>

              <h3 className="text-base font-bold text-foreground transition-colors duration-200 group-hover:text-primary sm:text-lg">
                পদ্ধতি সম্পর্কে আরও বিস্তারিত জানতে চান?
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground text-pretty sm:text-sm">
                ব্যবহৃত মেডিকেল ডিভাইস, অ্যানেসথেসিয়ার ধরন এবং চিকিৎসা-পরবর্তী
                সম্পূর্ণ নিরাপত্তা নির্দেশিকা এক নজরে দেখুন।
              </p>
            </div>

            <Button
              className="w-full font-medium shadow-xs transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md"
              render={<Link href="/procedure" />}
            >
              বিস্তারিত পদ্ধতি ও এফএকিউ
              <RiArrowRightLine
                data-icon="inline-end"
                className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
              />
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
