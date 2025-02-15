import { MotionDiv } from '@/components/motion/motion-div'
import { WidthWrapper } from '@/components/width-wrapper'
import { animationConfig } from '@/lib/animation'
import Image from 'next/image'
import { PiPersonSimple, PiPersonSimpleTaiChi } from 'react-icons/pi'

const Services: React.FC = () => {
  return (
    <section
      className="scroll-m-8 overflow-hidden rounded-t-3xl bg-section"
      id="servicos"
    >
      <WidthWrapper>
        <MotionDiv
          variants={animationConfig.variants}
          viewport={animationConfig.viewport}
          initial="toBottomOffScreen"
          whileInView="toBottomOnScreen"
          className="flex flex-col gap-4"
        >
          <p className="text-base font-bold text-indigo-900">NOSSOS SERVIÇOS</p>
          <h2>Saiba mais sobre nossos serviços</h2>
        </MotionDiv>
        <div className="mt-16 flex flex-col gap-8 md:flex-row md:items-center md:justify-center">
          <MotionDiv
            variants={animationConfig.variants}
            viewport={animationConfig.viewport}
            initial="toBottomOffScreen"
            whileInView="toBottomOnScreen"
            className="mx-auto max-h-[400px] max-w-[500px] overflow-hidden rounded-2xl border border-primary/40 md:order-2"
          >
            <Image
              src="/images/clinica-layse-felix-services-img.webp"
              alt="Professora de Pilates da Clínica Layse Félix fazendo exercício"
              width={1080}
              height={400}
              className="h-full object-cover"
            />
          </MotionDiv>
          <div className="flex flex-col gap-4 md:order-1">
            <MotionDiv
              variants={animationConfig.variants}
              viewport={animationConfig.viewport}
              initial="toBottomOffScreen"
              whileInView="toBottomOnScreen"
              className="flex justify-start gap-4 rounded-2xl bg-white p-4 md:items-center md:bg-transparent md:px-0"
            >
              <div className="align-center h-fit w-fit rounded-xl bg-indigo-900 p-2">
                <PiPersonSimple color="white" size={32} />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-foreground">
                  Fisioterapia
                </h4>
                <p className="text-base text-foreground">
                  Tratamentos personalizados para aliviar dores, recuperar
                  lesões e melhorar a mobilidade.
                </p>
              </div>
            </MotionDiv>

            <MotionDiv
              variants={animationConfig.variants}
              viewport={animationConfig.viewport}
              initial="toBottomOffScreen"
              whileInView="toBottomOnScreen"
              className="flex justify-start gap-4 rounded-2xl bg-white p-4 md:items-center md:bg-transparent md:px-0"
            >
              <div className="align-center h-fit w-fit rounded-xl bg-indigo-900 p-2">
                <PiPersonSimpleTaiChi color="white" size={32} />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-foreground">Pilates</h4>
                <p className="text-base text-foreground">
                  Aulas para todos os níveis que melhoram postura, força e
                  reduzem o estresse.
                </p>
              </div>
            </MotionDiv>
          </div>
        </div>
      </WidthWrapper>
    </section>
  )
}

export default Services
