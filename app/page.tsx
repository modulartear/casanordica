import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { TrustStrip } from '@/components/trust-strip'
import { Products } from '@/components/products'
import { Steps } from '@/components/steps'
import { Workshop } from '@/components/workshop'
import { Payments } from '@/components/payments'
import { Testimonials } from '@/components/testimonials'
import { Faq } from '@/components/faq'
import { Showroom } from '@/components/showroom'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TrustStrip />
        <Products />
        <Steps />
        <Workshop />
        <Payments />
        <Testimonials />
        <Faq />
        <Showroom />
      </main>
      <SiteFooter />
    </>
  )
}
