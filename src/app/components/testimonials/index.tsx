import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import { WidthWrapper } from '@/components/width-wrapper'

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote:
        'Clínica maravilhosa, ambiente agradável e acolhedor composta de profissionais de altíssimo nível. Parabéns Drª Layse Félix.',
      name: 'Walax Batista',
      title: 'Paciente de Fisioterapia',
      photo: '/images/walax-batista.webp',
    },
    {
      quote:
        'Clínica muito boa, tem descontos, que é ótimo!! A Fisio Layse é ótima e o atendente Marcelo é super legal! Indico muito!',
      name: 'Andrezza Anjos',
      title: 'Aluna de Pilates',
      photo: '/images/andrezza-anjos.webp',
    },
    {
      quote:
        'Clinica excelente que dispõe de profissionais extremamente qualificados, serviços de qualidade, respeito com o paciente, local apropriado.',
      name: 'Edriane Costa',
      title: 'Paciente de Fisioterapia',
      photo: '/images/edriane-costa.webp',
    },
    {
      quote:
        'Ambiente super aconchegante e profissionais de extrema competência, recomendo demais pra quem quer um serviço de qualidade! 👏',
      name: 'Karol Wojtyla',
      title: 'Aluno de Pilates',
      photo: '/images/karol-wojtyla.webp',
    },
    {
      quote:
        'Excelente atendimento e serviços fisioterapêuticos (incluindo pilates) da Drª Layse, profissional de muitíssima competência e preparação para lidar com os desafios que a profissão exige.',
      name: 'Wagner Medeiros',
      title: 'Paciente de Fisioterapia',
      photo: '/images/wagner-medeiros.webp',
    },
  ]

  return (
    <section id="avaliacoes" className="scroll-m-28">
      <WidthWrapper>
        <div className="mb-4 flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-base font-bold text-indigo-900">
            AVALIAÇÃO DOS CLIENTES
          </p>
          <h2>
            Conheça as incríveis experiências de
            <br />
            clientes com nossos serviços
          </h2>
        </div>
        <InfiniteMovingCards items={testimonials} speed="normal" />
      </WidthWrapper>
    </section>
  )
}

export default Testimonials
