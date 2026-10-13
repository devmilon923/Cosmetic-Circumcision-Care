import type { FrameRatio } from '@/components/site/image-frame'

export type GalleryCategory = 'clinic' | 'treatment' | 'equipment' | 'play'

export const galleryCategories: { id: GalleryCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'সব' },
  { id: 'clinic', label: 'ক্লিনিক' },
  { id: 'treatment', label: 'চিকিৎসা কক্ষ' },
  { id: 'equipment', label: 'যন্ত্রপাতি' },
  { id: 'play', label: 'শিশু বিনোদন' },
]

export type GalleryItem = {
  id: string
  category: GalleryCategory
  src: string | null
  alt: string
  caption: string
  ratio: FrameRatio
  /** Span two columns on wide screens for rhythm. */
  wide?: boolean
}

/**
 * Add real photos by setting `src` to a path under /public/images.
 * Keep captions factual — they double as alt text context.
 */
export const galleryItems: GalleryItem[] = [
  { id: 'g1', category: 'clinic', src: null, alt: 'অভ্যর্থনা কক্ষ', caption: 'অভ্যর্থনা ও অপেক্ষা কক্ষ', ratio: '3/2', wide: true },
  { id: 'g2', category: 'treatment', src: null, alt: 'চিকিৎসা কক্ষ', caption: 'জীবাণুমুক্ত চিকিৎসা কক্ষ', ratio: '4/5' },
  { id: 'g3', category: 'equipment', src: null, alt: 'খৎনার ডিভাইস', caption: 'একবার ব্যবহারযোগ্য ডিভাইস ও সরঞ্জাম', ratio: '1/1' },
  { id: 'g4', category: 'play', src: null, alt: 'শিশুদের খেলার জায়গা', caption: 'শিশু বিনোদন জোন', ratio: '4/3' },
  { id: 'g5', category: 'clinic', src: null, alt: 'পরামর্শ কক্ষ', caption: 'ডাক্তারের পরামর্শ কক্ষ', ratio: '4/3' },
  { id: 'g6', category: 'play', src: null, alt: 'খেলনা ও বই', caption: 'খেলনা ও গল্পের বইয়ের কোণ', ratio: '3/4' },
  { id: 'g7', category: 'treatment', src: null, alt: 'পর্যবেক্ষণ কক্ষ', caption: 'প্রক্রিয়া-পরবর্তী পর্যবেক্ষণ কক্ষ', ratio: '3/2', wide: true },
  { id: 'g8', category: 'equipment', src: null, alt: 'জীবাণুমুক্তকরণ ব্যবস্থা', caption: 'জীবাণুমুক্তকরণ ও নিরাপদ বর্জ্য ব্যবস্থাপনা', ratio: '1/1' },
  { id: 'g9', category: 'clinic', src: null, alt: 'ক্লিনিকের প্রবেশপথ', caption: 'ক্লিনিকের প্রবেশপথ', ratio: '4/5' },
]
