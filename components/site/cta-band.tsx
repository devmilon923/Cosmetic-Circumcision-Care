import Link from "next/link";
import { RiArrowRightLine, RiPhoneFill, RiWhatsappFill } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { Container, Eyebrow, Section } from "@/components/site/section";
import { clinic, clinicLinks, defaultWhatsappMessage } from "@/lib/clinic";

export function CtaBand({
  title = "শিশুর জন্য সঠিক সিদ্ধান্ত নিতে আমরা পাশে আছি",
  description = "অ্যাপয়েন্টমেন্টের অনুরোধ পাঠান, অথবা আগে প্রশ্ন থাকলে সরাসরি ফোন বা WhatsApp করুন। ক্লিনিক থেকে ফোন করে তারিখ ও সময় নিশ্চিত করা হবে।",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <Section tone="dark" className="py-16 md:py-24">
      <Container className="grid items-end gap-10 lg:grid-cols-12">
        <div className="flex flex-col gap-5 lg:col-span-7">
          <Eyebrow className="text-brand">Appointment</Eyebrow>
          <h2 className="display-md text-balance">{title}</h2>
          <p className="max-w-xl text-base text-background/70 text-pretty md:text-lg">
            {description}
          </p>
        </div>
        <div className="flex flex-col gap-3 lg:col-span-5 lg:items-end">
          <Button
            size="lg"
            className="group w-full bg-brand text-foreground transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-brand/90 hover:shadow-md hover:shadow-brand/25 active:translate-y-0 sm:w-auto"
            render={<Link href="/appointment" />}
          >
            অ্যাপয়েন্টমেন্টের অনুরোধ পাঠান
            <RiArrowRightLine
              data-icon="inline-end"
              className="transition-transform duration-300 ease-out group-hover:translate-x-1"
            />
          </Button>
          <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
            <Button
              size="lg"
              variant="outline"
              className="group border-background/20 bg-transparent text-background transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-background/40 hover:bg-background/10 hover:text-background active:translate-y-0"
              render={<a href={clinicLinks.tel} />}
            >
              <RiPhoneFill
                data-icon="inline-start"
                className="transition-transform duration-300 ease-out group-hover:scale-110"
              />
              {clinic.phone.display}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group border-background/20 bg-transparent text-background transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-background/40 hover:bg-background/10 hover:text-background active:translate-y-0"
              render={
                <a
                  href={clinicLinks.whatsapp(defaultWhatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <RiWhatsappFill
                data-icon="inline-start"
                className="transition-transform duration-300 ease-out group-hover:scale-110 text-emerald-400"
              />
              WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
