import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import AOS from "aos";
import "aos/dist/aos.css";

// Componente do modelo 3D
function MiniRoomModel() {
  const gltf = useGLTF("/models/mini_room.glb");
  return <primitive object={gltf.scene} scale={1.2} rotation={[0, Math.PI / 2, 0]} />; // Rotaciona 90 graus
}

const Sobre = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div id="sobre" className="card flex flex-col lg:flex-row justify-center min-h-[600px] space-y-10 lg:space-y-0 lg:space-x-10 pt-10 lg:pt-30 px-4 lg:px-20">

      {/* Texto com animação */}
      <div className="flex flex-col items-center lg:items-start space-y-6 lg:space-y-8 max-w-full">
        <div className="flex flex-wrap items-center justify-center lg:justify-start space-x-4">
          <h1 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-white glow-text" data-aos="fade-up">
            Transformando
          </h1>
          <div className="words text-3xl lg:text-5xl font-bold text-indigo-400 h-[60px] overflow-hidden relative">
            <div className="inner-words flex flex-col animate-word-slide">
              <span className="word">Ideias</span>
              <span className="word">Conceitos</span>
              <span className="word">Códigos</span>
              <span className="word">Design</span>
              <span className="word">Projetos</span>
            </div>
          </div>
        </div>

        <div className="text-center lg:text-left space-y-2">
          <p className="text-xl lg:text-4xl text-white/80" data-aos="fade-up">Em Projetos Reais</p>
          <p className="text-xl lg:text-4xl text-white/80" data-aos="fade-up">Que Entregam Resultados</p>
        </div>
        <p className="text-center lg:text-left text-lg lg:text-xl text-white/70 mt-4" data-aos="fade-up">
          Olá, eu sou João Pedro, um desenvolvedor com uma paixão por código.
        </p>
        <button className="projeto" data-aos="fade-up">
          <span>Ver Projetos</span>
        </button>
      </div>

      {/* Modelo 3D */}
      <div className="w-full max-w-full lg:max-w-xl h-[300px] lg:h-[500px] bg-black/20 rounded-xl overflow-hidden" data-aos="fade-left">
        <Canvas camera={{ position: [3, 2, 4], fov: 45 }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} />
          <Suspense fallback={null}>
            <MiniRoomModel />
          </Suspense>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
      </div>
  );
};

export default Sobre;
