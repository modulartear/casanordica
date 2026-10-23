import { Star } from 'lucide-react'

const REVIEWS = [
  { name: 'Lucía M.', initials: 'LM', text: 'Me asesoraron con mucha paciencia para elegir la tela. Las roller quedaron hermosas y el living cambió por completo.' },
  { name: 'Martín R.', initials: 'MR', text: 'Vinieron a medir, instalaron rápido y dejaron todo limpio. Muy buena calidad y terminaciones prolijas.' },
  { name: 'Carolina P.', initials: 'CP', text: 'Vivo en el interior y me guiaron por videollamada para medir. Llegaron perfectas y bien embaladas.' },
]

export function Testimonials() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-taupe">Opiniones</p>
        <h2 className="mt-3 text-balance text-3xl font-medium tracking-tight text-grafito sm:text-4xl">
          Lo que cuentan quienes ya nos eligieron
        </h2>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <li key={r.name}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-white p-6">
                <div className="flex gap-0.5 text-taupe" aria-label="5 de 5 estrellas">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 leading-relaxed text-grafito/85">
                  {`“${r.text}”`}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-arena text-sm font-semibold text-taupe">
                    {r.initials}
                  </span>
                  <span className="font-semibold text-grafito">{r.name}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
