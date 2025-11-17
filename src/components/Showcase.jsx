import { useEffect, useState } from 'react'

const projects = [
  { category: 'Web Design', title: 'E‑commerce Launch', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop' },
  { category: 'Photography', title: 'Product Series', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop' },
  { category: 'Videography', title: 'Brand Film', img: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop' },
  { category: 'Drone', title: 'Aerial Real Estate', img: 'https://images.unsplash.com/photo-1502810190503-8303352d0dd1?q=80&w=1200&auto=format&fit=crop' },
  { category: 'Marketing', title: 'Lead Gen Funnel', img: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1200&auto=format&fit=crop' },
  { category: 'Photography', title: 'Lifestyle Campaign', img: 'https://images.unsplash.com/photo-1519406596751-0a3ccc4937f3?q=80&w=1200&auto=format&fit=crop' },
]

export default function Showcase() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section id="work" className="bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Selected Work</h2>
            <p className="mt-3 text-white/70 max-w-2xl">A mix of digital, photo, film, and aerial projects.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-lg border border-white/20 bg-white/5 text-white px-4 py-2 text-sm font-semibold hover:bg-white/10 transition">Work with me</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <figure key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img src={p.img + (mounted ? '' : '')} alt={p.title} className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <figcaption className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-4">
                <span className="text-xs text-white/70">{p.category}</span>
                <span className="text-white font-semibold">{p.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
