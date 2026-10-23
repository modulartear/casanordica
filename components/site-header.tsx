'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Menu, MessageCircle, X } from 'lucide-react'
import { whatsappLink } from '@/lib/site'

const NAV = [
  { href: '#cotizador', label: 'Cotizador' },
  { href: '#cortinas', label: 'Cortinas' },
  { href: '#otros-productos', label: 'Otros productos' },
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#showroom', label: 'Showroom' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="bg-taupe px-4 py-2 text-center text-xs font-medium text-white sm:text-sm">
        Taller propio · 20% OFF en efectivo o transferencia · Envíos a todo el país
      </div>
      <header className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#" aria-label="Casa Nórdica, inicio" className="shrink-0">
            <Image
              src="/images/logo-casa-nordica.png"
              alt="Casa Nórdica"
              width={180}
              height={90}
              className="h-14 w-auto"
              priority
            />
          </a>
          <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-grafito transition-colors hover:text-taupe"
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappLink('Hola Casa Nórdica, quiero consultar por cortinas.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-oliva px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-oliva/90"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              WhatsApp
            </a>
          </nav>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-md text-grafito md:hidden"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
        {open && (
          <nav aria-label="Móvil" className="border-t border-border bg-white px-4 pb-4 md:hidden">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-border py-3 text-base font-medium text-grafito"
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappLink('Hola Casa Nórdica, quiero consultar por cortinas.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-oliva px-5 py-3 font-semibold text-white"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Escribinos por WhatsApp
            </a>
          </nav>
        )}
      </header>
    </>
  )
}
