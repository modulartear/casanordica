const ITEMS = ['Hogares', 'Estudios de arquitectura', 'Oficinas', 'Hoteles boutique', 'Consultorios', 'Desarrolladoras']

export function TrustStrip() {
  return (
    <section aria-label="Quiénes nos eligen" className="border-b border-border bg-white py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          Diseñamos cortinas para todo tipo de espacios
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {ITEMS.map((item) => (
            <li key={item} className="font-heading text-lg tracking-wide text-taupe">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
