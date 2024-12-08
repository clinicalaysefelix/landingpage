'use client'

import { Button, buttonVariants } from '@/components/ui/button'
import { siteConfig } from '@/config'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { WidthWrapper } from './width-wrapper'

const LINKS = [
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
    href: siteConfig.links.whatsapp,
    target: '_blank',
  },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 w-full">
      <WidthWrapper>
        <nav className="flex h-16 items-center justify-between md:h-20">
          <Link href="/" target="_top">
            <span className="text-xl font-bold text-primary">SLF</span>
          </Link>

          <div
            className={cn(
              'md:gap-8',
              isOpen
                ? 'absolute inset-x-0 top-16 z-20 flex-col bg-muted/30 px-3 py-6 md:static md:top-20 md:bg-transparent md:p-0'
                : 'hidden md:flex',
            )}
          >
            <ul
              className={cn(
                'flex flex-col items-center gap-5 md:flex-row md:items-center md:gap-6',
              )}
            >
              {LINKS.map((link, i, { length }) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    target={link.target}
                    className={cn(
                      'font-medium transition-colors',
                      i === length - 1
                        ? buttonVariants()
                        : 'hover:text-primary',
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Button
            size="icon"
            variant="ghost"
            className="group md:hidden"
            data-open={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <X className="rotate-90 scale-0 transition-all group-data-[open=true]:rotate-0 group-data-[open=true]:scale-100" />
            <Menu className="group-data-[open=true]:rotate-100 absolute rotate-0 scale-100 transition-all group-data-[open=true]:scale-0" />
          </Button>
        </nav>
      </WidthWrapper>
    </header>
  )
}
