"use client";

import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-6 relative overflow-hidden">
            {/* Architectural Grid Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(var(--primary) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            </div>

            {/* Content Container */}
            <div className="max-w-2xl w-full text-center relative z-10">
                <div className="mb-12 inline-block">
                    <span className="text-[120px] md:text-[180px] font-heading font-light leading-none text-primary/10 tracking-tighter block">404</span>
                    <div className="w-12 h-[1px] bg-accent mx-auto -mt-4 md:-mt-8"></div>
                </div>

                <h1 className="text-3xl md:text-4xl font-heading font-medium text-primary mb-6 tracking-wide">
                    A design not found, <br className="hidden md:block" />
                    but a vision remains.
                </h1>

                <p className="text-foreground/60 text-lg mb-12 max-w-md mx-auto leading-relaxed font-light tracking-wide">
                    The space you are looking for has either been relocated or is yet to be designed. We invite you to return to our main gallery.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link
                        href="/"
                        className="flex items-center gap-3 px-10 py-4 bg-primary text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-accent transition-all duration-500 shadow-xl shadow-primary/20"
                    >
                        <Home size={14} />
                        Return Home
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center gap-3 px-10 py-4 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.2em] hover:bg-primary/5 transition-all duration-500"
                    >
                        <ArrowLeft size={14} />
                        Go Back
                    </button>
                </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute bottom-12 right-12 hidden lg:block text-right opacity-20">
                <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-primary mb-2">Modern House</p>
                <p className="text-[10px] uppercase tracking-[0.5em] font-medium text-accent">Construction</p>
            </div>
        </div>
    );
}
