import type { Metadata } from 'next'
import { PageHero } from '@/components/site/page-hero'
import { Container, Section } from '@/components/site/section'
import { GalleryGrid } from '@/components/site/gallery-grid'
import { CtaBand } from '@/components/site/cta-band'
import { galleryItems } from '@/lib/content/gallery'

export const metadata: Metadata = {
  title: 'ক্লিনিক গ্যালারি: পরিবেশ, চিকিৎসা কক্ষ ও প্লে-জোন',
  description:
    'রওজা বেবি কেয়ার হেলথ সেন্টারের ক্লিনিক পরিবেশ, চিকিৎসা কক্ষ, যন্ত্রপাতি ও শিশু বিনোদন জোনের ছবি।',
}

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="গ্যালারি"
        title="ক্লিনিকের সার্বিক পরিবেশ ও ব্যবস্থা"
        description="আসার আগেই ক্লিনিকের পরিচ্ছন্ন পরিবেশ, চিকিৎসা কক্ষ ও শিশুদের বিনোদন জোন দেখে নিতে পারেন।"
      />
      <Section>
        <Container>
          <GalleryGrid items={galleryItems} />
        </Container>
      </Section>
      <CtaBand />
    </>
  )
}
