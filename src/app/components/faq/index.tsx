import { WidthWrapper } from '@/components/width-wrapper'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { animationConfig } from '@/lib/animation'
import { MotionDiv } from '@/components/motion/motion-div'

const QUESTIONS = [
  {
    question: 'Como funcionam os atendimentos de pilates?',
    answer:
      'Os atendimentos de Pilates são personalizados e realizados em pequenos grupos ou de forma individual, dependendo da sua necessidade. Nossos profissionais qualificados irão avaliar seuperfil e criar um plano de exercícios adequado para melhorar sua postura, flexibilidade e força, sempre respeitando seus limites.',
  },
  {
    question: 'Como funciona a fisioterapia na clínica?',
    answer:
      'A fisioterapia é realizada com base em uma avaliação detalhada do paciente, para entender suas queixas e necessidades específicas. Nossos profissionais utilizam técnicas modernas e equipamentos avançados para auxiliar na reabilitação e na melhora da qualidade de vida. As sessões podem ser individuais ou em grupo, conforme o tratamento indicado.',
  },
  {
    question: 'Qual é a duração das sessões de pilates e fisioterapia?',
    answer:
      'As sessões de Pilates têm duração média de 50 minutos a 1 hora, enquanto as sessões de fisioterapia podem variar dependendo do tratamento, geralmente entre 40 minutos a 1 hora.',
  },
  {
    question: 'Como agendar minha primeira consulta?',
    answer:
      'Agendar é simples! Você pode entrar em contato conosco pelo telefone, WhatsApp ou Instagram, informando a área de interesse. Nossa equipe estará pronta para ajudá-lo a escolher o melhor horário.',
  },
]

const FAQ: React.FC = () => {
  return (
    <section>
      <WidthWrapper>
        <div className="mx-auto flex w-full max-w-prose flex-col items-center justify-center gap-8">
          <MotionDiv
            variants={animationConfig.variants}
            viewport={animationConfig.viewport}
            initial="toBottomOffScreen"
            whileInView="toBottomOnScreen"
            className="space-y-4 text-center"
          >
            <h2>Perguntas Frequentes</h2>
            <p className="text-muted-foreground">
              Tem dúvidas sobre nossos serviços? Confira as perguntas mais
              frequentes sobre nossos atendimentos, como pilates, fisioterapia e
              outros serviços.
            </p>
          </MotionDiv>

          <MotionDiv
            variants={animationConfig.variants}
            viewport={animationConfig.viewport}
            initial="toBottomOffScreen"
            whileInView="toBottomOnScreen"
            className="w-full"
          >
            <Accordion type="single" collapsible className="w-full">
              {QUESTIONS.map((question, i) => (
                <AccordionItem value={`item-${i}`} key={i}>
                  <AccordionTrigger>{question.question}</AccordionTrigger>
                  <AccordionContent>{question.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </MotionDiv>
        </div>
      </WidthWrapper>
    </section>
  )
}
export default FAQ
