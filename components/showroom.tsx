import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { SITE, whatsappLink } from '@/lib/site'

export function Showroom() {
  return (
    <section id="showroom" className="scroll-mt-24 bg-arena py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-taupe">Showroom</p>
          <h2 className="mt-3 text-balance text-3xl font-medium tracking-tight text-grafito sm:text-4xl">
            Visitanos o escribinos
          </h2>
          <p className="mt-4 leading-relaxed text-grafito/80">
            En nuestro showroom podés ver y tocar las telas, probar los mecanismos y recibir
            asesoramiento personalizado. Coordiná tu visita por WhatsApp. ¿Estás lejos? Te asesoramos
            a distancia y enviamos a todo el país.
          </p>
          <a
            href={whatsappLink('Hola Casa Nórdica, quiero coordinar una visita al showroom.')}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-oliva px-6 py-3 font-semibold text-white hover:bg-oliva/90"
          >
            <MessageCircle className="size-5" aria-hidden="true" />
            Coordinar visita
          </a>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          <li className="rounded-2xl bg-white p-6">
            <MapPin className="size-6 text-taupe" aria-hidden="true" />
            <h3 className="mt-3 font-semibold text-grafito">Showroom y taller</h3>
            <p className="mt-1 text-sm text-muted-foreground">{SITE.address}</p>
          </li>
          <li className="rounded-2xl bg-white p-6">
            <Clock className="size-6 text-taupe" aria-hidden="true" />
            <h3 className="mt-3 font-semibold text-grafito">Horarios</h3>
            <p className="mt-1 text-sm text-muted-foreground">Lun a Vie 9 a 18 hs · Sáb 9 a 13 hs</p>
          </li>
          <li className="rounded-2xl bg-white p-6">
            <Phone className="size-6 text-taupe" aria-hidden="true" />
            <h3 className="mt-3 font-semibold text-grafito">Teléfono</h3>
            <p className="mt-1 text-sm text-muted-foreground">{SITE.phoneLabel}</p>
          </li>
          <li className="rounded-2xl bg-white p-6">
            <Mail className="size-6 text-taupe" aria-hidden="true" />
            <h3 className="mt-3 font-semibold text-grafito">Email</h3>
            <a href={`mailto:${SITE.email}`} className="mt-1 block text-sm text-muted-foreground hover:text-taupe">
              {SITE.email}
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
