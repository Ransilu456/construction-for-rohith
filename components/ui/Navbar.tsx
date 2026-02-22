"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
                    ? "bg-background/90 backdrop-blur-md shadow-sm border-b border-border/50 py-4"
                    : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="flex justify-between items-center">

                    <Link href="/" className="flex items-center gap-4 group">
                        <div className="flex items-center justify-center font-heading font-medium text-xl tracking-widest text-primary border border-primary/20 bg-background/50 w-12 h-12 rounded-full transition-transform group-hover:rotate-12 duration-500">
                            MHC
                        </div>
                        <div className={`flex flex-col transition-colors duration-300 ${isScrolled ? "text-foreground" : "text-foreground sm:text-white text-shadow-sm"}`}>
                            <span className="font-heading font-medium text-lg tracking-wide uppercase">Modern House</span>
                            <span className="text-[10px] font-medium tracking-[0.2em] text-primary uppercase">Construction</span>
                        </div>
                    </Link>

                    <div className="hidden lg:flex items-center gap-8">
                        <Link href="/about" className={`text-sm font-medium tracking-wide hover:text-primary transition-colors ${isScrolled ? "text-foreground/80" : "text-white/90"}`}>Philosophy</Link>
                        <Link href="/services" className={`text-sm font-medium tracking-wide hover:text-primary transition-colors ${isScrolled ? "text-foreground/80" : "text-white/90"}`}>Services</Link>
                        <Link href="/designs" className={`text-sm font-medium tracking-wide hover:text-primary transition-colors ${isScrolled ? "text-foreground/80" : "text-white/90"}`}>Portfolio</Link>
                        <Link href="/gallery" className={`text-sm font-medium tracking-wide hover:text-primary transition-colors ${isScrolled ? "text-foreground/80" : "text-white/90"}`}>Journal</Link>
                    </div>

                    <div className="hidden lg:flex">
                        <Link href="/contact" className="px-6 py-2.5 bg-primary text-white hover:bg-primary/90 rounded-sm font-medium tracking-wider text-sm transition-all shadow-sm">
                            Inquire
                        </Link>
                    </div>

                    <button
                        className={`lg:hidden flex items-center justify-center w-10 h-10 transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-xl py-6 px-6">
                    <div className="flex flex-col gap-6">
                        <Link href="/about" className="text-xl font-heading text-foreground" onClick={() => setIsMobileMenuOpen(false)}>Philosophy</Link>
                        <Link href="/services" className="text-xl font-heading text-foreground" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
                        <Link href="/designs" className="text-xl font-heading text-foreground" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</Link>
                        <Link href="/gallery" className="text-xl font-heading text-foreground" onClick={() => setIsMobileMenuOpen(false)}>Journal</Link>
                        <div className="pt-6 border-t border-border">
                            <Link href="/contact" className="inline-block px-8 py-4 bg-primary text-white font-medium tracking-widest uppercase text-sm rounded-sm" onClick={() => setIsMobileMenuOpen(false)}>
                                Submit Inquiry
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
