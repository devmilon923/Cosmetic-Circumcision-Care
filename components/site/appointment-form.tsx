'use client'

import Link from 'next/link'
import { useId, useState } from 'react'
import { RiArrowLeftLine, RiCheckboxCircleFill, RiPhoneFill, RiWhatsappFill } from 'react-icons/ri'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '@/components/ui/field'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { clinic, clinicLinks } from '@/lib/clinic'
import { formatBnDate, toEnDigits, todayIsoDhaka } from '@/lib/bn'

const ageOptions = [
  { value: '0-6m', label: '০ – ৬ মাস' },
  { value: '6-12m', label: '৬ – ১২ মাস' },
  { value: '1-3y', label: '১ – ৩ বছর' },
  { value: '3-6y', label: '৩ – ৬ বছর' },
  { value: '6-12y', label: '৬ – ১২ বছর' },
  { value: '12y+', label: '১২ বছরের বেশি' },
]

const timeOptions = [
  { value: 'morning', label: 'সকাল' },
  { value: 'noon', label: 'দুপুর' },
  { value: 'afternoon', label: 'বিকেল' },
  { value: 'evening', label: 'সন্ধ্যা' },
]

type FormValues = {
  parentName: string
  phone: string
  childAge: string
  date: string
  time: string
  message: string
  consent: boolean
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const initialValues: FormValues = {
  parentName: '',
  phone: '',
  childAge: '',
  date: '',
  time: '',
  message: '',
  consent: false,
}

const BD_PHONE = /^(?:\+?88)?01[3-9]\d{8}$/

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}
  const name = values.parentName.trim()
  if (name.length < 2) errors.parentName = 'অনুগ্রহ করে অভিভাবকের নাম লিখুন (কমপক্ষে ২ অক্ষর)।'

  const phone = toEnDigits(values.phone).replace(/[\s-]/g, '')
  if (!phone) errors.phone = 'ফোন নম্বর আবশ্যক।'
  else if (!BD_PHONE.test(phone))
    errors.phone = 'সঠিক বাংলাদেশি মোবাইল নম্বর দিন, যেমন ০১৭XXXXXXXX।'

  if (!values.childAge) errors.childAge = 'শিশুর বয়স নির্বাচন করুন।'

  if (!values.date) errors.date = 'পছন্দের তারিখ নির্বাচন করুন।'
  else if (values.date < todayIsoDhaka()) errors.date = 'অতীতের তারিখ নির্বাচন করা যাবে না।'

  if (!values.time) errors.time = 'পছন্দের সময় নির্বাচন করুন।'

  if (values.message.length > 500) errors.message = 'বার্তা ৫০০ অক্ষরের মধ্যে রাখুন।'

  if (!values.consent) errors.consent = 'এগিয়ে যেতে গোপনীয়তা নীতিতে সম্মতি দিন।'

  return errors
}

function buildSummaryMessage(values: FormValues) {
  const age = ageOptions.find((o) => o.value === values.childAge)?.label ?? ''
  const time = timeOptions.find((o) => o.value === values.time)?.label ?? ''
  return [
    'আসসালামু আলাইকুম। আমি ডিভাইস কসমেটিক খৎনার জন্য অ্যাপয়েন্টমেন্টের অনুরোধ করতে চাই।',
    '',
    `অভিভাবকের নাম: ${values.parentName.trim()}`,
    `ফোন: ${values.phone.trim()}`,
    `শিশুর বয়স: ${age}`,
    `পছন্দের তারিখ: ${formatBnDate(values.date)}`,
    `পছন্দের সময়: ${time}`,
    values.message.trim() ? `বার্তা: ${values.message.trim()}` : null,
  ]
    .filter((line) => line !== null)
    .join('\n')
}

export function AppointmentForm() {
  const id = useId()
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const update = <K extends keyof FormValues>(key: K, value: FormValues[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      const firstKey = Object.keys(nextErrors)[0]
      document.getElementById(`${id}-${firstKey}`)?.focus()
      return
    }
    setSubmitted(true)
  }

  if (submitted) {
    const summary = buildSummaryMessage(values)
    return (
      <div className="flex flex-col gap-6 rounded-lg border bg-background p-6 md:p-8" role="status">
        <div className="flex items-start gap-4">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-primary">
            <RiCheckboxCircleFill className="size-5" />
          </span>
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-semibold">আপনার অনুরোধ প্রস্তুত</h2>
            <p className="text-sm text-muted-foreground text-pretty">
              নিচের তথ্যগুলো এক ক্লিকে WhatsApp-এ ক্লিনিকে পাঠান। ক্লিনিক থেকে ফোন করে তারিখ ও
              সময় নিশ্চিত করার পরই অ্যাপয়েন্টমেন্ট চূড়ান্ত হবে।
            </p>
          </div>
        </div>

        <pre className="overflow-x-auto rounded-lg border bg-surface p-4 font-sans text-sm leading-7 whitespace-pre-wrap">
          {summary}
        </pre>

        <Alert>
          <AlertTitle>অ্যাপয়েন্টমেন্ট এখনো নিশ্চিত হয়নি</AlertTitle>
          <AlertDescription>
            এটি একটি অনুরোধ মাত্র। ক্লিনিক থেকে {clinic.phone.display} নম্বর থেকে ফোন করে নিশ্চিত
            করা হবে।
          </AlertDescription>
        </Alert>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            size="lg"
            render={
              <a href={clinicLinks.whatsapp(summary)} target="_blank" rel="noopener noreferrer" />
            }
          >
            <RiWhatsappFill data-icon="inline-start" />
            WhatsApp-এ পাঠান
          </Button>
          <Button size="lg" variant="outline" render={<a href={clinicLinks.tel} />}>
            <RiPhoneFill data-icon="inline-start" />
            ফোন করুন
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="sm:ml-auto"
            onClick={() => {
              setSubmitted(false)
            }}
          >
            <RiArrowLeftLine data-icon="inline-start" />
            তথ্য সম্পাদনা
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-8 rounded-lg border bg-background p-6 md:p-8"
    >
      <FieldGroup>
        <Field data-invalid={Boolean(errors.parentName) || undefined}>
          <FieldLabel htmlFor={`${id}-parentName`}>অভিভাবকের নাম</FieldLabel>
          <Input
            id={`${id}-parentName`}
            name="parentName"
            autoComplete="name"
            placeholder="যেমন: মোহাম্মদ রহিম"
            value={values.parentName}
            onChange={(e) => update('parentName', e.target.value)}
            aria-invalid={Boolean(errors.parentName) || undefined}
            className="h-11 text-base"
          />
          <FieldError>{errors.parentName}</FieldError>
        </Field>

        <Field data-invalid={Boolean(errors.phone) || undefined}>
          <FieldLabel htmlFor={`${id}-phone`}>ফোন নম্বর</FieldLabel>
          <Input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="০১৭XXXXXXXX"
            value={values.phone}
            onChange={(e) => update('phone', e.target.value)}
            aria-invalid={Boolean(errors.phone) || undefined}
            className="h-11 text-base"
          />
          <FieldDescription>এই নম্বরে ক্লিনিক থেকে ফোন করে অ্যাপয়েন্টমেন্ট নিশ্চিত করা হবে।</FieldDescription>
          <FieldError>{errors.phone}</FieldError>
        </Field>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field data-invalid={Boolean(errors.childAge) || undefined}>
            <FieldLabel htmlFor={`${id}-childAge`}>শিশুর বয়স</FieldLabel>
            <Select
              value={values.childAge || null}
              onValueChange={(value) => update('childAge', (value as string | null) ?? '')}
            >
              <SelectTrigger
                id={`${id}-childAge`}
                className="h-11 w-full text-base"
                aria-invalid={Boolean(errors.childAge) || undefined}
              >
                <SelectValue placeholder="বয়স নির্বাচন করুন" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {ageOptions.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <FieldError>{errors.childAge}</FieldError>
          </Field>

          <Field data-invalid={Boolean(errors.date) || undefined}>
            <FieldLabel htmlFor={`${id}-date`}>পছন্দের তারিখ</FieldLabel>
            <Input
              id={`${id}-date`}
              name="date"
              type="date"
              min={todayIsoDhaka()}
              value={values.date}
              onChange={(e) => update('date', e.target.value)}
              aria-invalid={Boolean(errors.date) || undefined}
              className="h-11 text-base"
            />
            <FieldError>{errors.date}</FieldError>
          </Field>
        </div>

        <FieldSet data-invalid={Boolean(errors.time) || undefined}>
          <FieldLegend variant="label">পছন্দের সময়</FieldLegend>
          <ToggleGroup
            id={`${id}-time`}
            value={values.time ? [values.time] : []}
            onValueChange={(value) => update('time', (value[0] as string | undefined) ?? '')}
            variant="outline"
            className="flex-wrap"
            aria-invalid={Boolean(errors.time) || undefined}
          >
            {timeOptions.map((opt) => (
              <ToggleGroupItem key={opt.value} value={opt.value} className="h-10 px-4 text-sm">
                {opt.label}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
          <FieldDescription>
            নির্দিষ্ট সময়সূচি ক্লিনিক থেকে ফোনে জানানো হবে।
          </FieldDescription>
          <FieldError>{errors.time}</FieldError>
        </FieldSet>

        <Field data-invalid={Boolean(errors.message) || undefined}>
          <FieldLabel htmlFor={`${id}-message`}>
            বার্তা <span className="font-normal text-muted-foreground">(ঐচ্ছিক)</span>
          </FieldLabel>
          <Textarea
            id={`${id}-message`}
            name="message"
            rows={4}
            maxLength={500}
            placeholder="শিশুর স্বাস্থ্য সম্পর্কে জানানোর মতো কিছু থাকলে লিখুন"
            value={values.message}
            onChange={(e) => update('message', e.target.value)}
            aria-invalid={Boolean(errors.message) || undefined}
            className="text-base"
          />
          <FieldDescription className="text-right">{values.message.length}/500</FieldDescription>
          <FieldError>{errors.message}</FieldError>
        </Field>

        <Field orientation="horizontal" data-invalid={Boolean(errors.consent) || undefined}>
          <Checkbox
            id={`${id}-consent`}
            checked={values.consent}
            onCheckedChange={(checked) => update('consent', checked === true)}
            aria-invalid={Boolean(errors.consent) || undefined}
          />
          <div className="flex flex-col gap-1">
            <FieldLabel htmlFor={`${id}-consent`} className="font-normal">
              আমার দেওয়া তথ্য শুধুমাত্র অ্যাপয়েন্টমেন্টের জন্য ব্যবহার করা হবে, এতে আমি সম্মত।{' '}
              <Link href="/privacy" className="text-primary underline underline-offset-4">
                গোপনীয়তা নীতি
              </Link>
            </FieldLabel>
            <FieldError>{errors.consent}</FieldError>
          </div>
        </Field>
      </FieldGroup>

      <div className="flex flex-col gap-3 border-t pt-6">
        <Button type="submit" size="lg" className="h-11 w-full text-base">
          অনুরোধ প্রস্তুত করুন
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          জমা দেওয়া মানেই অ্যাপয়েন্টমেন্ট নিশ্চিত নয়। ক্লিনিক থেকে ফোন করে নিশ্চিত করা হবে।
        </p>
      </div>
    </form>
  )
}
