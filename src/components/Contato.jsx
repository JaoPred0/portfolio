import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';

const Contato = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Configuração do serviço EmailJS
        const templateParams = {
            nome: form.nome,
            email: form.email,
            mensagem: form.mensagem,
        };

        // A Public API Key substitui o User ID
        emailjs.init('IhfDeWxvatiunba-y');  // Inicializa com a chave da API pública

        emailjs
            .send(
                'service_l1k78vg',   // Substitua pelo seu ID de serviço
                'template_k1nl5um',   // Substitua pelo ID do seu template
                templateParams
            )
            .then(
                (response) => {
                    console.log('Mensagem enviada', response.status, response.text);
                    alert('Mensagem enviada com sucesso!');
                    setForm({ nome: '', email: '', mensagem: '' });
                },
                (error) => {
                    console.log('Erro ao enviar mensagem', error);
                    alert('Ocorreu um erro ao enviar sua mensagem.');
                }
            );
    };

    return (
        <section className="max-w-4xl mx-auto px-4 py-16" id="contato">
            <h2
                className="text-4xl font-bold text-white text-center mb-10"
                data-aos="fade-down"
            >
                Contato
            </h2>

            <form
                onSubmit={handleSubmit}
                className="bg-[#1f1f1f80] p-8 rounded-2xl shadow-2xl space-y-6"
                data-aos="fade-up"
            >
                <div>
                    <label className="text-white text-sm mb-2 block">Nome</label>
                    <input
                        type="text"
                        name="nome"
                        value={form.nome}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <div>
                    <label className="text-white text-sm mb-2 block">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <div>
                    <label className="text-white text-sm mb-2 block">Mensagem</label>
                    <textarea
                        name="mensagem"
                        rows="5"
                        value={form.mensagem}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none resize-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 transition-colors text-white font-semibold py-3 rounded-lg"
                >
                    Enviar
                </button>

                {/* Botão de contato via WhatsApp */}
                <a
                    href="https://wa.me/67996610494"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-500 hover:bg-green-600 transition-colors text-white font-semibold py-3 rounded-lg mt-4 block text-center"
                >
                    Contate-me no WhatsApp
                </a>
            </form>
        </section>
    );
};

export default Contato;
