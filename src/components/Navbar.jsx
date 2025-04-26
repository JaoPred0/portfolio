import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { id: "sobre", label: "Sobre" },
    { id: "projetos", label: "Projetos" },
    { id: "experiencia", label: "Experiência" },
    { id: "contato", label: "Contato" },
  ]

  return (
    <div className="navbar flex justify-center">
      <nav className="mt-5 w-full max-w-6xl px-4">
        <div className="flex justify-between items-center p-4 bg-black/50 text-white rounded-xl shadow-lg backdrop-blur-md border border-white/20">
          <div className="text-2xl font-extrabold tracking-wide text-white glow-text">
            Jaoo Predo
          </div>

          {/* Botão mobile */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Navegação Desktop */}
          <ul className="hidden md:flex space-x-8 text-lg">
            {links.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="relative group transition-all duration-300 ease-in-out capitalize"
              >
                <span className="hover:text-gray-300">{label}</span>
                <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </ul>
        </div>

        {/* Navegação Mobile */}
        {menuOpen && (
          <ul className="md:hidden flex flex-col mt-2 space-y-4 bg-black/50 rounded-xl p-4 text-white text-center text-lg animate-fade-in-down border border-white/10 backdrop-blur-md">
            {links.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="transition-all duration-300 hover:text-gray-300 capitalize"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </ul>
        )}
      </nav>
    </div>

  )
}
