'use client'

import { useState } from 'react'
import { MessageCircle, Minus, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { whatsappLink } from '@/lib/site'

const TYPES = [
  'Black Out',
  'Sun Screen',
  'Doble',
  'Rústica',
  'Día y Noche',
  'Translúcida',
  'De tela',
  'Bandas verticales',
  'Necesito ayuda',
]
const ZONES = ['CABA', 'GBA', 'Interior']

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        'rounded-full border px-4 py-2 text-sm transition-colors',
        active
          ? 'border-grafito bg-grafito text-white'
          : 'border-border bg-white text-grafito hover:border-taupe',
      )}
    >
      {children}
    </button>
  )
}

export function QuoteForm() {
  const [type, setType] = useState(TYPES[0])
  const [width, setWidth] = useState('')
  const [height, setHeight] = useState('')
  const [qty, setQty] = useState(1)
  const [zone, setZone] = useState(ZONES[0])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const measures =
      width || height
        ? `${width || '?'} cm de ancho × ${height || '?'} cm de alto`
        : 'todavía no tengo las medidas, necesito ayuda para medir'
    const message = `Hola Casa Nórdica, quiero presupuestar:\n• Cortina: ${type}\n• Medidas: ${measures}\n• Cantidad: ${qty}\n• Zona: ${zone}`
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <div id="cotizador" className="scroll-mt-28 overflow-hidden rounded-2xl bg-white shadow-2xl shadow-grafito/20">
      <div className="relative h-20 bg-[repeating-linear-gradient(90deg,#e8ddd0_0px,#e8ddd0_10px,#d6c4ad_10px,#d6c4ad_12px)]">
        <span className="absolute bottom-3 left-6 rounded-full bg-grafito px-3 py-1 text-xs font-semibold text-white">
          Cotizador rápido · 30 segundos
        </span>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-6">
        <fieldset>
          <legend className="mb-3 font-semibold text-grafito">1. ¿Qué cortina buscás?</legend>
          <div className="flex flex-wrap gap-2">
            {TYPES.map((t) => (
              <Chip key={t} active={type === t} onClick={() => setType(t)}>
                {t}
              </Chip>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-3 font-semibold text-grafito">2. Medidas de la ventana (cm)</legend>
          <div className="grid grid-cols-2 gap-3">
            <label className="flex flex-col gap-1.5 text-sm text-muted-foreground">
              Ancho
              <input
                type="number"
                inputMode="numeric"
                min={1}
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                placeholder="Ej: 160"
                className="h-12 rounded-lg border border-border bg-muted px-4 text-base text-grafito outline-none focus:border-taupe focus:ring-2 focus:ring-taupe/30"
              />
            </label>
            <label className="flex flex-col gap-1.5 text-sm text-muted-foreground">
              Alto
              <input
                type="number"
                inputMode="numeric"
                min={1}
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Ej: 220"
                className="h-12 rounded-lg border border-border bg-muted px-4 text-base text-grafito outline-none focus:border-taupe focus:ring-2 focus:ring-taupe/30"
              />
            </label>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            ¿No las tenés? Dejalo vacío y te guiamos para medir.
          </p>
        </fieldset>

        <div className="flex flex-col gap-6 sm:flex-row">
          <fieldset>
            <legend className="mb-3 font-semibold text-grafito">3. Cantidad</legend>
            <div className="inline-flex h-12 items-center rounded-lg border border-border">
              <button
                type="button"
                aria-label="Restar una"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="flex size-12 items-center justify-center text-grafito hover:text-taupe"
              >
                <Minus className="size-4" />
              </button>
              <span className="w-8 text-center font-semibold" aria-live="polite">
                {qty}
              </span>
              <button
                type="button"
                aria-label="Sumar una"
                onClick={() => setQty((q) => Math.min(50, q + 1))}
                className="flex size-12 items-center justify-center text-grafito hover:text-taupe"
              >
                <Plus className="size-4" />
              </button>
            </div>
          </fieldset>
          <fieldset>
            <legend className="mb-3 font-semibold text-grafito">4. ¿Dónde estás?</legend>
            <div className="flex flex-wrap gap-2">
              {ZONES.map((z) => (
                <Chip key={z} active={zone === z} onClick={() => setZone(z)}>
                  {z}
                </Chip>
              ))}
            </div>
          </fieldset>
        </div>

        <button
          type="submit"
          className="flex h-14 items-center justify-center gap-2 rounded-xl bg-oliva text-base font-semibold text-white transition-colors hover:bg-oliva/90"
        >
          <MessageCircle className="size-5" aria-hidden="true" />
          Pedir presupuesto por WhatsApp
        </button>
      </form>
    </div>
  )
}
