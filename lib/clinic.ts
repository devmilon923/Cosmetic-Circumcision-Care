/**
 * Single place for real clinic details.
 * Anything marked `isPlaceholder: true` is rendered with a dashed "editable" outline
 * until the verified value is filled in. Replace the value and flip the flag to false.
 */
export const clinic = {
  name: 'রওজা বেবি কেয়ার হেলথ সেন্টার',
  nameEn: 'Rouza Baby Care Health Center',
  shortName: 'রওজা বেবি কেয়ার',
  since: 2019,
  sinceBn: '২০১৯',
  tagline: 'শিশুদের আধুনিক ডিভাইস কসমেটিক খৎনা সেবা',
  siteUrl: 'https://example.com',

  phone: {
    display: '+৮৮০ ১XXX-XXXXXX',
    e164: '+8801XXXXXXXXX',
    isPlaceholder: true,
  },
  whatsapp: {
    // International format without "+" — e.g. 8801XXXXXXXXX
    number: '8801XXXXXXXXX',
    isPlaceholder: true,
  },
  address: {
    lines: ['[ভবন / বাড়ি নম্বর, সড়ক]', '[এলাকা], [শহর]', 'বাংলাদেশ'],
    mapsQuery: 'Rouza Baby Care Health Center',
    isPlaceholder: true,
  },
  hours: {
    rows: [
      { days: 'শনিবার – বৃহস্পতিবার', time: '[সকাল ০০:০০ – রাত ০০:০০]' },
      { days: 'শুক্রবার', time: '[সময় / বন্ধ]' },
    ],
    note: 'অ্যাপয়েন্টমেন্ট ছাড়া আসার আগে ফোন করে নিশ্চিত হোন।',
    isPlaceholder: true,
  },

  doctor: {
    name: '[ডাক্তারের পূর্ণ নাম]',
    designation: '[পদবি / বিশেষত্ব]',
    qualifications: ['MBBS ([প্রতিষ্ঠান])', '[উচ্চতর ডিগ্রি / প্রশিক্ষণ]'],
    registration: {
      body: 'BMDC',
      number: '[রেজিস্ট্রেশন নম্বর]',
    },
    experienceSummary:
      '২০১৯ সাল থেকে ডিভাইস-ভিত্তিক কসমেটিক খৎনা পদ্ধতিতে শিশুদের চিকিৎসা দিয়ে আসছেন।',
    isPlaceholder: true,
  },
} as const

export const clinicLinks = {
  tel: `tel:${clinic.phone.e164}`,
  whatsapp: (message?: string) => {
    const base = `https://wa.me/${clinic.whatsapp.number}`
    return message ? `${base}?text=${encodeURIComponent(message)}` : base
  },
  directions: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    clinic.address.mapsQuery,
  )}`,
  mapSearch: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    clinic.address.mapsQuery,
  )}`,
}

export const defaultWhatsappMessage =
  'আসসালামু আলাইকুম। আমি শিশুর ডিভাইস কসমেটিক খৎনা সম্পর্কে জানতে চাই।'
