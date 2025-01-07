import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { WidthWrapper } from '@/components/width-wrapper'
import { Instagram, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className="my-12 md:my-20 md:px-16">
        <WidthWrapper>
          <div className="grid grid-cols-1 gap-12 xl:grid-cols-2 xl:gap-20">
            <div className="mx-auto flex max-w-prose flex-col items-center justify-center gap-4 text-pretty text-center xl:max-w-lg xl:items-start xl:text-start">
              <h1 className="text-3xl font-extrabold tracking-tight lg:text-5xl lg:leading-tight">
                Transforme seu corpo e sua mente na Clínica Layse Felix
              </h1>
              <p className="leading-7 text-muted-foreground md:text-lg">
                Na Clínica Layse Felix, cuidamos de você unindo práticas
                modernas e personalizadas para promover o bem-estar físico e
                mental.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Button>Matricular-se</Button>
                <Button variant="outline">Agendar aula experimental</Button>
              </div>
            </div>

            <div className="relative mx-auto w-fit">
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
            </div>
          </div>
        </WidthWrapper>
      </section>

      <section className="py-12 md:py-24">
        <WidthWrapper>
          <div className="mx-auto flex w-full max-w-prose flex-col items-center justify-center gap-8">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold md:text-4xl">
                Perguntas Frequentes
              </h2>
              <p className="text-muted-foreground">
                Tem dúvidas sobre nossos serviços? Confira as perguntas mais
                frequentes sobre nossos atendimentos, como pilates, fisioterapia
                e outros serviços.
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Como funcionam os atendimentos de pilates?
                </AccordionTrigger>
                <AccordionContent>
                  Os atendimentos de Pilates são personalizados e realizados em
                  pequenos grupos ou de forma individual, dependendo da sua
                  necessidade. Nossos profissionais qualificados irão avaliar
                  seu perfil e criar um plano de exercícios adequado para
                  melhorar sua postura, flexibilidade e força, sempre
                  respeitando seus limites.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Como funciona a fisioterapia na clínica?
                </AccordionTrigger>
                <AccordionContent>
                  A fisioterapia é realizada com base em uma avaliação detalhada
                  do paciente, para entender suas queixas e necessidades
                  específicas. Nossos profissionais utilizam técnicas modernas e
                  equipamentos avançados para auxiliar na reabilitação e na
                  melhora da qualidade de vida. As sessões podem ser individuais
                  ou em grupo, conforme o tratamento indicado.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Qual é a duração das sessões de pilates e fisioterapia?
                </AccordionTrigger>
                <AccordionContent>
                  As sessões de Pilates têm duração média de 50 minutos a 1
                  hora, enquanto as sessões de fisioterapia podem variar
                  dependendo do tratamento, geralmente entre 40 minutos a 1
                  hora.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Como agendar minha primeira consulta?
                </AccordionTrigger>
                <AccordionContent>
                  Agendar é simples! Você pode entrar em contato conosco pelo
                  telefone, WhatsApp ou Instagram, informando a área de
                  interesse. Nossa equipe estará pronta para ajudá-lo a escolher
                  o melhor horário.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </WidthWrapper>
      </section>

      <section
        className="rounded-t-3xl bg-[#ece9f7] px-1 py-12 md:px-16 md:py-24"
        id="contato"
      >
        <WidthWrapper>
          <div className="flex flex-1 flex-col items-center justify-between gap-6 lg:flex-row">
            <div className="flex flex-col gap-4">
              <p className="text-base font-bold">ENTRE EM CONTATO</p>
              <h2 className="text-4xl font-bold">Fale conosco</h2>
              <p>
                Estamos situados na Trav. Cônego Leitão, 1639, Castanhal,
                Brasil. Venha nos fazer uma visita!
              </p>
              <div className="flex w-full justify-between gap-4 md:justify-normal">
                <Link href="https://wa.me/5591983102506">
                  <Button>
                    <Phone />
                    (91) 98310-2506
                  </Button>
                </Link>
                <Link href="https://instagram.com/clinicalaysefelix">
                  <Button>
                    <Instagram />
                    @clinicalaysefelix
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex h-full w-full flex-1 items-center md:h-72 md:max-w-xl">
              <iframe
                title="Localização da Clínica Layse Felix"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7947814070544!2d-47.929837624172436!3d-1.2978441356406423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a5af514f63ea9d%3A0x548d0aab8543cc99!2sCl%C3%ADnica%20Layse%20Felix!5e0!3m2!1spt-BR!2sbr!4v1736211289362!5m2!1spt-BR!2sbr"
                className="min-h-full w-full rounded-2xl focus:outline-none"
              />
            </div>
          </div>
        </WidthWrapper>
      </section>
    </>
  )
}
