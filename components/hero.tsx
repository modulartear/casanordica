import Image from 'next/image'
import { CreditCard, ShieldCheck, Truck } from 'lucide-react'
import { QuoteForm } from './quote-form'

const PERKS = [
  { icon: ShieldCheck, label: '2 años de garantía' },
  { icon: Truck, label: 'Envíos a todo el país' },
  { icon: CreditCard, label: 'Cuotas sin interés' },
]

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src="/images/hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-grafito/90 via-grafito/70 to-grafito/30" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:py-24">
        <div className="text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest">
            <span className="size-2 rounded-full bg-oliva" aria-hidden="true" />
            Asesoramiento personalizado
          </span>
          <h1 className="mt-6 text-balance text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Cortinas roller a medida, <span className="text-beige">con diseño nórdico.</span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/85">
            Contanos qué modelo te gusta y cuánto mide tu ventana. Te respondemos por WhatsApp con un
            presupuesto claro, hecho por el mismo equipo que confecciona tu cortina.
          </p>
          <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            {PERKS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm font-medium">
                <Icon className="size-5 text-beige" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-xl border-l-2 border-taupe pl-4 text-sm leading-relaxed text-white/75">
            Hogares, estudios de arquitectura y espacios de trabajo eligen nuestras cortinas para
            sumar luz y calidez a cada ambiente.
          </p>
        </div>
        <QuoteForm />
      </div>
    </section>
  )
}
