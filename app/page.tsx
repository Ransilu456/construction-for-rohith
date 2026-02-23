import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Leaf, Shield, Sun } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import DesignCard from "@/components/ui/DesignCard";
import { HouseDesign } from "@/types";
import { designsData } from "@/data/designs";

export default function Home() {
  // Increase to 6 designs to show off the scrolling
  const featuredDesigns = designsData.slice(0, 6);

  return (
    <main className="min-h-screen flex flex-col bg-background selection:bg-primary/20">
      <Navbar />

      {/* Elegant Hero Section */}
      <section className="relative h-screen min-h-175 w-full flex items-end pb-24 lg:pb-32 px-6">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Modern Tropical Villa in Sri Lanka"
            className="w-full h-full object-cover"
            fill
            priority
          />
          {/* Subtle gradient overlay instead of heavy black box */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-start text-white">
          <span className="text-secondary/90 tracking-[0.2em] uppercase text-sm font-medium mb-6 flex items-center gap-4">
            <span className="w-12 h-px bg-secondary/80"></span>
            Modern House Construction
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-light tracking-tight leading-[1.05] mb-8 max-w-4xl text-shadow-sm">
            Architecture that <br /> breathes.
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl mb-12 leading-relaxed">
            Experienced and reliable construction company specializing in residential and commercial projects
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
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

      {/* Intro / Philosophy - High whitespace, airy look */}
      <section className="py-32 max-w-5xl mx-auto px-6 text-center w-full">
        <span className="text-accent tracking-widest uppercase text-xs font-semibold mb-6 block">Our Philosophy</span>
        <h2 className="text-3xl md:text-5xl font-heading font-light text-foreground leading-[1.2] mb-10">
          “To build in the tropics is to create a seamless transition between the shelter and the landscape.”
        </h2>
        <p className="text-foreground/70 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light">
          We move away from enclosed, heavily air-conditioned concrete boxes. Our homes feature deep overhangs, internal courtyards, and natural material palettes that age beautifully over time in the Sri Lankan climate.
        </p>
      </section>

      {/* Elegant Trust Indicators */}
      <section className="py-24 bg-secondary/30 relative border-y border-border">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid md:grid-cols-3 gap-16 lg:gap-24">
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-secondary text-primary flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                <Leaf className="font-light" size={26} />
              </div>
              <h3 className="text-xl font-heading font-medium text-foreground mb-4">Passive Cooling</h3>
              <p className="text-foreground/70 font-light leading-relaxed">
                Strategically placed courtyards and louvered windows channel natural breezes, dramatically reducing the need for mechanical cooling.
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-secondary text-primary flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                <Sun className="font-light" size={26} />
              </div>
              <h3 className="text-xl font-heading font-medium text-foreground mb-4">Natural Light Integration</h3>
              <p className="text-foreground/70 font-light leading-relaxed">
                Large sliding glass doors and skylights ensure every room is bathed in diffused, glare-free tropical sunlight throughout the day.
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-secondary text-primary flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                <Shield className="font-light" size={26} />
              </div>
              <h3 className="text-xl font-heading font-medium text-foreground mb-4">Turnkey Build Quality</h3>
              <p className="text-foreground/70 font-light leading-relaxed">
                From foundation to custom teak joinery, our in-house construction teams execute our architectural designs with uncompromised precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Designs - Elegant Grid */}
      <section className="py-24 bg-secondary/10 w-full border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-accent tracking-widest uppercase text-xs font-semibold mb-4 block">Signature Series</span>
              <h2 className="text-4xl md:text-5xl font-heading font-light text-primary">Featured Masterpieces</h2>
            </div>
            <Link href="/designs" className="group flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors pb-2 border-b border-primary/30">
              Explore Our Full Portfolio
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
            </Link>
          </div>

          <div className="relative h-150 overflow-y-auto pr-2 scrollbar-thin">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredDesigns.map((design) => (
                <div key={design.slug}>
                  <DesignCard design={design} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Sri Lankan Style */}
      <section className="py-24 bg-background w-full border-t border-border/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent tracking-widest uppercase text-xs font-semibold mb-4 block">Client Voices</span>
            <h2 className="text-3xl md:text-4xl font-heading font-light text-primary leading-[1.2]">
              Stories from our homeowners.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="p-8 md:p-10 border border-border bg-card shadow-sm relative group hover:border-primary/30 transition-colors">
              <div className="absolute top-6 right-8 text-secondary/40 font-heading text-8xl leading-none select-none group-hover:text-secondary/70 transition-colors">&quot;</div>
              <p className="text-foreground/80 font-light leading-relaxed mb-8 relative z-10 italic text-lg">
                &quot;The way our home catches the evening breeze is nothing short of magical. We barely use air conditioning, and the seamless flow from our living room into the courtyard makes the space feel infinite.&quot;
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary font-heading font-medium text-lg">S</div>
                <div>
                  <h4 className="font-heading font-medium text-primary text-lg">Sahan & Dilini</h4>
                  <span className="text-xs text-accent uppercase tracking-wider font-semibold">Colombo 07</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-10 border border-border bg-card shadow-sm relative group hover:border-primary/30 transition-colors">
              <div className="absolute top-6 right-8 text-secondary/40 font-heading text-8xl leading-none select-none group-hover:text-secondary/70 transition-colors">&quot;</div>
              <p className="text-foreground/80 font-light leading-relaxed mb-8 relative z-10 italic text-lg">
                &quot;Every corner of our villa feels grounded in the landscape. The use of local timber and natural stone gives it a warmth that modern glass-and-steel houses completely lack. It&apos;s a true sanctuary.&quot;
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary font-heading font-medium text-lg">A</div>
                <div>
                  <h4 className="font-heading font-medium text-primary text-lg">Amesh Perera</h4>
                  <span className="text-xs text-accent uppercase tracking-wider font-semibold">Kandy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Call to Action */}
      <section className="relative py-32 bg-primary text-white overflow-hidden">
        {/* Subtle decorative background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-current">
            <polygon points="100,0 0,100 100,100" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-light mb-8">Begin Your Journey</h2>
          <p className="text-xl text-white/80 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            Schedule a private consultation with our principal architects to conceptualize your sanctuary.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-5 bg-background text-primary hover:bg-secondary font-medium tracking-wide transition-all rounded-none shadow-xl hover:-translate-y-1"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
