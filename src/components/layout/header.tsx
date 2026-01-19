'use client';

import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';

export function Header() {
    const [open, setOpen] = React.useState(false);
    const scrolled = useScroll(10);

    const links = [
        { label: 'Talentos', href: '#talents' },
        { label: 'Servicios', href: '#services' },
        { label: 'Lookbook', href: '#lookbook' },
    ];

    const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setOpen(false);
    };

    React.useEffect(() => {
        if (open) { document.body.style.overflow = 'hidden'; } 
        else { document.body.style.overflow = ''; }
        return () => { document.body.style.overflow = ''; };
    }, [open]);

    return (
        <header
            className={cn(
                'sticky top-0 z-50 mx-auto w-full max-w-5xl border-b border-transparent md:rounded-md md:border md:transition-all md:ease-out',
                {
                    'bg-white/95 supports-[backdrop-filter]:bg-white/50 border-zinc-200 backdrop-blur-lg md:top-4 md:max-w-4xl md:shadow-sm':
                        scrolled && !open,
                    'bg-white/90': open,
                },
            )}
        >
            <nav
                className={cn(
                    'flex h-14 w-full items-center justify-between px-4 md:h-12 md:transition-all md:ease-out',
                    { 'md:px-2': scrolled },
                )}
            >
                {/* 1. LOGO VERTICAL (STACKED) */}
                <a 
                    href="#" 
                    onClick={handleScrollToTop}
                    className="flex flex-col items-center justify-center leading-none group"
                >

                    <span className="text-xl md:text-2xl font-serif font-bold tracking-[0.2em] uppercase text-black">
                        Binary Skin
                    </span>
                    {/* STUDIO: Sans, chico, abajo */}
                    <span className="text-[8px] md:text-[10px] font-sans font-medium tracking-[0.4em] uppercase text-zinc-500 group-hover:text-black transition-colors -mt-1 md:-mt-1.5 ml-1">
                        Studio
                    </span>
                </a>

                {/* MENÚ DESKTOP */}
                <div className="hidden items-center gap-2 md:flex">
                    {links.map((link, i) => (
                        <a key={i} className={buttonVariants({ variant: 'ghost' })} href={link.href}>
                            {link.label}
                        </a>
                    ))}
                    
                    <a href="#contact">
                        <Button className="bg-black text-white hover:bg-zinc-800 rounded-none font-bold uppercase tracking-widest text-xs h-9 px-6">
                            Contacto
                        </Button>
                    </a>
                </div>

                {/* BOTÓN MÓVIL */}
                <Button size="icon" variant="outline" onClick={() => setOpen(!open)} className="md:hidden">
                    <MenuToggleIcon open={open} className="size-5" duration={300} />
                </Button>
            </nav>

            {/* MENÚ MÓVIL */}
            <div className={cn(
                    'bg-white/95 fixed top-14 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-y md:hidden',
                    open ? 'block' : 'hidden',
                )}
            >
                <div data-slot={open ? 'open' : 'closed'} className={cn(
                        'data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 data-[slot=closed]:animate-out data-[slot=closed]:zoom-out-95 ease-out',
                        'flex h-full w-full flex-col justify-between gap-y-2 p-4',
                    )}
                >
                    <div className="grid gap-y-2">
                        {links.map((link) => (
                            <a
                                key={link.label}
                                className={buttonVariants({ variant: 'ghost', className: 'justify-start text-lg py-6' })}
                                href={link.href}
                                onClick={() => setOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <div className="flex flex-col gap-2 pb-6">
                        <a href="#contact" onClick={() => setOpen(false)}>
                            <Button className="w-full bg-black text-white hover:bg-zinc-800 rounded-none font-bold uppercase tracking-widest py-6">
                                Contacto
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}