"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, MapPin, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMobileMenuOpen]);

    const textColor = isScrolled || !isHomePage ? "text-primary" : "text-white";
    const linkColor = isScrolled || !isHomePage ? "text-primary/70 hover:text-accent" : "text-white/80 hover:text-accent";
    const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(href));

    return (
        <>
            <nav
                className={`fixed top-0 w-full z-[100] transition-all duration-700 ${isScrolled || !isHomePage
                    ? "bg-background/95 backdrop-blur-md shadow-sm"
                    : "bg-transparent"
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
                            ].map((item) => {
                                const active = isActive(item.href);
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`group relative inline-flex flex-col items-center gap-0 text-xs font-semibold uppercase tracking-[0.2em]
                                            transition-all duration-300 hover:tracking-[0.26em]
                                            ${active
                                                ? (isScrolled || !isHomePage ? "text-accent" : "text-white")
                                                : (isScrolled || !isHomePage ? "text-primary/70 hover:text-accent" : "text-white/80 hover:text-white")
                                            }`}
                                    >
                                        {/* Label */}
                                        <span>{item.name}</span>

                                        {/* Underline bar — CSS group-hover, enters from left, exits right */}
                                        <span
                                            className={`absolute -bottom-1 left-0 h-[1.5px] w-full origin-left scale-x-0
                                                transition-transform duration-300 ease-out
                                                group-hover:scale-x-100
                                                ${active ? "!scale-x-100 bg-accent" : "bg-accent"}`}
                                        />

                                        {/* Active dot */}
                                        {active && (
                                            <motion.span
                                                layoutId="navActiveDot"
                                                className="absolute -bottom-[11px] left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-accent"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                    </Link>
                                );
                            })}
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
                            className={`lg:hidden flex items-center justify-center w-10 h-10 transition-colors z-50 ${isMobileMenuOpen ? "text-primary" : textColor}`}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="lg:hidden fixed inset-0 z-[110] bg-background"
                        aria-hidden={!isMobileMenuOpen}
                    >
                        <div className="flex flex-col h-full bg-background overflow-y-auto">
                            <div className="flex justify-between items-center p-6 border-b border-border/50">
                                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="font-heading font-medium text-xl tracking-widest text-primary">MHC</Link>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="w-10 h-10 flex items-center justify-center text-primary"
                                    aria-label="Close menu"
                                >
                                    <X size={28} />
                                </button>
                            </div>

                            <div className="flex flex-col px-6 py-10 gap-2">
                                {[
                                    { name: "Philosophy", href: "/about" },
                                    { name: "Services", href: "/services" },
                                    { name: "Portfolio", href: "/designs" },
                                    { name: "Voices", href: "/testimonials" },
                                    { name: "Journal", href: "/gallery" },
                                ].map((item, i) => {
                                    const active = isActive(item.href);
                                    return (
                                        <motion.div
                                            key={item.name}
                                            initial={{ opacity: 0, x: -28 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.08 + i * 0.09, duration: 0.45, ease: "easeOut" }}
                                            whileTap={{ scale: 0.97 }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className={`group flex items-center gap-5 py-4 pl-4 border-l-2 transition-all duration-300
                                                    ${active
                                                        ? "border-accent text-accent pl-6"
                                                        : "border-transparent text-foreground/80 hover:text-accent hover:border-accent hover:pl-6"
                                                    }`}
                                            >
                                                {/* Step number */}
                                                <span className={`text-[11px] font-mono font-bold tracking-widest transition-colors duration-300 shrink-0
                                                    ${active ? "text-accent" : "text-foreground/30 group-hover:text-accent/60"}`}>
                                                    0{i + 1}
                                                </span>

                                                {/* Link name */}
                                                <span className="text-4xl md:text-5xl font-heading font-light tracking-tight leading-none">
                                                    {item.name}
                                                </span>

                                                {/* Active arrow */}
                                                {active && (
                                                    <motion.span
                                                        initial={{ opacity: 0, x: -6 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        className="ml-auto text-accent text-2xl font-light shrink-0"
                                                    >
                                                        →
                                                    </motion.span>
                                                )}
                                            </Link>
                                        </motion.div>
                                    );
                                })}

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="mt-8 pt-10 border-t border-border/50"
                                >
                                    <div className="flex flex-col gap-5 mb-10 text-sm tracking-loose text-foreground/70">
                                        <div className="flex items-start gap-3">
                                            <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                                            <span>Puttalam Road, Chilaw</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Phone size={18} className="text-accent shrink-0" />
                                            <a href="tel:0778682720">077 8682 720</a>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Phone size={18} className="text-accent shrink-0" />
                                            <a href="tel:0777788600">07777 88 600</a>
                                        </div>
                                    </div>

                                    <Link
                                        href="/contact"
                                        className="flex items-center justify-center w-full py-5 bg-primary text-white font-bold tracking-[0.2em] uppercase text-xs rounded-sm shadow-lg active:scale-95 transition-transform"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Start a Conversation
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
