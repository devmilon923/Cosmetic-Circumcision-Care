'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Root layout global error:', error)
  }, [error])

  return (
    <html lang="bn">
      <body className="flex min-h-dvh flex-col items-center justify-center bg-white p-6 text-slate-900 font-sans antialiased">
        <div className="flex max-w-md flex-col items-center text-center">
          <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
            <svg
              className="size-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold">একটি গুরুতর সমস্যা হয়েছে</h1>
          <p className="mt-2 text-sm text-slate-600">
            অ্যাপ্লিকেশনটি লোড করার সময় অপ্রত্যাশিত ত্রুটি ঘটেছে। দয়া করে পৃষ্ঠাটি রিফ্রেশ করুন বা
            আবার চেষ্টা করুন।
          </p>
          <div className="mt-6 flex gap-3">
            <button
              type="button"
              onClick={() => reset()}
              className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700"
            >
              আবার চেষ্টা করুন
            </button>
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              হোমে যান
            </a>
          </div>
        </div>
      </body>
    </html>
  )
}
