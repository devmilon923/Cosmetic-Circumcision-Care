export type NavItem = { href: string; label: string; description?: string }

export const primaryNav: NavItem[] = [
  { href: '/procedure', label: 'ডিভাইস খৎনা' },
  { href: '/why-us', label: 'কেন আমরা' },
  { href: '/doctor', label: 'ডাক্তার' },
  { href: '/faq', label: 'প্রশ্নোত্তর' },
  { href: '/gallery', label: 'গ্যালারি' },
  { href: '/contact', label: 'যোগাযোগ' },
]

export const secondaryNav: NavItem[] = [
  { href: '/play-zone', label: 'শিশু বিনোদন জোন' },
  { href: '/reviews', label: 'অভিভাবকদের মতামত' },
  { href: '/privacy', label: 'গোপনীয়তা নীতি' },
  { href: '/terms', label: 'ব্যবহারের শর্তাবলী' },
]

export const footerColumns: { title: string; items: NavItem[] }[] = [
  {
    title: 'সেবা',
    items: [
      { href: '/procedure', label: 'ডিভাইস কসমেটিক খৎনা' },
      { href: '/play-zone', label: 'শিশু বিনোদন জোন' },
      { href: '/appointment', label: 'অ্যাপয়েন্টমেন্ট' },
    ],
  },
  {
    title: 'ক্লিনিক',
    items: [
      { href: '/why-us', label: 'কেন আমরা' },
      { href: '/doctor', label: 'ডাক্তার পরিচিতি' },
      { href: '/reviews', label: 'অভিভাবকদের মতামত' },
      { href: '/gallery', label: 'গ্যালারি' },
    ],
  },
  {
    title: 'তথ্য',
    items: [
      { href: '/faq', label: 'সাধারণ প্রশ্নোত্তর' },
      { href: '/contact', label: 'যোগাযোগ ও ঠিকানা' },
      { href: '/privacy', label: 'গোপনীয়তা নীতি' },
      { href: '/terms', label: 'ব্যবহারের শর্তাবলী' },
    ],
  },
]
