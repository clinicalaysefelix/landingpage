import { MotionDiv } from '@/components/motion/motion-div'
import { buttonVariants } from '@/components/ui/button'
import { WidthWrapper } from '@/components/width-wrapper'
import { siteConfig } from '@/config'
import { animationConfig } from '@/lib/animation'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <section>
      <WidthWrapper>
        <MotionDiv
          initial="toBottomOffScreen"
          animate="toBottomOnScreen"
          variants={animationConfig.variants}
          className="mx-auto max-w-prose space-y-6 text-center"
        >
          <Image
            src="/images/404.svg"
            alt="404"
            width={400}
            height={400}
            className="mx-auto"
          />

          <h1>Ops! Página não encontrada</h1>
          <p className="text-muted-foreground">
            Mas não se preocupe! Estamos aqui para cuidar de você e facilitar
            sua navegação.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Link href="/" className={buttonVariants()}>
              Voltar para a página inicial
            </Link>

            <Link
              href={siteConfig.links.whatsapp}
              target="_blank"
              className={buttonVariants({ variant: 'outline' })}
            >
              Entrar em contato conosco
            </Link>
          </div>
        </MotionDiv>
      </WidthWrapper>
    </section>
  )
}
