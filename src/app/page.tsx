import Contact from './components/contact'
import FAQ from './components/faq'
import Testimonials from './components/testimonials'
import HeroSection from './components/hero-section'

export default function Home() {
  return (
    <>
      <HeroSection />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  )
}
