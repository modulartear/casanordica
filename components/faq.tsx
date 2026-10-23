import { Plus } from 'lucide-react'

const FAQS = [
  { q: '¿Cuánto demora la confección?', a: 'Las medidas estándar están disponibles para entrega inmediata. Las cortinas a medida se entregan en unos 15 días hábiles.' },
  { q: '¿Hacen la medición y la instalación?', a: 'Sí, en CABA y GBA nuestro equipo mide y coloca las cortinas. Si estás en otra provincia, te guiamos a distancia por WhatsApp o videollamada.' },
  { q: '¿Cómo mido mi ventana?', a: 'Tomá el ancho y el alto del marco en centímetros y agregá aproximadamente 10 cm de cada lado al ancho. Ante cualquier duda, te ayudamos.' },
  { q: '¿En qué se diferencian Black Out y Sun Screen?', a: 'Black Out bloquea la luz casi por completo y brinda privacidad total. Sun Screen filtra el sol y los rayos UV sin perder la vista ni la claridad. El sistema doble combina ambas.' },
  { q: '¿Envían a todo el país?', a: 'Sí, despachamos con embalaje reforzado para que tu cortina llegue en perfecto estado y lista para instalar.' },
  { q: '¿Qué medios de pago aceptan?', a: 'Efectivo, transferencia con descuento, y tarjetas de crédito en cuotas. Consultanos las promociones vigentes al momento de tu compra.' },
  { q: '¿Tienen garantía? ¿Emiten factura?', a: 'Todas las cortinas tienen 2 años de garantía. Emitimos factura A y B, y ofrecemos condiciones especiales para obras y proyectos.' },
  { q: '¿Trabajan con arquitectos y empresas?', a: 'Sí, tenemos condiciones especiales para estudios, constructoras, revendedores y empresas. Escribinos para recibir una propuesta.' },
]

export function Faq() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-balance text-center text-3xl font-medium tracking-tight text-grafito sm:text-4xl">
          Preguntas frecuentes
        </h2>
        <div className="mt-10 divide-y divide-border border-y border-border">
          {FAQS.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-grafito [&::-webkit-details-marker]:hidden">
                {f.q}
                <Plus className="size-5 shrink-0 text-taupe transition-transform group-open:rotate-45" aria-hidden="true" />
              </summary>
              <p className="mt-3 leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
