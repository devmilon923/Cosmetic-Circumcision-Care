import type { MetadataRoute } from 'next'
import { clinic } from '@/lib/clinic'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = clinic.siteUrl.replace(/\/$/, '')

  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/procedure', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/appointment', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/doctor', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/why-us', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/faq', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/gallery', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/play-zone', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/reviews', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/privacy', priority: 0.4, changeFrequency: 'yearly' as const },
    { path: '/terms', priority: 0.4, changeFrequency: 'yearly' as const },
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
