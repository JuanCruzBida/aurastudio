'use client';

import Image from 'next/image';

export function ServiceLevels() {
  return (
    <section id="services" className="w-full bg-white text-black">
      
      {/* Header de la Sección */}
      <div className="container mx-auto px-6 py-20 md:py-32 text-center">
        <span className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-400 mb-4 block">
          Absoluta Fidelidad. 100% Personalizado
        </span>
        <h2 className="font-serif text-5xl md:text-7xl font-light tracking-tighter mb-6 uppercase">
          Servicios
        </h2>
        <p className="max-w-xl mx-auto text-zinc-500 font-sans font-light text-lg leading-relaxed">
          Desde contenido social atmosférico hasta imágenes de campaña perfectas píxel a píxel. 
          Seleccioná la fidelidad que se adapte a tu narrativa.
        </p>
      </div>

      {/* Grid de Tiers */}
      <div className="w-full max-w-[1800px] mx-auto px-0 md:px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 w-full">
          
          {/* --- TIER A: ATMOSPHERE --- */}
          <div className="group relative h-[600px] lg:h-[80vh] w-full overflow-hidden bg-zinc-100">
            <Image
              src="/tier2.jpeg" 
              alt="Tier A - Lifestyle Atmosphere"
              fill
              className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
            
            <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="bg-white/90 text-black px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase backdrop-blur-sm">
                  Tier A
                </span>
              </div>
              
              <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-serif text-4xl md:text-6xl text-white mb-4 tracking-tight">
                  ATMÓSFERA
                </h3>
                <div className="h-px w-12 bg-white mb-6" />
                <p className="text-white/90 max-w-sm font-sans font-light leading-relaxed mb-8">
                  Lifestyle & Social. Simulación de luz natural con energía auténtica, 
                  ideal para contenido diario y redes.
                </p>
              </div>
            </div>
          </div>

          {/* --- TIER B: DETAIL --- */}
          <div className="group relative h-[600px] lg:h-[80vh] w-full overflow-hidden bg-zinc-100">
            <Image
              src="/tier1.jpeg" 
              alt="Tier B - Detail Campaign"
              fill
              className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
            
            <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="bg-blue-600 text-white px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase backdrop-blur-sm shadow-lg">
                  Tier B
                </span>
              </div>
              
              <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-serif text-4xl md:text-6xl text-white mb-4 tracking-tight">
                  DETALLE
                </h3>
                <div className="h-px w-12 bg-white mb-6" />
                <p className="text-white/90 max-w-sm font-sans font-light leading-relaxed mb-8">
                  Campaign & Print. Textura de piel impecable, iluminación de estudio controlada 
                  e integración de producto de alta fidelidad para tu web o e-commerce.
                </p>
              </div>
            </div>
          </div>

          {/* --- TIER C: PRODUCTO (Full Width) --- */}
          <div className="group relative h-[500px] w-full overflow-hidden bg-zinc-100 lg:col-span-2 mt-1">
            <Image
              src="/tier3.png" 
              alt="Tier C - Product Photography"
              fill
              className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
            />
            {/* Overlay un poco más oscuro para que se lea bien el texto sobre foto producto */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500" />
            
            <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="bg-zinc-900 text-white px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase backdrop-blur-sm border border-zinc-700">
                  Tier C
                </span>
              </div>
              
              <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-serif text-4xl md:text-6xl text-white mb-4 tracking-tight">
                  PRODUCTO
                </h3>
                <div className="h-px w-12 bg-white mb-6" />
                <p className="text-white/90 max-w-lg font-sans font-light leading-relaxed mb-8">
                  Still Life & Packshot. Fotografía de producto pura, sin modelos. 
                  Entornos realistas o fondos de estudio minimalistas para resaltar cada textura y material.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}