export const siteConfig = {
  name: 'Clínica Layse Félix',
  url: 'https://clinicalaysefelix.com.br',
  ogImage: 'https://clinicalaysefelix.com.br/og.jpg',
  description:
    'Acreditamos que a verdadeira saúde e bem-estar vêm da harmonia entre o corpo e a mente.',
  links: {
    instagram: 'https://www.instagram.com/clinicalaysefelix/',
    whatsapp:
      'https://api.whatsapp.com/message/5LRJLJG4XV72H1?autoload=1&app_absent=0',
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
      href: 'https://api.whatsapp.com/message/5LRJLJG4XV72H1?autoload=1&app_absent=0',
      target: '_blank',
    },
  ],
}

export type SiteConfig = typeof siteConfig
