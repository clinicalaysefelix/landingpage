import { WhatsappIcon } from '@/assets/icons/whatsapp'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config'
import Link from 'next/link'

export function WhatsappButton() {
  return (
    <Link href={siteConfig.links.whatsapp} target="_blank">
      <Button
        size="icon"
        className="fixed bottom-4 right-4 h-12 w-12 rounded-full bg-[#25d366] text-white shadow-md hover:bg-[#32e575] md:h-14 md:w-14 [&_svg]:size-6"
      >
        <WhatsappIcon />
      </Button>
    </Link>
  )
}
