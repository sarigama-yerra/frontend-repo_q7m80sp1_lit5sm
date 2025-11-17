import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function NavLink({ href, children }) {
  return (
    <a href={href} className="text-sm text-white/80 hover:text-white transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md px-4 py-3">
          <a href="#" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg" />
            <span className="text-white font-semibold tracking-tight">Blue Studios</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#work">Work</NavLink>
            <NavLink href="#about">About</NavLink>
            <a href="#contact" className="inline-flex items-center rounded-lg bg-white text-slate-900 px-4 py-2 text-sm font-semibold shadow hover:shadow-lg transition-shadow">
              Let’s Talk
            </a>
          </nav>

          <button className="md:hidden text-white" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="mt-2 rounded-2xl border border-white/10 bg-slate-900/90 backdrop-blur-md p-4 md:hidden">
            <div className="flex flex-col gap-3">
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#work">Work</NavLink>
              <NavLink href="#about">About</NavLink>
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-4 py-2 text-sm font-semibold shadow hover:shadow-lg transition-shadow">
                Let’s Talk
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
