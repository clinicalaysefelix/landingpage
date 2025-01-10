import { WhatsappIcon } from '@/assets/icons/whatsapp'
import { MotionLink } from '@/components/motion/motion-link'
import { siteConfig } from '@/config'
import { animationConfig } from '@/lib/animation'

export function WhatsappButton() {
  return (
    <MotionLink
      variants={animationConfig.variants}
      viewport={animationConfig.viewport}
      initial="popOffScreen"
      animate="popOnScreen"
      href={siteConfig.links.whatsapp}
      target="_blank"
      className="fixed bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#25d366] text-white shadow-md hover:bg-[#32e575] md:h-14 md:w-14 [&_svg]:size-6"
    >
      <WhatsappIcon />
    </MotionLink>
  )
}
