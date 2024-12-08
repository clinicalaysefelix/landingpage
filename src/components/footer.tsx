import { LogoFullMono } from '@/assets/icons'
import React from 'react'

interface FooterProps {
  className?: string
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer className={`mx-auto w-full bg-sky-950 px-20 py-10 ${className}`}>
      <div className="flex flex-col items-center justify-between gap-6 font-primary font-medium text-white md:flex-row">
        <LogoFullMono color="white" />
        <nav>
          <ul className="flex flex-col gap-4 md:flex-row">
            <li>Serviços</li>
            <li>Avaliações</li>
            <li>Contato</li>
          </ul>
        </nav>
        <p>© 2024 Studio Layse Felix</p>
      </div>
    </footer>
  )
}

export default Footer
