import { LogoFullMono } from '@/assets/icons/logo-full-mono'
import React from 'react'
import { WidthWrapper } from './width-wrapper'
import { siteConfig } from '@/config'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-sky-950">
      <WidthWrapper margin="none" className="py-6 md:py-12">
        <div className="flex flex-col items-center justify-between gap-6 font-primary font-medium text-white lg:flex-row">
          <LogoFullMono className="h-fit w-48" />
          <nav className="static lg:absolute lg:right-1/2 lg:translate-x-1/2">
            <ul className="flex flex-col items-center gap-4 md:flex-row md:items-start">
              {siteConfig.mainNav.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} target={link.target}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p>© 2024 Studio Layse Felix</p>
        </div>
      </WidthWrapper>
    </footer>
  )
}

export default Footer
