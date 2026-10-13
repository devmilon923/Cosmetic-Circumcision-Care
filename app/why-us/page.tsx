import type { Metadata } from "next";
import Link from "next/link";
import {
  RiArrowRightLine,
  RiCheckDoubleLine,
  RiCheckLine,
  RiCustomerService2Fill,
  RiFileList3Line,
  RiHeartPulseLine,
  RiPhoneFill,
  RiShieldCheckLine,
  RiSparklingFill,
  RiStethoscopeLine,
  RiTimeLine,
  RiUserHeartLine,
  RiVerifiedBadgeFill,
} from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/site/page-hero";
import {
  Container,
  Editable,
  Eyebrow,
  Section,
  SectionHeading,
} from "@/components/site/section";
import { ImageFrame } from "@/components/site/image-frame";
import { CtaBand } from "@/components/site/cta-band";
import { images } from "@/lib/images";
import { clinic, clinicLinks } from "@/lib/clinic";

export const metadata: Metadata = {
  title: "কেন আমরা: ২০১৯ সাল থেকে অভিজ্ঞতা, স্বচ্ছতা ও নিরাপত্তা",
  description:
    "রওজা বেবি কেয়ার হেলথ সেন্টার কেন বেছে নেবেন: ২০১৯ সাল থেকে শিশুদের ডিভাইস খৎনার অভিজ্ঞতা, বিএমডিসি নিবন্ধিত চিকিৎসক, শতভাগ জীবাণুমুক্ত পরিবেশ ও পরিবারকেন্দ্রিক আন্তরিক সেবা।",
};

const trustStats = [
  {
    icon: RiTimeLine,
    value: "২০১৯ সাল থেকে",
    label: "ক্লিনিক্যাল অভিজ্ঞতা",
    description: "শিশুদের ডিভাইস কসমেটিক খৎনায় দীর্ঘদিনের ধারাবাহিক চর্চা",
  },
  {
    icon: RiShieldCheckLine,
    value: "১০০% ডিসপোজেবল",
    label: "সিঙ্গেল-ইউজ ডিভাইস",
    description: "প্রতিটি শিশুর জন্য সম্পূর্ণ নতুন সিলপ্যাক মেডিকেল ডিভাইস",
  },
  {
    icon: RiVerifiedBadgeFill,
    value: "BMDC নিবন্ধিত",
    label: "দক্ষ চিকিৎসক",
    description: "সরকারি ডাটাবেজে যাচাইযোগ্য রেজিস্ট্রেশন ও সরাসরি তত্ত্বাবধান",
  },
  {
    icon: RiHeartPulseLine,
    value: "২৪/৭ সাপোর্ট",
    label: "অন-কল ফলো-আপ",
    description: "বাড়ি ফেরার পরও প্রয়োজনীয় পরামর্শ ও নিয়মিত পর্যবেক্ষণ",
  },
];

const corePillars = [
  {
    icon: RiSparklingFill,
    tag: "ডিভাইস প্রযুক্তি",
    title: "নিয়ন্ত্রিত সুষম কাট ও সেলাইহীন স্বস্তি",
    description:
      "আন্তর্জাতিক মানসম্মত মেডিকেল ডিভাইসের সাহায্যে শিশুর সঠিক মাপে খৎনা সম্পন্ন করা হয়। এতে রক্তপাত অত্যন্ত কম হয় এবং বেশিরভাগ ক্ষেত্রে কোনো সেলাইয়ের প্রয়োজন পড়ে না।",
    highlight: "সুন্দর কসমেটিক ফিনিশিং ও দ্রুত সুস্থতা",
  },
  {
    icon: RiShieldCheckLine,
    tag: "হাইজিন স্ট্যান্ডার্ড",
    title: "নতুন সিলপ্যাক ডিভাইস ও কঠোর জীবাণুমুক্তকরণ",
    description:
      "কোনো ডিভাইসের পুনর্ব্যবহার নেই। প্রতিটি শিশুর জন্য নতুন সিলপ্যাক ডিভাইস, মেডিকেল অটোক্লেভ স্টেরিলাইজেশন এবং নিরাপদ বর্জ্য নিষ্কাশন প্রটোকল কঠোরভাবে মানা হয়।",
    highlight: "সংক্রমণমুক্ত নিরাপদ পরিবেশ",
  },
  {
    icon: RiUserHeartLine,
    tag: "শিশুবান্ধব পরিবেশ",
    title: "ভীতিমুক্ত রঙিন প্লে-জোন ও শান্ত আবহ",
    description:
      "হাসপাতালের গম্ভীর পরিবেশ ও ইনজেকশনের ভয় কাটাতে আমাদের রয়েছে খেলনা ও রঙিন বইয়ে সাজানো বিশেষ শিশু বিনোদন জোন। অপেক্ষার সময়টা শিশুর জন্য চাপমুক্ত ও আনন্দময় থাকে।",
    highlight: "শিশুর মানসিক স্বস্তি ও স্বাভাবিক আচরণ",
  },
  {
    icon: RiStethoscopeLine,
    tag: "চিকিৎসায় সততা",
    title: "বস্তুনিষ্ঠ তথ্য ও খোলামেলা পরামর্শ",
    description:
      "কোনো অবাস্তব দাবি নয়; শিশুর শারীরিক গঠন ও পূর্ববর্তী স্বাস্থ্যের ইতিহাস নিবিড়ভাবে মূল্যায়ন করে চিকিৎসার প্রতিটি ধাপের সুবিধা ও স্বাভাবিক পর্যবেক্ষণ অভিভাবকদের বুঝিয়ে দেওয়া হয়।",
    highlight: "অভিভাবকের শতভাগ স্পষ্টতা ও সম্মতি",
  },
];

const hygieneStandards = [
  {
    title: "সিলপ্যাক সিঙ্গেল-ইউজ ডিভাইস",
    text: "প্রতিটি শিশুর জন্য নতুন ডিভাইস প্যাকেট থেকে খোলা হয় এবং ব্যবহারের পর সঠিকভাবে নষ্ট করা হয়।",
  },
  {
    title: "মেডিকেল অটোক্লেভ স্টেরিলাইজেশন",
    text: "চিকিৎসায় ব্যবহৃত প্রতিটি ধাতব সহায়ক সরঞ্জাম উচ্চ চাপে ও তাপে সম্পূর্ণ জীবাণুমুক্ত করা হয়।",
  },
  {
    title: "ডিসপোজেবল সার্জিক্যাল সামগ্রী",
    text: "ক্রস-ইনফেকশনের ঝুঁকি প্রতিরোধে শতভাগ ডিসপোজেবল ড্রেপ, গ্লাভস ও ড্রেসিং উপাদান ব্যবহৃত হয়।",
  },
  {
    title: "নিয়মিত স্যানিটাইজড কক্ষ",
    text: "প্রতিটি চিকিৎসা সম্পন্ন হওয়ার পর পুরো প্রসিডিউর রুম মেডিকেল প্রটোকল অনুযায়ী স্যানিটাইজ করা হয়।",
  },
  {
    title: "নিরাপদ মেডিকেল বর্জ্য নিষ্কাশন",
    text: "স্বাস্থ্য অধিদপ্তরের নির্দেশিকা মেনে ক্লিনিক্যাল বর্জ্য সুরক্ষিতভাবে ব্যবস্থাপনা করা হয়।",
  },
  {
    title: "অভিভাবকের উপস্থিতির সুযোগ",
    text: "চিকিৎসকের পরামর্শ অনুযায়ী প্রক্রিয়া চলাকালীন অভিভাবক পাশে থেকে শিশুকে মানসিক ভরসা দিতে পারেন।",
  },
];

const parentalCareJourney = [
  {
    step: "০১",
    icon: RiCustomerService2Fill,
    title: "পরামর্শ ও খোলামেলা আলোচনা",
    text: "মনের প্রতিটি প্রশ্নের সন্তোষজনক উত্তর পাওয়া পর্যন্ত কোনো সিদ্ধান্ত চাপিয়ে দেওয়া হয় না।",
  },
  {
    step: "০২",
    icon: RiUserHeartLine,
    title: "ভীতিহীন শান্ত প্রস্তুতি",
    text: "প্লে-জোনে শিশুর স্বাভাবিক মনস্তাত্ত্বিক স্বস্তি নিশ্চিত করে তবেই চিকিৎসা কক্ষে নেওয়া হয়।",
  },
  {
    step: "০৩",
    icon: RiFileList3Line,
    title: "লিখিত হোম-কেয়ার গাইড",
    text: "বাড়ি ফেরার সময় ক্ষতের যত্ন, ওষুধের সঠিক সময় ও স্বাভাবিক লক্ষণাবলির লিখিত গাইড দেওয়া হয়।",
  },
  {
    step: "০৪",
    icon: RiHeartPulseLine,
    title: "সার্বক্ষণিক ফলো-আপ সহায়তা",
    text: "নির্ধারিত দিনে চিকিৎসক নিজে অগ্রগতি পরীক্ষা করেন এবং যেকোনো প্রশ্নে অন-কল সাপোর্ট খোলা থাকে।",
  },
];

export default function WhyUsPage() {
  return (
    <>
      <PageHero
        eyebrow="কেন রওজা বেবি কেয়ার"
        title="ক্লিনিক্যাল অভিজ্ঞতা, সুরক্ষা ও মানবিক যত্ন"
        description="২০১৯ সাল থেকে শিশুদের আধুনিক ডিভাইস কসমেটিক খৎনায় নিয়োজিত। কোনো অতিরঞ্জিত আশ্বাস নয়; নিরাপদ পদ্ধতি, শতভাগ জীবাণুমুক্ত পরিবেশ ও প্রতিটি পরিবারের প্রতি আন্তরিক দায়িত্ববোধই আমাদের মূল শক্তি।"
        aside={
          <div className="flex flex-col gap-4 rounded-2xl border border-border/80 bg-surface/80 p-6 shadow-xs backdrop-blur-xs">
            <div className="flex items-center gap-2">
              <span className="flex size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="label-mono text-xs font-bold text-foreground">
                ক্লিনিক্যাল স্ট্যান্ডার্ডস
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
              প্রতিটি শিশুর জন্য সম্পূর্ণ আলাদা সময়, সর্বোচ্চ হাইজিন প্রটোকল ও
              নিরবচ্ছিন্ন ফলো-আপ সেবা।
            </p>
            <div className="pt-1">
              <Button
                size="lg"
                className="w-full font-medium"
                render={<Link href="/appointment" />}
              >
                অ্যাপয়েন্টমেন্টের অনুরোধ পাঠান
                <RiArrowRightLine data-icon="inline-end" />
              </Button>
            </div>
          </div>
        }
      />

      {/* Trust Stats Bar */}
      <section className="border-b bg-surface/50 py-10">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustStats.map((stat) => (
              <div
                key={stat.label}
                className="group flex flex-col gap-2 rounded-xl border border-border/70 bg-background p-5 shadow-2xs transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand/40 hover:shadow-md hover:shadow-brand/5"
              >
                <div className="flex items-center gap-2.5">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-brand-soft text-primary transition-transform duration-300 group-hover:scale-110">
                    <stat.icon className="size-4.5" />
                  </span>
                  <span className="label-mono text-[11px] text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-lg font-bold text-foreground tracking-tight transition-colors duration-200 group-hover:text-primary">
                    {stat.value}
                  </span>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Section 1: 4 Core Pillars of Clinical Excellence */}
      <Section className="py-20 md:py-28">
        <Container className="flex flex-col gap-14">
          <SectionHeading
            eyebrow="আমাদের চার মূল স্তম্ভ"
            title="যে কারণে অভিভাবকরা নিশ্চিন্তে আমাদের বেছে নেন"
            description="শিশুর শারীরিক নিরাপত্তা, সঠিক চিকিৎসাগত মান ও অভিভাবকদের মানসিক স্বস্তিই আমাদের প্রতিটি সেবার ভিত্তি।"
          />

          <div className="grid gap-6 md:grid-cols-2">
            {corePillars.map((pillar) => (
              <div
                key={pillar.title}
                className="group relative flex flex-col justify-between gap-6 rounded-xl border border-border/80 bg-background p-7 shadow-2xs transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-brand/50 hover:shadow-md hover:shadow-brand/5 md:p-8"
              >
                <div className="flex flex-col gap-5">
                  <div className="flex items-center justify-between border-b border-border/60 pb-4">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-brand-soft text-primary shadow-xs transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                      <pillar.icon className="size-5" />
                    </span>
                    <span className="label-mono text-[11px] text-muted-foreground transition-colors duration-200 group-hover:text-foreground">
                      {pillar.tag}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2.5">
                    <h3 className="text-xl font-bold tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary">
                      {pillar.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground text-pretty sm:text-base">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-lg bg-surface/70 px-3.5 py-2 text-xs font-semibold text-foreground/90 transition-colors duration-300 group-hover:bg-brand-soft/80">
                  <RiCheckLine className="size-4 shrink-0 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <span>{pillar.highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Section 2: Verified Clinical Leadership */}
      <Section tone="surface" className="py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="flex flex-col gap-6 lg:col-span-6">
            <Eyebrow>যাচাইকৃত দক্ষতা ও নেতৃত্ব</Eyebrow>
            <h2 className="display-md text-balance">
              যিনি চিকিৎসা দেবেন, তাঁর পেশাগত পরিচয় উন্মুক্ত
            </h2>
            <p className="text-muted-foreground text-pretty sm:text-lg">
              সন্তানের চিকিৎসা যার তত্ত্বাবধানে হচ্ছে, তাঁর সনদ ও অভিজ্ঞতা যাচাই
              করা প্রতিটি অভিভাবকের দায়িত্ব। চিকিৎসকের বিএমডিসি রেজিস্ট্রেশন
              নম্বর ও শিক্ষাগত প্রোফাইল আমরা প্রকাশ্যে রাখি, যাতে সরকারি
              ডাটাবেজে আপনি নিজে যাচাই করে শতভাগ নিশ্চিন্ত হতে পারেন।
            </p>

            <div className="flex flex-col gap-4 rounded-xl border border-border/80 bg-background p-6 shadow-xs">
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5">
                    <span className="label-mono text-[11px] text-primary font-bold">
                      দায়িত্বপ্রাপ্ত কনসালট্যান্ট
                    </span>
                    <span className="inline-flex size-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <span className="text-xl font-bold text-foreground">
                    <Editable>{clinic.doctor.name}</Editable>
                  </span>
                  <span className="text-sm text-muted-foreground">
                    <Editable>{clinic.doctor.designation}</Editable>
                  </span>
                </div>

                <Badge
                  variant="secondary"
                  className="gap-1 shrink-0 font-mono text-xs"
                >
                  <RiVerifiedBadgeFill className="text-primary" />
                  যাচাইযোগ্য
                </Badge>
              </div>

              <dl className="grid gap-3 border-t pt-4 text-sm sm:grid-cols-2">
                <div className="flex flex-col gap-1">
                  <dt className="label-mono text-muted-foreground">
                    রেজিস্ট্রেশন নম্বর
                  </dt>
                  <dd className="font-mono font-bold text-foreground">
                    {clinic.doctor.registration.body} No.{" "}
                    <Editable>{clinic.doctor.registration.number}</Editable>
                  </dd>
                </div>
                <div className="flex flex-col gap-1">
                  <dt className="label-mono text-muted-foreground">
                    ক্লিনিক্যাল বিশেষত্ব
                  </dt>
                  <dd className="font-medium text-foreground">
                    ডিভাইস কসমেটিক খৎনা
                  </dd>
                </div>
              </dl>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="font-medium"
                render={<Link href="/doctor" />}
              >
                ডাক্তারের পূর্ণাঙ্গ প্রোফাইল ও সনদ
                <RiArrowRightLine data-icon="inline-end" className="size-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-medium"
                render={<a href={clinicLinks.tel} />}
              >
                <RiPhoneFill data-icon="inline-start" className="size-4" />
                সরাসরি পরামর্শ নিন
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 lg:pl-6">
            <ImageFrame
              {...images.doctor}
              ratio="4/5"
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              frameClassName="rounded-2xl border-2 border-background/80 shadow-md ring-1 ring-border"
            />
          </div>
        </Container>
      </Section>

      {/* Section 3: Hygiene & Infection Control Standards */}
      <Section className="py-20 md:py-28">
        <Container className="flex flex-col gap-14">
          <SectionHeading
            eyebrow="পরিচ্ছন্নতা ও সংক্রমণ নিয়ন্ত্রণ"
            title="যে হাইজিন নিয়মগুলোতে আমরা শতভাগ আপসহীন"
            description="ক্ষুদ্রতম অবহেলাও যেন কোনো অস্বস্তির কারণ না হয়, সেজন্য প্রতিটি চিকিৎসায় কঠোর স্টেরিলাইজেশন প্রটোকল অনুসরণ করা হয়।"
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {hygieneStandards.map((item) => (
              <div
                key={item.title}
                className="group flex flex-col justify-between gap-4 rounded-xl border border-border/80 bg-background p-6 shadow-2xs transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand/40 hover:shadow-md hover:shadow-brand/5"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-primary transition-transform duration-300 group-hover:scale-110">
                      <RiCheckDoubleLine className="size-4" />
                    </span>
                    <h3 className="text-base font-bold text-foreground transition-colors duration-200 group-hover:text-primary">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs leading-relaxed text-muted-foreground text-pretty sm:text-sm">
                    {item.text}
                  </p>
                </div>

                <div className="border-t border-border/50 pt-2 text-[11px] font-semibold text-primary">
                  ক্লিনিক্যালি মানসম্মত
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Section 4: Parental Support Journey */}
      <Section tone="surface" className="py-20 md:py-28">
        <Container className="flex flex-col gap-14">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <SectionHeading
              className="lg:col-span-8"
              eyebrow="অভিভাবক সহায়তা ও ফলো-আপ"
              title="সিদ্ধান্তের প্রতিটি পদক্ষেপে আমরা আপনার পাশে আছি"
              description="ক্লিনিকে আসার মুহূর্ত থেকে শুরু করে বাড়ি ফেরা এবং সম্পূর্ণ সুস্থ হওয়া পর্যন্ত প্রতিটি ধাপে আমাদের টিম সার্বক্ষণিক দিকনির্দেশনা প্রদান করে।"
            />
            <div className="lg:col-span-4 lg:justify-self-end">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto font-medium"
                render={<Link href="/faq" />}
              >
                সাধারণ প্রশ্নোত্তর দেখুন
                <RiArrowRightLine data-icon="inline-end" className="size-4" />
              </Button>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {parentalCareJourney.map((item) => (
              <div
                key={item.title}
                className="group flex flex-col justify-between gap-4 rounded-xl border border-border/80 bg-background p-6 shadow-2xs transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-md hover:shadow-brand/5"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between border-b border-border/60 pb-3">
                    <span className="flex size-9 items-center justify-center rounded-lg bg-brand-soft text-sm font-bold text-primary transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                      {item.step}
                    </span>
                    <item.icon className="size-5 text-muted-foreground transition-colors duration-200 group-hover:text-primary" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="text-base font-bold text-foreground transition-colors duration-200 group-hover:text-primary sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-muted-foreground text-pretty sm:text-sm">
                      {item.text}
                    </p>
                  </div>
                </div>

                <div className="label-mono text-[10px] text-primary font-medium">
                  সার্বক্ষণিক সমন্বয়
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand
        title="সন্তানের নিরাপদ খৎনায় অভিজ্ঞ চিকিৎসকের সাথে কথা বলুন"
        description="অ্যাপয়েন্টমেন্টের অনুরোধ পাঠান অথবা যেকোনো তথ্যের জন্য সরাসরি কল বা WhatsApp করুন। সুবিধাজনক তারিখ ও সময় ফোনে নিশ্চিত করা হবে।"
      />
    </>
  );
}
