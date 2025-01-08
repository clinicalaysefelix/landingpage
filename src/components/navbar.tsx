'use client'

import { Button, buttonVariants } from '@/components/ui/button'
import { siteConfig } from '@/config'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { WidthWrapper } from './width-wrapper'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Logo } from '@/assets/icons/logo'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full bg-background backdrop-blur transition-all supports-[backdrop-filter]:bg-background/90',
      )}
    >
      <WidthWrapper margin="none">
        <nav className="flex h-16 items-center justify-between md:h-20">
          <Link href="/" target="_top">
            <Logo className="h-fit w-12 md:w-16" />
            <span className="sr-only">Clínica Layse Félix</span>
          </Link>

          <div className="hidden md:flex md:gap-8">
            <ul className="flex items-center gap-6">
              {siteConfig.mainNav.map((link, i, { length }) => (
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

          <Sheet onOpenChange={setIsOpen} open={isOpen}>
            <SheetTrigger asChild>
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
            </SheetTrigger>
            <SheetContent side="top">
              <SheetHeader className="hidden">
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>Menu de navegação do site</SheetDescription>
              </SheetHeader>
              <ul className="my-8 flex flex-col items-center gap-6">
                {siteConfig.mainNav.map((link, i, { length }) => (
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
            </SheetContent>
          </Sheet>
        </nav>
      </WidthWrapper>
    </header>
  )
}
