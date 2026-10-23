import Image from 'next/image'
import { MessageCircle } from 'lucide-react'
import { SITE, whatsappLink } from '@/lib/site'

export function SiteFooter() {
  return (
    <>
      <footer className="bg-grafito text-white/80">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
          <div>
            <div className="inline-block rounded-xl bg-white p-3">
              <Image src="/images/logo-casa-nordica.png" alt="Casa Nórdica" width={160} height={80} className="h-12 w-auto" />
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Cortinas roller y de tela a medida, con diseño nórdico y calidez para tu hogar.
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-white">Contacto</h2>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              <li>WhatsApp {SITE.whatsappLabel}</li>
              <li>Teléfono {SITE.phoneLabel}</li>
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-beige">{SITE.email}</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-white">Navegación</h2>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              <li><a href="#cotizador" className="hover:text-beige">Cotizador</a></li>
              <li><a href="#cortinas" className="hover:text-beige">Cortinas</a></li>
              <li><a href="#como-funciona" className="hover:text-beige">Cómo funciona</a></li>
              <li><a href="#showroom" className="hover:text-beige">Showroom</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-white">Seguinos</h2>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              <li><a href="#" className="hover:text-beige">Instagram</a></li>
              <li><a href="#" className="hover:text-beige">Facebook</a></li>
              <li><a href="#" className="hover:text-beige">Pinterest</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-6 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Casa Nórdica · Todos los derechos reservados.
        </div>
      </footer>
      <a
        href={whatsappLink('Hola Casa Nórdica, quiero consultar por cortinas.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribinos por WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-oliva text-white shadow-lg shadow-grafito/30 transition-transform hover:scale-105"
      >
        <MessageCircle className="size-7" aria-hidden="true" />
      </a>
    </>
  )
}
