import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Projetos() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="projetos" className="min-h-screen text-white p-8 flex flex-col lg:flex-row items-center gap-12">
      {/* Celular e texto */}
      <div data-aos="fade-up" className="flex flex-col items-center text-center flex-1">
        <img
          src="https://fakeimg.pl/500x500/ffffff/000?text=Celular"
          alt="App Ryde"
          className="w-64 mb-6 rounded-lg shadow-2xl"
        />
        <h2 className="text-2xl md:text-3xl font-bold mb-2 max-w-md">
          On-Demand Rides Made Simple with a Powerful, User-Friendly App called Ryde
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-md">
          An app built with React Native, Expo, & TailwindCSS for a fast, user-friendly experience.
        </p>
      </div>

      {/* Projetos */}
      <div className="flex flex-col gap-8 flex-1">
        <div data-aos="fade-left" className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
          <img
            src="https://fakeimg.pl/600x400/0000ff/ffffff?text=Library+Platform"
            alt="Library Platform"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">The Library Management Platform</h3>
          </div>
        </div>

        <div data-aos="fade-left" className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
          <img
            src="https://fakeimg.pl/600x400/ff00ff/ffffff?text=Startup+Showcase"
            alt="Startup Showcase"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">YC Directory - A Startup Showcase App</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projetos;
