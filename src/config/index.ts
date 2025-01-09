const whatsappLink = 'https://wa.me/5591983102506'

export const siteConfig = {
  name: 'Clínica Layse Félix',
  url: 'https://clinicalaysefelix.com.br',
  ogImage: 'https://clinicalaysefelix.com.br/og.jpg',
  description:
    'Acreditamos que a verdadeira saúde e bem-estar vêm da harmonia entre o corpo e a mente.',
  links: {
    instagram: 'https://instagram.com/clinicalaysefelix',
    whatsapp: whatsappLink,
  },
  mainNav: [
    {
      name: 'Serviços',
      href: '#servicos',
      target: '_self',
    },
    {
      name: 'Avaliações',
      href: '#avaliacoes',
      target: '_self',
    },
    {
      name: 'Contato',
      href: '#contato',
      target: '_self',
    },
    {
      name: 'Matricular-se',
      href: whatsappLink,
      target: '_blank',
    },
  ],
}

export type SiteConfig = typeof siteConfig
