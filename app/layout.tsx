import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Hind_Siliguri, Inter, JetBrains_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { ClinicJsonLd } from "@/components/site/clinic-json-ld";
import { clinic } from "@/lib/clinic";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bengali = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-bengali",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${clinic.name} | ডিভাইস কসমেটিক খৎনা`,
    template: `%s | ${clinic.name}`,
  },
  description:
    "বাংলাদেশে ২০১৯ সাল থেকে শিশুদের জন্য ডিভাইস-ভিত্তিক কসমেটিক খৎনা সেবা। পদ্ধতি, নিরাপত্তা, পরিচর্যা ও অ্যাপয়েন্টমেন্ট সম্পর্কে বিস্তারিত জানুন।",
  generator: "Milon",
  applicationName: clinic.nameEn,
  keywords: [
    "খৎনা",
    "কসমেটিক খৎনা",
    "ডিভাইস খৎনা",
    "শিশুর খৎনা",
    "circumcision Bangladesh",
    clinic.nameEn,
  ],
  openGraph: {
    type: "website",
    locale: "bn_BD",
    siteName: clinic.name,
    title: `${clinic.name} | ডিভাইস কসমেটিক খৎনা`,
    description:
      "শিশুর ডিভাইস খৎনা সম্পর্কে সঠিক তথ্য, অভিজ্ঞ ডাক্তারের পরামর্শ এবং অ্যাপয়েন্টমেন্ট।",
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      className={`${inter.variable} ${bengali.variable} ${mono.variable}`}
    >
      <body className="min-h-dvh font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:text-primary-foreground"
        >
          মূল বিষয়বস্তুতে যান
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <ClinicJsonLd />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
