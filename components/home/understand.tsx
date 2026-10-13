import Link from "next/link";
import { RiArrowRightLine, RiCheckLine } from "react-icons/ri";
import { Container, Section, SectionHeading } from "@/components/site/section";

const pillars = [
  {
    index: "০১",
    tag: "পদ্ধতির স্বচ্ছতা",
    title: "ডিভাইস খৎনা কী এবং কেন আধুনিক?",
    text: "আন্তর্জাতিক মানসম্মত, জীবাণুমুক্ত ও সিঙ্গেল-ইউজ মেডিকেল ডিভাইসের সাহায্যে নিয়ন্ত্রিতভাবে খৎনা করা হয়। এতে চামড়ার কাট হয় সুষম, রক্তপাত সাধারণত নগণ্য এবং অধিকাংশ ক্ষেত্রে কোনো সেলাই লাগে না।",
    highlight: "সুন্দর ফিনিশিং ও সেলাইহীন স্বস্তি",
    href: "/procedure",
    cta: "ডিভাইস পদ্ধতির খুঁটিনাটি",
  },
  {
    index: "০২",
    tag: "ব্যথা নিয়ন্ত্রণ ও নিরাপত্তা",
    title: "শিশু কতটা নিরাপদ? ব্যথা কি সহনীয়?",
    text: "কার্যকর লোকাল অ্যানেসথেসিয়ার মাধ্যমে স্থানটি অবশ করে নেওয়া হয়, যাতে প্রক্রিয়াকালে শিশু তীব্র ব্যথা অনুভব না করে। অবশভাব কাটার পর মৃদু অস্বস্তির জন্য প্রেসক্রিপশন ও পরিচর্যার পরামর্শ দেওয়া হয়।",
    highlight: "কার্যকর লোকাল অবশকরণ ও ফলো-আপ",
    href: "/faq",
    cta: "ব্যথা নিয়ন্ত্রণ বিষয়ক প্রশ্নোত্তর",
  },
  {
    index: "০৩",
    tag: "চিকিৎসকের দক্ষতা",
    title: "কার তত্ত্বাবধানে হচ্ছে খৎনা?",
    text: "বিএমডিসি (BMDC) নিবন্ধিত চিকিৎসক, যিনি ২০১৯ সাল থেকে নিয়মিত শিশুদের ডিভাইস খৎনা পরিচালনা করছেন। শিশুর শারীরিক গঠন ও পূর্ববর্তী ইতিহাস যাচাই করে তবেই চিকিৎসার সিদ্ধান্ত নেওয়া হয়।",
    highlight: "যাচাইযোগ্য বিএমডিসি রেজিস্ট্রেশন",
    href: "/doctor",
    cta: "ডাক্তারের শিক্ষাগত যোগ্যতা ও প্রোফাইল",
  },
];

export function Understand() {
  return (
    <Section className="py-20 md:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="স্বচ্ছ তথ্য · সঠিক প্রস্তুতি"
          title="সিদ্ধান্ত নেওয়ার আগে ৩টি মৌলিক প্রশ্নের স্পষ্ট উত্তর"
          description="সন্তানের খৎনা নিয়ে অভিভাবকদের মনে নানা প্রশ্ন থাকা স্বাভাবিক। তাই যেকোনো সিদ্ধান্তের আগে আমরা সঠিক চিকিৎসা তথ্য ও খোলামেলা পরামর্শ নিশ্চিত করি।"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((item) => (
            <div
              key={item.index}
              className="group relative flex flex-col justify-between rounded-xl border border-border/80 bg-background p-7 shadow-xs transition-all duration-300 ease-out hover:-translate-y-2 hover:border-brand/50 hover:shadow-md hover:shadow-brand/5"
            >
              <div className="flex flex-col gap-5">
                {/* Header Meta: Step badge & Tag */}
                <div className="flex items-center justify-between gap-2 border-b border-border/60 pb-4">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-brand-soft text-xs font-bold text-primary transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                    {item.index}
                  </span>
                  <span className="label-mono text-[11px] text-muted-foreground transition-colors duration-200 group-hover:text-foreground">
                    {item.tag}
                  </span>
                </div>

                {/* Card Title & Content */}
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-xl font-bold tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground text-pretty sm:text-base">
                    {item.text}
                  </p>
                </div>

                {/* Highlight Checkpoint */}
                <div className="flex items-center gap-2 rounded-lg bg-surface/70 px-3 py-2 text-xs font-medium text-foreground/90 transition-colors duration-300 group-hover:bg-brand-soft/80">
                  <RiCheckLine className="size-4 shrink-0 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <span>{item.highlight}</span>
                </div>
              </div>

              {/* Bottom CTA Link */}
              <div className="mt-6 pt-4 border-t border-border/40">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all duration-200 hover:underline"
                >
                  {item.cta}
                  <RiArrowRightLine className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
