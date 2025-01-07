import Contact from './components/contact'
import FAQ from './components/faq'
import Testimonials from './components/testimonials'
import HeroSection from './components/hero-section'
import Services from './components/services'

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  )
}
