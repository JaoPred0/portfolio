import { useEffect, useState, useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const StatCard = ({ label, value, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          let start = 0;
          const end = parseInt(value);
          const easing = t => 1 - Math.pow(1 - t, 3); // Ease out cubic
          const startTime = performance.now();

          const update = now => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easing(progress);
            const currentValue = Math.floor(easedProgress * end);
            setCount(currentValue);
            if (progress < 1) {
              requestAnimationFrame(update);
            } else {
              setCount(end);
            }
          };

          setHasAnimated(true);
          requestAnimationFrame(update);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [value, duration, hasAnimated]);

  return (
    <div
      ref={ref}
      data-aos="fade-up"
      className="border border-white bg-transparent text-white p-6 rounded-xl shadow-lg w-80 text-center backdrop-blur-md"
    >
      <h2 className="text-4xl font-bold text-white drop-shadow-md">
        {count}
        {suffix}
      </h2>
      <p className="text-sm text-gray-300 mt-2">{label}</p>
    </div>
  );
};

export default function StatsSection() {
  return (
    <section className="py-10 bg-transparent">
      <div className="flex flex-wrap justify-center gap-10">
        <StatCard value="3" suffix="+" label="Anos de experiência" />
        <StatCard value="12" suffix="+" label="Clientes satisfeitos" />
        <StatCard value="5" suffix="+" label="Projetos Concluídos" />
      </div>
    </section>
  );
}
