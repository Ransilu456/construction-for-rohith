"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, MapPin, Phone } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const textColor = isScrolled || !isHomePage ? "text-primary" : "text-white";
    const linkColor = isScrolled || !isHomePage ? "text-primary/70 hover:text-accent" : "text-white/80 hover:text-accent";

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-700 ${isScrolled || !isHomePage
                ? "bg-background/95 backdrop-blur-md shadow-sm translate-y-0"
                : "bg-transparent translate-y-0"
                }`}
        >
            {/* Top Contact Bar - Hidden on scroll or small screens to keep it breathable */}
            <div className={`hidden md:block border-b transition-all duration-500 overflow-hidden ${isScrolled || !isHomePage
                ? "h-0 opacity-0 border-transparent"
                : "h-10 opacity-100 border-white/10"
                }`}>
                <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center text-[11px] uppercase tracking-[0.15em] font-medium text-white/70">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <MapPin size={12} className="text-white/50" />
                            <span>Puttalam Road, Chilaw</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2">
                            <Phone size={12} className="text-white/50" />
                            <a href="tel:0778682720" className="hover:text-white transition-colors">077 8682 720</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone size={12} className="text-white/50" />
                            <a href="tel:0777788600" className="hover:text-white transition-colors">07777 88 600</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`max-w-7xl mx-auto px-6 transition-all duration-500 ${isScrolled || !isHomePage ? "py-4" : "py-8"}`}>
                <div className="flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-4 group">
                        <div className="flex items-center justify-center font-heading font-medium text-xl tracking-widest text-primary border border-primary/10 bg-white/10 backdrop-blur-sm w-12 h-12 rounded-full transition-all group-hover:scale-110 group-hover:border-primary/30 duration-500">
                            MHC
                        </div>
                        <div className={`flex flex-col transition-colors duration-300 ${textColor}`}>
                            <span className="font-heading font-medium text-lg tracking-[0.1em] uppercase">Modern House</span>
                            <span className={`text-[10px] font-medium tracking-[0.3em] uppercase transition-colors ${isScrolled || !isHomePage ? "text-accent" : "text-white/60"}`}>Construction</span>
                        </div>
                    </Link>

                    <div className="hidden lg:flex items-center gap-10">
                        {[
                            { name: "Philosophy", href: "/about" },
                            { name: "Services", href: "/services" },
                            { name: "Portfolio", href: "/designs" },
                            { name: "Voices", href: "/testimonials" },
                            { name: "Journal", href: "/gallery" },
                        ].map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:tracking-[0.25em] ${linkColor}`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden lg:flex">
                        <Link
                            href="/contact"
                            className={`px-8 py-3 text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-500 ${isScrolled || !isHomePage
                                ? "bg-primary text-white hover:bg-accent shadow-lg shadow-primary/20"
                                : "border border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm"
                                }`}
                        >
                            Inquire
                        </Link>
                    </div>

                    <button
                        className={`lg:hidden flex items-center justify-center w-10 h-10 transition-colors ${textColor}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden fixed inset-0 z-50 bg-background transition-all duration-500 ease-in-out transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex flex-col h-full bg-background p-8">
                    <div className="flex justify-between items-center mb-16">
                        <div className="font-heading font-medium text-2xl tracking-widest text-primary">MHC</div>
                        <button onClick={() => setIsMobileMenuOpen(false)} className="text-primary">
                            <X size={32} />
                        </button>
                    </div>

                    <div className="flex flex-col gap-8">
                        {[
                            { name: "Philosophy", href: "/about" },
                            { name: "Services", href: "/services" },
                            { name: "Portfolio", href: "/designs" },
                            { name: "Voices", href: "/testimonials" },
                            { name: "Journal", href: "/gallery" },
                        ].map((item, i) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-3xl font-heading font-light tracking-wide text-primary hover:text-accent transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                                style={{ transitionDelay: `${i * 50}ms` }}
                            >
                                {item.name}
                            </Link>
                        ))}

                        <div className="mt-12 pt-12 border-t border-border">
                            <div className="flex flex-col gap-4 mb-12 text-sm tracking-wider text-primary/60">
                                <div className="flex items-center gap-3">
                                    <MapPin size={16} className="text-accent" />
                                    <span>Puttalam Road, Chilaw</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone size={16} className="text-accent" />
                                    <span>077 8682 720</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone size={16} className="text-accent" />
                                    <span>07777 88 600</span>
                                </div>
                            </div>

                            <Link
                                href="/contact"
                                className="inline-block w-full py-5 bg-primary text-white text-center font-bold tracking-[0.3em] uppercase text-xs"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Submit Inquiry
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
