import Image from 'next/image'
import { ArrowRight, Check, HelpCircle } from 'lucide-react'
import { whatsappLink } from '@/lib/site'

const PRODUCTS = [
  { tag: 'Descanso', title: 'Roller Black Out', text: 'Oscurecen por completo y protegen del sol. Pensadas para dormitorios.', img: '/images/blackout.png' },
  { tag: 'Luz natural', title: 'Roller Sun Screen', text: 'Tamizan el sol y los rayos UV manteniendo la vista hacia afuera.', img: '/images/sunscreen.png' },
  { tag: 'Versatilidad', title: 'Roller Doble', text: 'Dos telas en un mismo soporte para regular la luz a cada hora.', img: '/images/doble.png' },
  { tag: 'Calidez', title: 'Roller Rústica', text: 'Tramas con aspecto de lino que suavizan y abrigan el ambiente.', img: '/images/rustica.png' },
  { tag: 'Diseño', title: 'Roller Día y Noche', text: 'Franjas alternadas que permiten graduar la luz con un solo gesto.', img: '/images/devon.png' },
  { tag: 'Personalidad', title: 'Roller Translúcida', text: 'Luz difusa y envolvente para rincones con estilo propio.', img: '/images/translucida.png' },
  { tag: 'Elegancia', title: 'Cortinas de Tela', text: 'Lino, voile y gasas en caída natural para una ventana serena.', img: '/images/tela.png' },
]

const FEATURES = ['Taller propio', 'Hechas a tu medida', 'Amplia paleta de colores', 'Manual o motorizada']

export function Products() {
  return (
    <section id="cortinas" className="scroll-mt-24 bg-background py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-taupe">Nuestra colección</p>
            <h2 className="mt-3 text-balance text-3xl font-medium tracking-tight text-grafito sm:text-4xl">
              Cortinas roller y de tela para cada rincón de tu casa
            </h2>
          </div>
          <div>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Telas con protección UV en tonos naturales y texturas suaves, confeccionadas a la medida
              exacta de cada ventana.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {FEATURES.map((f) => (
                <li key={f} className="inline-flex items-center gap-1.5 rounded-full bg-arena px-3 py-1.5 text-sm text-grafito">
                  <Check className="size-4 text-oliva" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p) => (
            <li key={p.title} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.img}
                  alt={`Cortina ${p.title} instalada en un ambiente`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="text-xs font-semibold uppercase tracking-widest text-taupe">{p.tag}</span>
                <h3 className="mt-2 text-xl font-medium text-grafito">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                <a
                  href={whatsappLink(`Hola Casa Nórdica, quiero consultar por ${p.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-oliva hover:underline"
                >
                  Consultar por WhatsApp
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </div>
            </li>
          ))}
          <li className="flex flex-col justify-between rounded-2xl bg-beige p-6">
            <div>
              <HelpCircle className="size-10 text-grafito" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-medium text-grafito">¿Te cuesta decidir?</h3>
              <p className="mt-2 text-sm leading-relaxed text-grafito/80">
                Decinos qué ambiente querés vestir y cuánta luz recibe. Te sugerimos la tela ideal.
              </p>
            </div>
            <a
              href={whatsappLink('Hola Casa Nórdica, necesito ayuda para elegir mi cortina.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-grafito px-5 py-3 text-sm font-semibold text-white hover:bg-grafito/90"
            >
              Quiero asesoramiento
            </a>
          </li>
        </ul>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-grafito p-8 text-white">
            <h3 className="text-2xl font-medium">Cortinas a medida</h3>
            <p className="mt-3 leading-relaxed text-white/80">
              Confeccionadas para tus ventanas, con el sistema, la tela y el color que elijas.
            </p>
            <ul className="mt-6 flex flex-col gap-3 text-sm">
              {['Entrega estimada en 15 días hábiles', 'Medición e instalación en CABA y GBA', 'Accionamiento manual o motorizado'].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="size-4 text-beige" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-arena p-8">
            <h3 className="text-2xl font-medium text-grafito">Medidas estándar en stock</h3>
            <p className="mt-3 leading-relaxed text-grafito/80">
              Black Out y Sun Screen listas para llevar, sin esperas.
            </p>
            <ul className="mt-6 flex flex-col gap-3 text-sm text-grafito">
              {['Retiro en showroom o envío', 'Despachos a todo el país', 'Te ayudamos a elegir la medida justa'].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="size-4 text-oliva" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
