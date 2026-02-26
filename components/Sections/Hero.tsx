import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";


export default function HeroSection() {
  return (
    <section className="relative h-[90vh] md:h-screen min-h-[500px] md:min-h-175 w-full flex items-end pb-16 md:pb-24 lg:pb-32 px-6">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Modern Tropical Villa in Sri Lanka"
          className="w-full h-full object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-start text-white">
        <span className="max-[425px]:hidden text-secondary/90 tracking-[0.2em] uppercase text-sm font-medium mb-6 flex items-center gap-4">
          <span className="w-12 h-px bg-secondary/80"></span>
          Modern House Construction
        </span>
        <h1 className="max-[425px]:mt-96  max-[320px]:mt-96 text-5xl md:text-7xl lg:text-8xl font-heading font-light tracking-tight leading-[1.05] mb-8 max-w-4xl text-shadow-sm">
          Architecture that <br /> breathes.
        </h1>
        <p className="text-base md:text-xl text-white/80 font-light max-w-2xl mb-10 md:mb-12 leading-relaxed">
          Experienced and reliable construction company specializing in residential and commercial projects
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
          <Link
            href="/designs"
            className="px-8 py-4 bg-white text-foreground hover:bg-white/90 font-medium tracking-wide transition-all rounded-sm flex items-center justify-center gap-2 group shadow-lg"
          >
            Explore Portfolio
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 bg-transparent border border-white/40 text-white hover:bg-white/10 font-medium tracking-wide transition-all rounded-sm flex items-center justify-center backdrop-blur-sm"
          >
            Request Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}