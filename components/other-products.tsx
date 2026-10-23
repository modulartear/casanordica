'use client'

import Image from 'next/image'
import { useState } from 'react'
import {
  ArrowRight,
  Award,
  Droplets,
  FileText,
  Flame,
  Home,
  Leaf,
  Recycle,
  ShieldCheck,
  Sun,
  Volume2,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import { whatsappLink } from '@/lib/site'
import { cn } from '@/lib/utils'

type Variant = { name: string; swatch: string; img: string }
type Spec = { icon: LucideIcon; label: string; value?: string }

type Product = {
  id: string
  tag: string
  title: string
  description: string
  pickerLabel: string
  specs: Spec[]
  benefits: { icon: LucideIcon; label: string }[]
  variants: Variant[]
  sheet: string
}

const PRODUCTS: Product[] = [
  {
    id: 'baldosa-wpc',
    tag: 'Exteriores',
    title: 'Baldosa WPC',
    description:
      'Desarrolladas con materiales de alta calidad que imitan la apariencia de la madera natural. Una alternativa elegante, duradera y de bajo mantenimiento para terrazas, balcones y espacios exteriores.',
    pickerLabel: 'Elegí el color',
    specs: [
      { icon: Recycle, label: 'Material', value: 'WPC' },
      { icon: Award, label: 'Durabilidad', value: '15 a 20 años' },
      { icon: Sun, label: 'Protección UV', value: 'Sí' },
      { icon: Flame, label: 'Ignífugo', value: 'No' },
      { icon: Droplets, label: 'Impermeable', value: 'Sí' },
    ],
    benefits: [
      { icon: ShieldCheck, label: 'Alta calidad' },
      { icon: Wrench, label: 'Bajo mantenimiento' },
      { icon: Leaf, label: 'Amigable con el medio ambiente' },
      { icon: Home, label: 'Ideal para exteriores' },
    ],
    variants: [
      { name: 'Teca', swatch: '#A8673F', img: '/images/wpc-teca.png' },
      { name: 'Nogal', swatch: '#6B4630', img: '/images/wpc-nogal.png' },
      { name: 'Wengué', swatch: '#3E2A20', img: '/images/wpc-wengue.png' },
      { name: 'Gris', swatch: '#9A9893', img: '/images/wpc-gris.png' },
    ],
    sheet: '/fichas/baldosa-wpc.png',
  },
  {
    id: 'placas-autoadhesivas',
    tag: 'Interiores',
    title: 'Placas Autoadhesivas',
    description:
      'Permiten renovar paredes de forma rápida y sencilla, sin necesidad de obras. Su diseño moderno aporta estilo y luminosidad a cualquier ambiente interior.',
    pickerLabel: 'Elegí el diseño',
    specs: [
      { icon: Recycle, label: 'Material', value: 'Espuma de polietileno expandido' },
      { icon: Award, label: 'Durabilidad', value: '5 a 15 años' },
      { icon: Sun, label: 'Apto exterior', value: 'No' },
      { icon: Volume2, label: 'Aislante acústico', value: 'Sí' },
      { icon: Droplets, label: 'Impermeable', value: 'Sí' },
    ],
    benefits: [
      { icon: ShieldCheck, label: 'Alta calidad' },
      { icon: Leaf, label: 'Amigable con el medio ambiente' },
      { icon: Home, label: 'Ideal para interiores' },
    ],
    variants: [
      { name: 'Ladrillo blanco', swatch: '#F2F0EC', img: '/images/placa-ladrillo-blanco.png' },
      { name: 'Ladrillo gris', swatch: '#BDBBB7', img: '/images/placa-ladrillo-gris.png' },
      { name: 'Piedra arena', swatch: '#D6C4AD', img: '/images/placa-piedra.png' },
      { name: 'Madera roble', swatch: '#C9A57B', img: '/images/placa-madera.png' },
    ],
    sheet: '/fichas/placas-autoadhesivas.png',
  },
]

export function OtherProducts() {
  return (
    <section id="otros-productos" className="scroll-mt-24 bg-arena/50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-taupe">Más para tu hogar</p>
          <h2 className="mt-3 text-balance text-3xl font-medium tracking-tight text-grafito sm:text-4xl">
            Otros productos que comercializamos
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Soluciones para renovar pisos exteriores y paredes interiores con la misma calidez y
            asesoramiento de siempre. Explorá los diseños y colores disponibles.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-10">
          {PRODUCTS.map((p, i) => (
            <ProductShowcase key={p.id} product={p} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductShowcase({ product, reverse }: { product: Product; reverse: boolean }) {
  const [active, setActive] = useState(0)
  const variant = product.variants[active]

  return (
    <article
      id={product.id}
      aria-labelledby={`${product.id}-title`}
      className="scroll-mt-24 overflow-hidden rounded-3xl border border-border bg-white"
    >
      <div className={cn('flex flex-col lg:flex-row', reverse && 'lg:flex-row-reverse')}>
        <div className="flex flex-col gap-4 p-4 sm:p-6 lg:w-1/2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-arena">
            {product.variants.map((v, idx) => (
              <Image
                key={v.img}
                src={v.img}
                alt={`${product.title} en ${v.name}`}
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className={cn(
                  'object-cover transition-opacity duration-500',
                  idx === active ? 'opacity-100' : 'opacity-0',
                )}
              />
            ))}
            <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-grafito backdrop-blur">
              {variant.name}
            </span>
          </div>

          <div className="rounded-2xl bg-arena/60 p-4">
            <p id={`${product.id}-picker`} className="text-sm font-semibold text-grafito">
              {product.pickerLabel}
            </p>
            <div
              role="radiogroup"
              aria-labelledby={`${product.id}-picker`}
              className="mt-3 grid grid-cols-4 gap-3"
            >
              {product.variants.map((v, idx) => {
                const selected = idx === active
                return (
                  <button
                    key={v.name}
                    type="button"
                    role="radio"
                    aria-checked={selected}
                    onClick={() => setActive(idx)}
                    className="group flex flex-col items-center gap-2 rounded-xl p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-oliva"
                  >
                    <span
                      className={cn(
                        'relative block aspect-square w-full overflow-hidden rounded-lg ring-2 ring-offset-2 ring-offset-arena transition',
                        selected ? 'ring-grafito' : 'ring-transparent group-hover:ring-beige',
                      )}
                    >
                      <Image src={v.img} alt="" fill sizes="96px" className="object-cover" />
                      <span
                        aria-hidden="true"
                        className="absolute bottom-1 right-1 size-4 rounded-full border border-white shadow"
                        style={{ backgroundColor: v.swatch }}
                      />
                    </span>
                    <span
                      className={cn(
                        'text-center text-xs leading-tight',
                        selected ? 'font-semibold text-grafito' : 'text-muted-foreground',
                      )}
                    >
                      {v.name}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col p-6 sm:p-8 lg:w-1/2">
          <span className="text-xs font-semibold uppercase tracking-widest text-taupe">
            Ficha técnica · {product.tag}
          </span>
          <h3 id={`${product.id}-title`} className="mt-2 text-3xl font-medium text-grafito">
            {product.title}
          </h3>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{product.description}</p>

          <dl className="mt-6 flex flex-col divide-y divide-border border-y border-border">
            {product.specs.map((s) => (
              <div key={s.label} className="flex items-center gap-4 py-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-arena text-taupe">
                  <s.icon className="size-5" aria-hidden="true" />
                </span>
                <dt className="text-sm font-semibold text-grafito">{s.label}</dt>
                <dd className="ml-auto text-right text-sm text-grafito/80">{s.value}</dd>
              </div>
            ))}
          </dl>

          <ul className="mt-6 flex flex-wrap gap-2">
            {product.benefits.map((b) => (
              <li
                key={b.label}
                className="inline-flex items-center gap-1.5 rounded-full bg-oliva/10 px-3 py-1.5 text-sm text-grafito"
              >
                <b.icon className="size-4 text-oliva" aria-hidden="true" />
                {b.label}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-auto lg:pt-8">
            <a
              href={whatsappLink(
                `Hola Casa Nórdica, quiero consultar por ${product.title} en ${variant.name}.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-oliva px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-oliva/90"
            >
              Consultar {variant.name}
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href={product.sheet}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-grafito/20 px-6 py-3 text-sm font-semibold text-grafito transition-colors hover:bg-arena"
            >
              <FileText className="size-4" aria-hidden="true" />
              Ver ficha técnica
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}
