'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative h-[100dvh] w-full flex items-end justify-center overflow-hidden bg-black">
      
      {/* 1. IMAGEN & ANIMACIÓN */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/hero.jpeg"
          alt="Modelo IA - Primer Plano"
          fill
          className="object-cover" 
          priority
          quality={100}
          style={{ 
            animation: 'slowZoom 15s infinite alternate ease-in-out',
            transformOrigin: 'center 40%' 
          }}
        />
        
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      </div>

      {/* 2. CONTENIDO */}
      <div className="relative z-10 container mx-auto px-6 pb-32 md:pb-48 flex flex-col items-center text-center">
        
        {/* TÍTULO */}
        <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl tracking-tighter text-white drop-shadow-2xl leading-[0.9]">
          <span className="block italic font-light opacity-90 text-3xl md:text-5xl lg:text-6xl mb-2 md:mb-4 drop-shadow-md text-amber-100">
            Dirección de Arte Real.
          </span>
          <span className="block font-medium tracking-tight">
            TALENTO VIRTUAL
          </span>
        </h1>
        
        {/* SEPARADOR */}
        <div className="w-24 h-[1px] bg-amber-100/60 my-8" />
        
        {/* BAJADA */}
        <p className="font-sans text-zinc-300 text-base md:text-lg font-light tracking-wide max-w-2xl mb-10 leading-relaxed drop-shadow-md">
          Campañas y modelos generados con IA. Identidades con <span className="text-white font-normal">narrativa propia</span> diseñadas 
          para conectar con <span className="text-amber-100 font-normal">audiencias reales</span>.
        </p>

        {/* BOTÓN CORREGIDO */}
        {/* Usamos 'asChild' para que el Button funcione como un Link real */}
        <Button 
          asChild
          size="lg" 
          className="bg-white text-black hover:bg-amber-50 border-none rounded-none px-10 py-7 text-xs font-bold tracking-[0.25em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105"
        >
          <a href="#lookbook">
            Ver Portfolio
          </a>
        </Button>

      </div>

      {/* SCROLL */}
      <div className="absolute bottom-12 left-0 right-0 z-20 flex flex-col items-center justify-center animate-pulse gap-2">
        <span className="text-[10px] text-zinc-400 font-mono uppercase tracking-[0.2em] drop-shadow-md">
          Scroll
        </span>
        <div className="h-8 w-[1px] bg-zinc-400/50" />
      </div>

    </section>
  );
}