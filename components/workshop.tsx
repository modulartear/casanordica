import Image from 'next/image'
import { BadgeDollarSign, Headset, ScanSearch, Sparkles } from 'lucide-react'

const STATS = [
  { value: '+15', label: 'años confeccionando' },
  { value: '2 años', label: 'de garantía' },
  { value: '100%', label: 'hecho en taller propio' },
]

const BENEFITS = [
  { icon: BadgeDollarSign, title: 'Precio justo', text: 'Sin intermediarios que encarezcan tu cortina.' },
  { icon: ScanSearch, title: 'Calidad revisada', text: 'Controlamos cada pieza antes de entregarla.' },
  { icon: Headset, title: 'Atención directa', text: 'Hablás con quienes la confeccionaron.' },
  { icon: Sparkles, title: 'A tu gusto', text: 'Medidas y pedidos especiales sin problema.' },
]

export function Workshop() {
  return (
    <section className="bg-grafito py-20 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src="/images/taller.png"
            alt="Artesana midiendo tela para una cortina roller en el taller de Casa Nórdica"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <dl className="grid grid-cols-3 gap-4 border-b border-white/15 pb-8">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-heading text-3xl font-medium text-beige sm:text-4xl">{s.value}</dd>
                <dd className="mt-1 text-sm text-white/70">{s.label}</dd>
              </div>
            ))}
          </dl>
          <h2 className="mt-8 text-balance text-3xl font-medium tracking-tight sm:text-4xl">
            Comprar en el taller marca la diferencia
          </h2>
          <p className="mt-4 leading-relaxed text-white/75">
            Diseñamos y confeccionamos cada cortina en nuestro propio taller. Sin intermediarios, el
            ahorro y la respuesta rápida son para vos.
          </p>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {BENEFITS.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-3">
                <Icon className="mt-0.5 size-6 shrink-0 text-oliva" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-white/70">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
