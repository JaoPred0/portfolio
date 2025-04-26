import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Experiencias = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const languages = [
        { name: 'JavaScript', image: '/js.png' },
        { name: 'Python', image: '/python.png' },
        { name: 'TypeScript', image: '/typescript.png' },
        { name: 'Go', image: '/lua.png' },
        { name: 'React', image: '/react.png' },
        { name: 'Next.js', image: '/next.png' },
        { name: 'Node.js', image: '/node.png' },
        { name: 'Cordova', image: '/cordova.png' },
    ];

    return (
        <section id='experiencia' className="max-w-7xl mx-auto px-4 py-16">
            <h2
                className="text-4xl font-bold text-white text-center mb-10"
                data-aos="fade-down"
            >
                Experiências
            </h2>
            <div className="wrapper w-full min-h-[500px] overflow-visible px-4 py-6">

                <div
                    className="inner"
                    style={{ '--quantity': languages.length }}
                >
                    {languages.map((lang, index) => (
                        <div
                            key={index}
                            className="card3d"
                            style={{
                                '--index': index,
                                '--color-card': '31, 31, 31',
                            }}
                        >
                            <div className="img bg-[#1f1f1f] text-white text-center flex flex-col items-center justify-center px-4">
                                <img
                                    src={lang.image}
                                    alt={lang.name}
                                    className="w-16 h-16 object-contain mb-2"
                                />
                                <p className="text-base font-semibold">{lang.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experiencias;
