'use client'
import { useState, useEffect } from "react";
import Spline from '@splinetool/react-spline'

export default function Home() {
  const [linguagens, setLinguagens] = useState({
    projeto1: ['Html', 'Css', 'Js', 'Boostrap', 'Animate.css', 'Font Awesome', 'AOS Scroll'],
    projeto2: ['Python', 'HTML', 'CSS', 'Boostrap', 'JavaScript ', 'yt-dlp', 'Flask'],
    projeto3: ['Python', 'Django', 'PostgreSQL'],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Desativa o carregamento após 2 segundos
    }, 3000);

    return () => clearTimeout(timer); // Limpa o timer ao desmontar o componente
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="text-white text-2xl">Carregando...</div>
      </div>
    );
  }

  return (
    <main className="relative min-h-screen text-white">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-8 py-4 bg-black/60 backdrop-blur-sm z-10">
        <h1 className="text-white text-xl font-semibold">JaooPredo</h1>
        <ul className="flex space-x-6 text-white">
          <li>
            <a href="#projetos" className="hover:text-indigo-400 transition">
              Projetos
            </a>
          </li>
          <li>
            <a href="#contato" className="hover:text-indigo-400 transition">
              Contato
            </a>
          </li>
        </ul>
      </nav>

      {/* Spline Hero Background */}
      <div className="relative w-full h-[40vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/RWW81iBj4ozJuUv6/scene.splinecode"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Seção de Projetos */}
      <section id="projetos" className="bg-black py-16 px-6">
        <h3 className="text-3xl font-bold text-center mb-12 text-white">Projetos</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          {/* Card Container */}
          <div className="flex flex-col items-center">
            {/* Card 1 */}
            <div className="mb-5 bg-transparent rounded-2xl shadow-[0_4px_30px_rgba(255,255,255,0.1)] backdrop-blur-md p-6 hover:shadow-[0_6px_40px_rgba(255,255,255,0.2)] transition transform hover:scale-105">
              <h4 className="text-xl font-semibold mb-2 text-white">Ferrari F40</h4>
              <p className="text-gray-400">
                Projeto sobre a icônica Ferrari F40, com design radical, 324 km/h de velocidade e destaque histórico para entusiastas de performance.
              </p>
              {/* Linguagens */}
              <div className="mt-2 mb-3">
                <h5 className="text-white">Linguagens:</h5>
                <p className="text-gray-400">
                  {linguagens.projeto1.join(', ')}
                </p>
              </div>

              <a href="https://jaopred0.github.io/Ferrari-F40/" target="bland_" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
                Acessar Site
              </a>
            </div>
            
            {/* Card 2 */}
            <div className="mb-5 bg-transparent rounded-2xl shadow-[0_4px_30px_rgba(255,255,255,0.1)] backdrop-blur-md p-6 hover:shadow-[0_6px_40px_rgba(255,255,255,0.2)] transition transform hover:scale-105">
              <h4 className="text-xl font-semibold mb-2 text-white">SoundJao</h4>
              <p className="text-gray-400">
              Baixe músicas e playlists via Flask com qualidade máxima, capas originais e interface responsiva.
              </p>
              {/* Linguagens */}
              <div className="mt-2 mb-3">
                <h5 className="text-white">Linguagens:</h5>
                <p className="text-gray-400">
                  {linguagens.projeto2.join(', ')}
                </p>
              </div>

              <a href="https://github.com/JaoPred0/SoundJao" target="bland_" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
                Acessar projeto
              </a>
            </div>
          </div>
          <Spline
            scene="https://prod.spline.design/HEh5dP-AOjCEfZ0O/scene.splinecode"
          />

          {/* Card Container
          <div className="flex flex-col items-center">

          </div> */}
        </div>
      </section>
      <hr />
      <section id="contato" className="py-20 bg-black text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Entre em Contato</h2>
        <p className="text-gray-400 mb-10">Tem um projeto em mente? Vamos conversar no WhatsApp!</p>

        <a
          href="https://wa.me/5567996610494?text=Olá%2C%20vi%20seu%20portfólio%20e%20gostaria%20de%20falar%20sobre%20um%20projeto!"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-full text-white font-medium shadow-lg hover:scale-105"
        >
          Falar no WhatsApp
        </a>
      </section>
    </main>
  );
}
