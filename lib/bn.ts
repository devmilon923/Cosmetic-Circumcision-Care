const BN_DIGITS = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯']

/** Convert Western digits in a string/number to Bengali digits. */
export function toBn(value: string | number): string {
  return String(value).replace(/\d/g, (d) => BN_DIGITS[Number(d)])
}

/** Normalize Bengali digits in user input back to Western digits (for validation). */
export function toEnDigits(value: string): string {
  return value.replace(/[০-৯]/g, (d) => String(BN_DIGITS.indexOf(d)))
}

const BN_MONTHS = [
  'জানুয়ারি',
  'ফেব্রুয়ারি',
  'মার্চ',
  'এপ্রিল',
  'মে',
  'জুন',
  'জুলাই',
  'আগস্ট',
  'সেপ্টেম্বর',
  'অক্টোবর',
  'নভেম্বর',
  'ডিসেম্বর',
]

const BN_WEEKDAYS = [
  'রবিবার',
  'সোমবার',
  'মঙ্গলবার',
  'বুধবার',
  'বৃহস্পতিবার',
  'শুক্রবার',
  'শনিবার',
]

/** Format an ISO date (yyyy-mm-dd) as a readable Bengali date, e.g. "সোমবার, ১২ অক্টোবর ২০২৬". */
export function formatBnDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number)
  if (!y || !m || !d) return iso
  const date = new Date(y, m - 1, d)
  return `${BN_WEEKDAYS[date.getDay()]}, ${toBn(d)} ${BN_MONTHS[m - 1]} ${toBn(y)}`
}

/** Today's date as yyyy-mm-dd in Bangladesh time (UTC+6). */
export function todayIsoDhaka(): string {
  const now = new Date()
  const dhaka = new Date(now.getTime() + (6 * 60 + now.getTimezoneOffset()) * 60_000)
  const y = dhaka.getFullYear()
  const m = String(dhaka.getMonth() + 1).padStart(2, '0')
  const d = String(dhaka.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}
