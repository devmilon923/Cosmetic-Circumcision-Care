import type { MetadataRoute } from 'next'
import { clinic } from '@/lib/clinic'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: clinic.name,
    short_name: clinic.shortName,
    description: `${clinic.name}: বাংলাদেশে ২০১৯ সাল থেকে শিশুদের জন্য ডিভাইস-ভিত্তিক কসমেটিক খৎনা সেবা।`,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#059669',
    icons: [
      {
        src: '/icon-light-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
