/**
 * Image registry. Every frame on the site reads from here.
 * To add a real photo: drop the file in /public/images and set the path, e.g.
 *   hero: { src: '/images/hero.jpg', ... }
 * A `null` src renders a designed empty frame.
 */
export type SiteImage = {
  src: string | null
  alt: string
  label: string
}

export const images = {
  hero: {
    src: '/hero.jpg',
    alt: 'ক্লিনিকে সেবা গ্রহণকারী শিশু',
    label: 'Hero · 4:5',
  },
  doctor: {
    src: '/doctor.jpg',
    alt: 'দায়িত্বপ্রাপ্ত চিকিৎসকের প্রতিকৃতি',
    label: 'Doctor · 4:5',
  },
  clinicInterior: {
    src: null,
    alt: 'ক্লিনিকের অভ্যর্থনা ও অপেক্ষা কক্ষ',
    label: 'Clinic interior · 3:2',
  },
  treatmentRoom: {
    src: null,
    alt: 'জীবাণুমুক্ত চিকিৎসা কক্ষ',
    label: 'Treatment room · 4:3',
  },
  equipment: {
    src: null,
    alt: 'খৎনার ডিভাইস ও মেডিকেল সরঞ্জাম',
    label: 'Equipment · 4:3',
  },
  playZone1: {
    src: null,
    alt: 'শিশুদের খেলার জায়গা',
    label: 'Play zone · 4:3',
  },
  playZone2: {
    src: null,
    alt: 'শিশু বিনোদন কক্ষের খেলনা ও বসার জায়গা',
    label: 'Play zone · 3:4',
  },
  playZone3: {
    src: null,
    alt: 'অভিভাবকদের সাথে অপেক্ষারত শিশু',
    label: 'Play zone · 1:1',
  },
} satisfies Record<string, SiteImage>

export type ImageKey = keyof typeof images
