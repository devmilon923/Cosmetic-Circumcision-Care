import { Hero } from '@/components/home/hero'
import { Understand } from '@/components/home/understand'
import { ProcedureOverview } from '@/components/home/procedure-overview'
import { Trust } from '@/components/home/trust'
import { SafetyPreview } from '@/components/home/safety-preview'
import { PlayZonePreview } from '@/components/home/play-zone-preview'
import { FaqPreview } from '@/components/home/faq-preview'
import { CtaBand } from '@/components/site/cta-band'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Understand />
      <ProcedureOverview />
      <Trust />
      <SafetyPreview />
      <PlayZonePreview />
      <FaqPreview />
      <CtaBand
        title="সন্তানের নিরাপদ খৎনায় আমরা আছি আপনার পাশে"
        description="অ্যাপয়েন্টমেন্টের অনুরোধ পাঠান অথবা যেকোনো তথ্যের জন্য সরাসরি কল বা WhatsApp করুন। সুবিধাজনক তারিখ ও সময় ফোনে নিশ্চিত করা হবে।"
      />
    </>
  )
}

