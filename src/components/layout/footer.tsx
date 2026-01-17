'use client'; 

import Link from "next/link";
import { ArrowRight } from 'lucide-react'; // Quitamos 'Bot' de acá
import { Button } from "@/components/ui/button";

export function Footer() {
    return (
        <footer id="contact" className="w-full bg-white text-black pt-32 pb-12 px-6 border-t border-zinc-100">
            <div className="mx-auto max-w-[1280px] flex flex-col items-center">
                
                {/* Título */}
                <div className="flex flex-col items-center gap-4 mb-16 text-center">
                    <h2 className="font-serif text-5xl md:text-7xl font-medium tracking-tighter text-black">
                        Dejanos tu mensaje
                    </h2>
                    <p className="text-zinc-500 font-sans text-sm tracking-wide max-w-md">
                        Contanos sobre tu proyecto. Te responderemos con una propuesta en 24hs.
                    </p>
                </div>

                {/* --- FORMULARIO --- */}
                <div className="w-full max-w-2xl mb-32">
                    <form 
                        action="https://formspree.io/f/TU_CODIGO_AQUI" 
                        method="POST"
                        className="flex flex-col gap-12"
                    >
                        {/* Fila Nombre y Email */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="group relative">
                                <input 
                                    type="text" 
                                    name="name" 
                                    required
                                    placeholder="Tu Nombre"
                                    className="w-full bg-transparent border-b border-zinc-300 py-3 text-lg focus:outline-none focus:border-black transition-colors placeholder:text-zinc-300"
                                />
                            </div>
                            <div className="group relative">
                                <input 
                                    type="email" 
                                    name="email" 
                                    required
                                    placeholder="Tu Email"
                                    className="w-full bg-transparent border-b border-zinc-300 py-3 text-lg focus:outline-none focus:border-black transition-colors placeholder:text-zinc-300"
                                />
                            </div>
                        </div>

                        {/* Mensaje */}
                        <div className="group relative">
                            <textarea 
                                name="message" 
                                required
                                rows={4}
                                placeholder="Detalles del proyecto..."
                                className="w-full bg-transparent border-b border-zinc-300 py-3 text-lg focus:outline-none focus:border-black transition-colors resize-none placeholder:text-zinc-300"
                            />
                        </div>

                        {/* Botón Enviar */}
                        <div className="flex justify-center mt-8">
                            <Button 
                                type="submit"
                                size="lg" 
                                className="bg-black text-white rounded-none px-12 py-8 text-xs font-bold uppercase tracking-[0.2em] hover:bg-zinc-800"
                            >
                                Enviar Mensaje <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </div>
                    </form>
                </div>

                {/* Barra Inferior */}
                <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 border-t border-zinc-100 pt-10">
                    
                    {/* Marca (SIN ROBOT) */}
                    <div className="flex items-center gap-3">
                        {/* Acá estaba el <Bot /> */}
                        <span className="text-xs font-bold uppercase tracking-widest text-black font-sans">
                            By Emilum Media
                        </span>
                    </div>

                    {/* Copyright */}
                    <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-mono">
                        © {new Date().getFullYear()} All Rights Reserved
                    </p>

                    {/* Links Sociales */}
                    <div className="flex gap-8">
                        <Link href="#" className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-black transition-colors font-sans">
                            Instagram
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}