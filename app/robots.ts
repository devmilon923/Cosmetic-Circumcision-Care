import type { MetadataRoute } from 'next'
import { clinic } from '@/lib/clinic'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = clinic.siteUrl.replace(/\/$/, '')

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
