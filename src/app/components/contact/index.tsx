import { MotionDiv } from '@/components/motion/motion-div'
import { buttonVariants } from '@/components/ui/button'
import { WidthWrapper } from '@/components/width-wrapper'
import { siteConfig } from '@/config'
import { animationConfig } from '@/lib/animation'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa6'

const Contact: React.FC = () => {
  return (
    <section className="rounded-t-3xl bg-section" id="contato">
      <WidthWrapper>
        <div className="grid grid-cols-1 items-center justify-between gap-6 lg:grid-cols-2">
          <MotionDiv
            variants={animationConfig.variants}
            viewport={animationConfig.viewport}
            initial="toBottomOffScreen"
            whileInView="toBottomOnScreen"
            className="mr-auto flex flex-col items-center gap-4 text-center md:items-start md:text-start"
          >
            <p className="text-base font-bold text-indigo-900">
              ENTRE EM CONTATO
            </p>
            <h2>Fale conosco</h2>
            <p className="text-pretty text-muted-foreground">
              Estamos situados na Trav. Cônego Leitão, 1639, Castanhal, Brasil.
              Venha nos fazer uma visita!
            </p>
            <div className="flex w-full flex-wrap items-center justify-center gap-4 md:justify-normal">
              <Link
                href={siteConfig.links.whatsapp}
                className={buttonVariants()}
              >
                <FaWhatsapp />
                (91) 98310-2506
              </Link>
              <Link
                href={siteConfig.links.instagram}
                className={buttonVariants()}
              >
                <FaInstagram />
                @clinicalaysefelix
              </Link>
            </div>
          </MotionDiv>
          <MotionDiv
            variants={animationConfig.variants}
            viewport={animationConfig.viewport}
            initial="toBottomOffScreen"
            whileInView="toBottomOnScreen"
            className="mx-auto flex h-full w-full flex-1 items-center md:h-72"
          >
            <iframe
              title="Localização da Clínica Layse Felix"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7947814070544!2d-47.929837624172436!3d-1.2978441356406423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a5af514f63ea9d%3A0x548d0aab8543cc99!2sCl%C3%ADnica%20Layse%20Felix!5e0!3m2!1spt-BR!2sbr!4v1736211289362!5m2!1spt-BR!2sbr"
              className="h-full w-full rounded-2xl focus:outline-none"
            />
          </MotionDiv>
        </div>
      </WidthWrapper>
    </section>
  )
}

export default Contact
