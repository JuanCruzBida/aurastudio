'use client';

import { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

// Datos del Portfolio
const PORTFOLIO_ITEMS = [
  { id: 1, title: 'Urban', category: 'Lifestyle', image: '/portfolio1.jpeg' },
  { id: 2, title: 'Collection', category: 'Campaign', image: '/portfolio2.jpeg' },
  { id: 3, title: 'Estudio', category: 'Campaign', image: '/portfolio3.jpeg' },
  { id: 4, title: 'Temporalidad', category: 'Detail', image: '/portfolio4.jpeg' },
  { id: 5, title: 'Intimidad', category: 'Lifestyle', image: '/portfolio5.jpeg' },
  { id: 6, title: 'Imperfección justa', category: 'Natural', image: '/portfolio6.jpeg' },
];

export function Lookbook() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      {/* CAMBIO 1: id="lookbook" para el scroll desde el Hero */}
      <section id="lookbook" className="w-full bg-zinc-50 py-24 md:py-32 border-t border-zinc-200">
        <div className="container mx-auto px-6">
          
          {/* Header Lookbook */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-light uppercase tracking-tight mb-2">
              Lookbook
            </h2>
            <p className="text-zinc-500 font-sans text-sm tracking-wide">
               Selected Works
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {PORTFOLIO_ITEMS.map((item) => (
              <div 
                key={item.id} 
                className="break-inside-avoid group relative cursor-zoom-in"
                onClick={() => setSelectedImage(item.image)}
              >
                
                {/* Contenedor Imagen */}
                <div className="relative overflow-hidden bg-zinc-200 aspect-[4/5] md:aspect-auto">
                   <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={800}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                   />
                </div>

                {/* Info al pie */}
                <div className="mt-3 flex justify-between items-start opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-black">
                      {item.title}
                    </p>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-wide mt-0.5 font-mono">
                      {item.category}
                    </p>
                  </div>
                  <ArrowUpRight size={16} className="text-black opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
          
          {/* Footer CTA Section */}
          <div className="mt-32 flex flex-col items-center text-center">
              <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tighter mb-8 uppercase">
                  Empezamos?
              </h2>
              <div className="flex flex-col sm:flex-row gap-6">
                  {/* CAMBIO 2: Link al formulario del footer (#contact) */}
                  <a href="#contact">
                    <Button size="lg" className="bg-black text-white rounded-none px-10 py-6 text-xs font-bold uppercase tracking-widest hover:bg-zinc-800">
                        Contactanos
                    </Button>
                  </a>
              </div>
          </div>

        </div>
      </section>

      {/* --- MODAL (LIGHTBOX) --- */}
      {selectedImage && (
        <div 
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setSelectedImage(null)}
        >
            <button 
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 p-2"
                onClick={() => setSelectedImage(null)}
            >
                <X size={32} strokeWidth={1} />
            </button>

            <div className="relative w-full h-full max-w-5xl max-h-[90vh]">
                <Image
                    src={selectedImage}
                    alt="Zoomed lookbook image"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
        </div>
      )}
    </>
  );
}