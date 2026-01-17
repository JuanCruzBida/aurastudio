"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Talents", href: "/talents" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
];

export function Navbar() {
    const scrolled = useScroll(50);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300",
                scrolled
                    ? "border-b border-border/40 bg-background/80 backdrop-blur-md"
                    : "bg-transparent text-foreground"
            )}
        >
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                {/* Logo */}
                <Link href="/" className="font-serif text-xl font-semibold tracking-tight">
                    MODELOS IA
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium transition-colors hover:text-primary/70"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button variant="outline" className="ml-4 font-serif">
                        Book Talent
                    </Button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute left-0 top-16 w-full border-b border-border/40 bg-background/95 backdrop-blur-md p-6 md:hidden shadow-lg"
                    >
                        <nav className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <hr className="border-border" />
                            <Link href="/contact" onClick={() => setIsOpen(false)}>
                                <Button className="w-full font-serif" variant="default">
                                    Book Talent
                                </Button>
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
