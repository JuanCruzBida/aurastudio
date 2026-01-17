'use client';

export function ProcessSection() {
  return (
    <section className="w-full bg-white text-black">
      
      {/* 1. Header del Proceso */}
      <div className="py-24 md:py-32 flex flex-col items-center justify-center text-center px-4">
        <p className="text-zinc-400 font-bold tracking-widest uppercase mb-4 text-xs md:text-sm font-sans">
          Identidad para tu marca
        </p>
        <h2 className="font-serif text-5xl md:text-7xl font-medium tracking-tighter max-w-4xl text-black mb-6 leading-[0.9]">
          MODELOS DIGITALES. <br />
          <span className="text-zinc-300">INFLUENCIA REAL.</span>
        </h2>
      </div>

      {/* 2. Grid de Pasos (Proceso) */}
      <div className="w-full bg-zinc-50/50 py-24 md:py-32 px-6 lg:px-10 border-t border-zinc-100">
        <div className="mx-auto max-w-[1280px]">
          
          {/* Título pequeño */}
          <div className="mb-12 flex justify-start border-b border-black pb-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-black font-sans">
              Nuestro Workflow
            </h3>
          </div>

          {/* Los 3 Pasos (Formato Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Paso 1 */}
            <div className="group relative flex flex-col justify-between h-full bg-white p-8 md:p-10 border border-zinc-200 hover:border-black transition-all duration-500 ease-out cursor-default">
              <div className="mb-8">
                <span className="font-serif text-8xl md:text-9xl leading-none text-zinc-100 group-hover:text-zinc-900 transition-colors duration-500 select-none">
                  01
                </span>
              </div>
              <div className="space-y-4 z-10">
                <h4 className="text-xl font-bold text-black uppercase tracking-wider font-sans">
                  Elegí un talento
                </h4>
                <p className="text-sm text-zinc-500 leading-relaxed font-light font-sans">
                  Navegá nuestro roster exclusivo de modelos digitales o encargá un avatar personalizado adaptado a las necesidades de tu campaña.
                </p>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="group relative flex flex-col justify-between h-full bg-white p-8 md:p-10 border border-zinc-200 hover:border-black transition-all duration-500 ease-out cursor-default">
              <div className="mb-8">
                <span className="font-serif text-8xl md:text-9xl leading-none text-zinc-100 group-hover:text-zinc-900 transition-colors duration-500 select-none">
                  02
                </span>
              </div>
              <div className="space-y-4 z-10">
                <h4 className="text-xl font-bold text-black uppercase tracking-wider font-sans">
                  Brief
                </h4>
                <p className="text-sm text-zinc-500 leading-relaxed font-light font-sans">
                  Enviá tu brief creativo y referencias de prendas. Nosotros nos encargamos de la composición de la escena, iluminación y dirección de arte.
                </p>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="group relative flex flex-col justify-between h-full bg-white p-8 md:p-10 border border-zinc-200 hover:border-black transition-all duration-500 ease-out cursor-default">
              <div className="mb-8">
                <span className="font-serif text-8xl md:text-9xl leading-none text-zinc-100 group-hover:text-zinc-900 transition-colors duration-500 select-none">
                  03
                </span>
              </div>
              <div className="space-y-4 z-10">
                <h4 className="text-xl font-bold text-black uppercase tracking-wider font-sans">
                  Producción & Entrega
                </h4>
                <p className="text-sm text-zinc-500 leading-relaxed font-light font-sans">
                  Renderizado de alta fidelidad y post-producción. Recibí activos listos para campaña, adaptados a todos los canales de medios.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}