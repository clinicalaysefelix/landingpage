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
      className="fixed bottom-3 right-3 z-50 flex size-12 items-center justify-center rounded-full bg-green-500 shadow-2xl transition-colors hover:bg-green-600 focus:border-red-500 md:bottom-5 md:right-5 md:size-14 [&_svg]:size-6 md:[&_svg]:size-7"
    >
      <WhatsappIcon />
    </MotionLink>
  )
}
