import { FileText, MessageCircle, Ruler, Truck } from 'lucide-react'
import { whatsappLink } from '@/lib/site'

const STEPS = [
  { icon: MessageCircle, title: 'Mandanos un mensaje', text: 'Pasanos ancho y alto en centímetros y, si podés, una foto de la ventana.', color: 'bg-oliva' },
  { icon: FileText, title: 'Recibí tu presupuesto', text: 'Te orientamos con telas, colores y sistema, con precio de taller.', color: 'bg-taupe' },
  { icon: Truck, title: 'Confeccionamos y entregamos', text: 'Retirás en el showroom, te la enviamos o la instalamos nosotros.', color: 'bg-grafito' },
]

export function Steps() {
  return (
    <section id="como-funciona" className="scroll-mt-24 bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-taupe">Cómo funciona</p>
        <h2 className="mt-3 max-w-2xl text-balance text-3xl font-medium tracking-tight text-grafito sm:text-4xl">
          Tu cortina nueva en 3 pasos simples
        </h2>
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map(({ icon: Icon, title, text, color }, i) => (
            <li key={title} className="rounded-2xl border border-border bg-background p-6">
              <span className={`flex size-12 items-center justify-center rounded-xl text-white ${color}`}>
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-taupe">Paso {i + 1}</p>
              <h3 className="mt-2 text-xl font-medium text-grafito">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-col gap-6 rounded-2xl border border-beige bg-arena/60 p-6 md:flex-row md:items-center">
          <Ruler className="size-10 shrink-0 text-taupe" aria-hidden="true" />
          <div className="flex-1">
            <h3 className="font-semibold text-grafito">¿Cómo tomar la medida para una roller?</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Medí el ancho y el alto del marco en centímetros y sumale unos 10 cm por lado al ancho, así
              la cortina cubre bien los bordes y no se filtra luz. Si tenés dudas, te acompañamos por
              WhatsApp o videollamada.
            </p>
          </div>
          <a
            href={whatsappLink('Hola Casa Nórdica, necesito ayuda para medir mi ventana.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center rounded-full border-2 border-grafito px-5 py-2.5 text-sm font-semibold text-grafito hover:bg-grafito hover:text-white"
          >
            Ayudame a medir
          </a>
        </div>
      </div>
    </section>
  )
}
