import { clinic } from '@/lib/clinic'

/**
 * Structured data with verified facts only. Add `telephone`, `address` and
 * `openingHoursSpecification` once the real clinic details are confirmed.
 */
export function ClinicJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: clinic.name,
    alternateName: clinic.nameEn,
    url: clinic.siteUrl,
    foundingDate: String(clinic.since),
    inLanguage: 'bn',
    areaServed: { '@type': 'Country', name: 'Bangladesh' },
    medicalSpecialty: 'Pediatric',
    availableService: {
      '@type': 'MedicalProcedure',
      name: 'Device-based cosmetic circumcision',
      alternateName: 'ডিভাইস কসমেটিক খৎনা',
      procedureType: 'https://schema.org/SurgicalProcedure',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
