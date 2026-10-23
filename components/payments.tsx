import { whatsappLink } from '@/lib/site'

const ITEMS = [
  { title: '20% OFF', text: 'pagando en efectivo o transferencia' },
  { title: '3 cuotas', text: 'sin interés con tarjeta' },
  { title: 'Hasta 12', text: 'cuotas con tarjeta de crédito' },
  { title: 'Envío gratis', text: 'en CABA y en compras grandes a todo el país' },
]

export function Payments() {
  return (
    <section aria-label="Formas de pago" className="bg-beige py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((i) => (
            <li key={i.title}>
              <p className="font-heading text-3xl font-medium text-grafito">{i.title}</p>
              <p className="mt-1 text-sm text-grafito/75">{i.text}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-col gap-4 border-t border-grafito/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-grafito/80">Consultanos todas las opciones de pago vigentes.</p>
          <a
            href={whatsappLink('Hola Casa Nórdica, quiero consultar las formas de pago.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-grafito px-6 py-3 text-sm font-semibold text-white hover:bg-grafito/90"
          >
            Consultar financiación
          </a>
        </div>
      </div>
    </section>
  )
}
