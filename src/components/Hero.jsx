import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden" id="home">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for contrast (doesn't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/20 to-slate-950" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24 flex flex-col items-start">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for 2025 projects
        </span>
        <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">
          Modern Portfolio for
          <span className="block bg-gradient-to-r from-cyan-200 via-white to-blue-300 bg-clip-text text-transparent">
            Web Design • Digital Marketing • Photography • Videography • Drone
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-white/80 text-base sm:text-lg">
          I help brands craft striking visuals, launch high‑converting campaigns, and tell stories that move people. End‑to‑end creative across digital and film.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href="#contact" className="inline-flex items-center rounded-lg bg-white text-slate-900 px-5 py-3 text-sm font-semibold shadow hover:shadow-lg transition">Start a Project</a>
          <a href="#work" className="inline-flex items-center rounded-lg border border-white/20 bg-white/5 text-white px-5 py-3 text-sm font-semibold hover:bg-white/10 transition">See My Work</a>
        </div>
      </div>
    </section>
  )
}
