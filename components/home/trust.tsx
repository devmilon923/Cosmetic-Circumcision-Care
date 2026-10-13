import Link from "next/link";
import {
  RiArrowRightLine,
  RiCheckFill,
  RiShieldCheckLine,
  RiSparklingLine,
  RiTimeLine,
  RiVerifiedBadgeFill,
} from "react-icons/ri";
import { Button } from "@/components/ui/button";
import {
  Container,
  Editable,
  Section,
  SectionHeading,
} from "@/components/site/section";
import { ImageFrame } from "@/components/site/image-frame";
import { images } from "@/lib/images";
import { clinic } from "@/lib/clinic";

const pillars = [
  {
    icon: RiTimeLine,
    badge: "অভিজ্ঞতা",
    title: "২০১৯ সাল থেকে ধারাবাহিক সেবা",
    text: "এক বিশেষায়িত পদ্ধতিতে দীর্ঘ ৭+ বছরের ক্লিনিক্যাল অভিজ্ঞতা। প্রতিটি শিশুর স্বতন্ত্র শারীরিক গঠন বুঝে অত্যন্ত সতর্কতার সাথে চিকিৎসা প্রদান করা হয়।",
  },
  {
    icon: RiVerifiedBadgeFill,
    badge: "স্বচ্ছতা",
    title: "বিএমডিসি নিবন্ধিত চিকিৎসক",
    text: "রেজিস্ট্রেশন নম্বর ও চিকিৎসকের শিক্ষাগত সনদ ওয়েবসাইটে উন্মুক্ত, যাতে অভিভাবকরা নিজে সরকারি ডাটাবেজে যাচাই করে শতভাগ নিশ্চিন্ত হতে পারেন।",
  },
  {
    icon: RiShieldCheckLine,
    badge: "হাইজিন",
    title: "১০০% জীবাণুমুক্ত ও সিঙ্গেল-ইউজ",
    text: "প্রতিটি শিশুর জন্য নতুন সিলপ্যাক সিঙ্গেল-ইউজ ডিভাইস, উন্নত অটোক্লেভ স্টেরিলাইজেশন ও শতভাগ জীবাণুমুক্ত পরিবেশ নিশ্চিত করা হয়।",
  },
  {
    icon: RiSparklingLine,
    badge: "মমতা",
    title: "ভীতিহীন শিশুবান্ধব পরিবেশ",
    text: "হাসপাতালের ভীতি দূর করতে খেলনা ও রঙিন বইয়ে সাজানো শিশু বিনোদন জোন, যাতে অপেক্ষার সময়টা শিশুর জন্য আনন্দদায়ক হয়।",
  },
];

export function Trust() {
  return (
    <Section className="py-20 md:py-28">
      <Container className="flex flex-col gap-14">
        {/* Header with CTA action */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            className="lg:col-span-8"
            eyebrow="চিকিৎসার সততা ও নির্ভরযোগ্যতা"
            title="অভিভাবকদের আস্থা ও চিকিৎসার স্বচ্ছতা"
            description="শিশুর নিরাপত্তা, চিকিৎসকের পেশাদারিত্ব এবং প্রতিটি ধাপের স্পষ্ট ব্যাখ্যার মাধ্যমেই আমরা অর্জন করেছি অভিভাবকদের আস্থা।"
          />
          <div className="lg:col-span-4 lg:justify-self-end">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto font-medium"
              render={<Link href="/why-us" />}
            >
              কেন আমাদের বেছে নেবেন
              <RiArrowRightLine data-icon="inline-end" className="size-4" />
            </Button>
          </div>
        </div>

        {/* Pillars Grid & Doctor Showcase */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* 4 Feature Pillars */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="group flex flex-col justify-between gap-4 rounded-xl border border-border/70 bg-background p-6 shadow-2xs transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-brand/50 hover:shadow-md hover:shadow-brand/5"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-brand-soft text-primary shadow-xs transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                      <pillar.icon className="size-5" />
                    </span>
                    <span className="label-mono text-[10px] text-muted-foreground transition-colors duration-200 group-hover:text-foreground">
                      {pillar.badge}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-lg font-bold text-foreground tracking-tight transition-colors duration-200 group-hover:text-primary">
                      {pillar.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                      {pillar.text}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-primary transition-transform duration-300 group-hover:translate-x-0.5">
                  <RiCheckFill className="size-3.5" />
                  <span>ক্লিনিক্যালি নিশ্চিত প্রটোকল</span>
                </div>
              </div>
            ))}
          </div>

          {/* Doctor Credential Spotlight */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            <ImageFrame
              {...images.clinicInterior}
              ratio="3/2"
              sizes="(min-width: 1024px) 40vw, 100vw"
              frameClassName="rounded-xl border shadow-xs transition-all duration-300 hover:shadow-md hover:border-brand/30"
              caption="অভিভাবকদের আরামদায়ক অপেক্ষার জন্য সুসজ্জিত ক্লিনিক লাউঞ্জ"
            />

            <div className="flex flex-col gap-4 rounded-xl border border-border/80 bg-surface/70 p-6 shadow-2xs transition-all duration-300 ease-out hover:border-brand/40 hover:bg-surface hover:shadow-md">
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5">
                    <span className="label-mono text-[11px] text-primary font-bold">
                      দায়িত্বপ্রাপ্ত কনসালট্যান্ট
                    </span>
                    <span className="inline-flex size-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <span className="text-lg font-bold text-foreground">
                    <Editable>{clinic.doctor.name}</Editable>
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {clinic.doctor.registration.body} Reg. No.{" "}
                    <Editable className="font-mono text-foreground font-semibold">
                      {clinic.doctor.registration.number}
                    </Editable>
                  </span>
                </div>

                <Button
                  size="sm"
                  variant="outline"
                  className="shrink-0 bg-background hover:bg-brand-soft hover:text-primary font-medium transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-xs hover:border-brand/40"
                  render={<Link href="/doctor" />}
                >
                  প্রোফাইল
                  <RiArrowRightLine
                    data-icon="inline-end"
                    className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </Button>
              </div>

              <div className="border-t border-border/60 pt-3 text-xs leading-relaxed text-muted-foreground">
                <p>
                  ২০১৯ সাল থেকে শিশুদের ডিভাইস কসমেটিক খৎনায় বিশেষায়িত
                  সেবাদানকারী। প্রতিটি শিশুর সুনির্দিষ্ট শারিরীক স্বাস্থ্য
                  নিশ্চিতের পরই খৎনা পরিচালনা করা হয়।
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
