import { Monitor, Camera, Video, Rocket } from 'lucide-react'

const services = [
  {
    icon: Monitor,
    title: 'Web Design',
    desc: 'Responsive, fast, and SEO‑ready websites crafted for conversion.'
  },
  {
    icon: Rocket,
    title: 'Digital Marketing',
    desc: 'Campaigns that drive traffic and growth across search and social.'
  },
  {
    icon: Camera,
    title: 'Photography',
    desc: 'Editorial, product, lifestyle, and brand shoots with studio-quality lighting.'
  },
  {
    icon: Video,
    title: 'Videography & Drone',
    desc: 'Cinematic films, reels, and aerial footage for unforgettable impact.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">What I Do</h2>
          <p className="mt-3 text-white/70 max-w-2xl">A full‑stack creative partner for your brand — from concept to launch.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-400/20 border border-white/10">
                <Icon className="h-6 w-6 text-cyan-300" />
              </div>
              <h3 className="text-white font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-white/70 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
