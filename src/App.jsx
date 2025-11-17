import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Showcase from './components/Showcase'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Showcase />
        <Contact />
        <footer className="border-t border-white/10 bg-slate-950/90">
          <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">© 2025 Blue Studios — All rights reserved.</p>
            <div className="text-white/60 text-sm">Web • Marketing • Photo • Video • Drone</div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
