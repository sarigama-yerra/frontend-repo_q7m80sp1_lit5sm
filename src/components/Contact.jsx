export default function Contact() {
  return (
    <section id="contact" className="relative bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Let’s create something unforgettable</h2>
          <p className="mt-3 text-white/70 max-w-2xl">Tell me about your goals. I’ll reply within 24 hours with ideas, scope, and next steps.</p>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" placeholder="Name" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          <input type="email" placeholder="Email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          <input type="text" placeholder="Project type (e.g. website, film, drone)" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 md:col-span-2" />
          <textarea placeholder="Tell me about your project" rows="5" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 md:col-span-2" />
          <div className="md:col-span-2 flex items-center justify-between">
            <p className="text-white/60 text-sm">No spam. I respect your inbox.</p>
            <button type="submit" className="inline-flex items-center rounded-lg bg-white text-slate-900 px-5 py-3 text-sm font-semibold shadow hover:shadow-lg transition">Send Inquiry</button>
          </div>
        </form>
      </div>
    </section>
  )
}
