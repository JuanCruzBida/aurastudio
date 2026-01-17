'use client';

import Image from 'next/image';
import { Camera } from 'lucide-react';

const TALENTS = [
  {
    id: 'mora',
    name: 'Mora',
    category: 'Urban / Tech',
    height: '178cm',
    image: '/foto1.jpeg', 
    inset: '/foto1.jpeg',
  },
  {
    id: 'alba',
    name: 'Alba',
    category: 'Minimalist',
    height: '175cm',
    image: '/foto2.jpeg',
    inset: '/foto2.jpeg',
  },
  {
    id: 'gael',
    name: 'Gael',
    category: 'Lifestyle',
    height: '182cm',
    image: '/foto3.jpeg',
    inset: '/foto3.jpeg',
  },
];

export function TalentRoster() {
  return (
    // CAMBIO AQUÍ: 
    // 1. Usamos 'pt-24 md:pt-32' (padding solo arriba)
    // 2. Redujimos abajo a 'pb-12' 
    // 3. Agregamos 'border-b border-zinc-100' como línea divisoria
    <section id="talents" className="w-full bg-white text-black pt-24 md:pt-32 pb-12 border-b border-zinc-100">
      
      {/* --- BLOQUE 1: EL MANIFIESTO --- */}
      <div className="container mx-auto px-6 mb-24 md:mb-32">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
          
          {/* Header pequeño estilo técnico */}
          <div className="flex items-center justify-center gap-4 opacity-60">
            <span className="h-px w-8 md:w-12 bg-black"></span>
            <h4 className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase font-sans">
              Modelos IA
            </h4>
            <span className="h-px w-8 md:w-12 bg-black"></span>
          </div>

          {/* Título Grande */}
          <h2 className="text-4xl md:text-6xl font-medium leading-[1.1] tracking-tight">
            <span className="font-sans block mb-2">Producción Tradicional vs.</span>
            <span className="font-serif italic text-zinc-400">Imágenes de Stock.</span>
          </h2>

          {/* Bajada */}
          <p className="text-lg md:text-xl font-light leading-relaxed text-zinc-600 font-sans max-w-2xl">
            La fotografía tradicional es exorbitantemente cara. El stock es genérico y sin alma. 
            Ofrecemos el punto medio perfecto: modelos consistentes, en cualquier espacio-tiempo.
            <span className="ml-2 border-b border-black pb-0.5 font-medium text-black">
              Menor costo, mayor ventaja competitiva
            </span>.
          </p>
        </div>
      </div>

      {/* Divisor Sutil */}
      <div className="w-full px-6 md:px-10 mb-20">
        <div className="h-px w-full bg-zinc-100"></div>
      </div>

      {/* --- BLOQUE 2: EL ROSTER --- */}
      <div className="container mx-auto px-6">
        
        {/* Cabecera del Roster */}
        <div className="flex items-end justify-between mb-12 md:mb-16 border-b border-black pb-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase font-sans">
              Talentos Virtuales
            </h3>
            <span className="text-xs md:text-sm font-mono text-zinc-400 uppercase tracking-widest">
              Season 01 / New Faces
            </span>
          </div>
        </div>

        {/* Grid de Talentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {TALENTS.map((talent) => (
            <article 
              key={talent.id} 
              className="group relative flex flex-col"
            >
              {/* Contenedor Imagen Principal */}
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-zinc-100 mb-6 shadow-sm">
                <Image
                  src={talent.image}
                  alt={`${talent.name} - ${talent.category}`}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Info y Polaroid Flotante */}
              <div className="flex justify-between items-end px-1 border-t border-transparent group-hover:border-black/10 pt-4 transition-colors">
                
                {/* Textos */}
                <div className="flex flex-col">
                  <h4 className="text-3xl font-bold uppercase tracking-tighter mb-2">
                    {talent.name}
                  </h4>
                  <div className="flex items-center gap-2">
                    <span className="h-px w-4 bg-black"></span>
                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500">
                      {talent.category}
                    </p>
                  </div>
                  <p className="text-[10px] font-mono text-zinc-400 mt-3">
                    HEIGHT: {talent.height}
                  </p>
                </div>

                {/* Polaroid Pequeña (Interactiva) */}
                <div className="relative w-20 aspect-[3/4] p-1 bg-white shadow-md rotate-3 group-hover:rotate-0 transition-transform duration-300 ease-out border border-zinc-100">
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src={talent.inset}
                      alt={`${talent.name} candid`}
                      fill
                      className="object-cover grayscale contrast-125"
                    />
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

        {/* Footer del Roster */}
        <div className="mt-24 flex flex-col items-center opacity-40 hover:opacity-100 transition-opacity duration-500">
          <Camera strokeWidth={1} className="w-8 h-8 mb-4" />
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-center font-sans">
            Identidades consistentes. Escenarios infinitos. 100% Personalizado
          </p>
        </div>

      </div>
    </section>
  );
}