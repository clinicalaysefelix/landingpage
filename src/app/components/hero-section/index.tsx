import { MotionDiv } from '@/components/motion/motion-div'
import { Button } from '@/components/ui/button'
import { WidthWrapper } from '@/components/width-wrapper'
import { animationConfig } from '@/lib/animation'
import Image from 'next/image'

const HeroSection: React.FC = () => {
  return (
    <section className="overflow-hidden">
      <WidthWrapper>
        <div className="grid grid-cols-1 gap-12 xl:grid-cols-2 xl:gap-20">
          <MotionDiv
            initial="toBottomOffScreen"
            whileInView="toBottomOnScreen"
            viewport={animationConfig.viewport}
            variants={animationConfig.variants}
            className="mx-auto flex max-w-prose flex-col items-center justify-center gap-4 text-pretty text-center xl:max-w-lg xl:items-start xl:text-start"
          >
            <h1 className="text-3xl font-extrabold tracking-tight lg:text-5xl lg:leading-tight">
              Transforme seu corpo e sua mente na Clínica Layse Felix
            </h1>
            <p className="leading-7 text-muted-foreground md:text-lg">
              Na Clínica Layse Felix, cuidamos de você unindo práticas modernas
              e personalizadas para promover o bem-estar físico e mental.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Button>Matricular-se</Button>
              <Button variant="outline">Agendar aula experimental</Button>
            </div>
          </MotionDiv>

          <MotionDiv
            initial="toBottomOffScreen"
            whileInView="toBottomOnScreen"
            viewport={animationConfig.viewport}
            variants={animationConfig.variants}
            className="relative mx-auto w-fit"
          >
            <div className="absolute bottom-auto left-auto top-0 -z-10 h-[400px] w-[400px] -translate-x-[30%] translate-y-[40%] rounded-full bg-primary opacity-20 blur-[80px]"></div>
            <div className="absolute right-0 top-0 -z-10 h-[250px] w-[250px] -translate-y-[10%] translate-x-[40%] rounded-full bg-primary opacity-25 blur-[40px]"></div>
            <Image
              priority
              src="/images/clinica-layse-felix-hero-img.webp"
              alt="Professora de Pilates da Clínica Layse Félix fazendo exercício"
              width={420}
              height={420}
              className="mx-auto rounded-2xl border border-primary/40"
            />
          </MotionDiv>
        </div>
      </WidthWrapper>
    </section>
  )
}

export default HeroSection
