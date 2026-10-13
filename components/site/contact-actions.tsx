import { RiDirectionLine, RiPhoneFill, RiWhatsappFill } from 'react-icons/ri'
import { Button } from '@/components/ui/button'
import { clinic, clinicLinks, defaultWhatsappMessage } from '@/lib/clinic'
import { cn } from '@/lib/utils'

export function ContactActions({
  className,
  size = 'lg',
  showDirections = true,
}: {
  className?: string
  size?: 'default' | 'lg'
  showDirections?: boolean
}) {
  return (
    <div className={cn('flex flex-col gap-3 sm:flex-row sm:flex-wrap', className)}>
      <Button size={size} render={<a href={clinicLinks.tel} />}>
        <RiPhoneFill data-icon="inline-start" />
        ফোন করুন · {clinic.phone.display}
      </Button>
      <Button
        size={size}
        variant="outline"
        render={
          <a
            href={clinicLinks.whatsapp(defaultWhatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
          />
        }
      >
        <RiWhatsappFill data-icon="inline-start" />
        WhatsApp
      </Button>
      {showDirections ? (
        <Button
          size={size}
          variant="outline"
          render={<a href={clinicLinks.directions} target="_blank" rel="noopener noreferrer" />}
        >
          <RiDirectionLine data-icon="inline-start" />
          Google Maps-এ দিকনির্দেশনা
        </Button>
      ) : null}
    </div>
  )
}
