import Image from "next/image";
import { notFound } from "next/navigation";
import { BedDouble, Bath, Square, Calendar, MapPin, ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";

import { designsData } from "@/data/designs";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const design = (designsData).find(d => d.slug === slug);

    if (!design) {
        notFound();
    }

    return {
        title: `${design.title} - House Design`,
        description: design.description,
    };
}

export default async function DesignDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const design = (designsData).find(d => d.slug === slug);

    if (!design) {
        notFound();
    }

    return (
        <main className="min-h-screen flex flex-col bg-background selection:bg-primary/20">


            <section className="pt-24 md:pt-32 pb-12 max-w-7xl mx-auto px-6 w-full">
                <Link href="/designs" className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors text-xs md:text-sm font-medium tracking-wide uppercase mb-8 md:mb-12">
                    <ArrowLeft size={16} /> Back to Portfolio
                </Link>

                {/* Hero Header */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16 items-end">
                    <div className="lg:col-span-2">
                        <span className="text-accent tracking-[0.3em] uppercase text-[10px] md:text-xs font-bold mb-4 block">{design.category.replace('-', ' ')}</span>

                        <h1 className="text-3xl md:text-6xl font-heading font-light text-foreground mb-6 leading-tight">{design.title}</h1>
                        <p className="text-foreground/70 text-base md:text-xl font-light leading-relaxed">
                            {design.description}
                        </p>
                    </div>
                    <div className="lg:col-span-1 flex flex-col items-start lg:items-end justify-end">
                        <span className="text-[10px] md:text-xs uppercase tracking-widest text-foreground/50 mb-1 md:mb-2">Estimated Build Cost</span>
                        <span className="text-2xl md:text-3xl font-heading font-medium text-primary">{design.priceRange}</span>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="relative aspect-video lg:aspect-[21/9] w-full mb-12 md:mb-20 overflow-hidden border border-border shadow-sm">
                    <Image
                        src={design.images[0]}
                        alt={design.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-24 mb-24">

                    <div className="lg:col-span-2 space-y-12 md:space-y-16">
                        <section>
                            <h2 className="text-2xl font-heading font-medium mb-6 md:mb-8 pb-4 border-b border-border text-foreground">Architectural Narrative</h2>
                            <p className="text-foreground/70 text-base md:text-lg leading-relaxed font-light">
                                This design epitomizes the core principles of tropical modernism. The layout is intentionally fragmented to create a sequence of semi-open courts that act as natural wind tunnels and light wells. Extensive use of deep eaves protects the interior spaces from the harsh sun and monsoon downpours while framing cinematic views of the surrounding foliage.
                                <br /><br />
                                The material palette is strictly localized: burnished concrete floors, unplastered brickwork features, and extensive use of reclaimed teak and Kumbuk timber. These materials not only reduce the carbon footprint but also weather gracefully, grounding the structure firmly within its context over time.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-heading font-medium mb-6 md:mb-8 pb-4 border-b border-border text-foreground">Key Features</h2>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                                {design.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-4 text-foreground/70 font-light text-sm md:text-base">
                                        <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Gallery */}
                        <section>
                            <h2 className="text-2xl font-heading font-medium mb-6 md:mb-8 pb-4 border-b border-border text-foreground">Project Gallery</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                {design.images.slice(1).map((img, idx) => (
                                    <div key={idx} className="relative aspect-square border border-border overflow-hidden">
                                        <Image src={img} alt={`Gallery ${idx + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-700" />
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar Details */}
                    <div className="lg:col-span-1">
                        <div className="bg-secondary/20 p-6 md:p-8 rounded-sm border border-border shadow-sm sticky top-32">
                            <h3 className="text-base md:text-lg font-heading font-medium mb-6 md:mb-8 text-foreground uppercase tracking-widest text-center">Specifications</h3>

                            <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
                                <div className="flex items-center justify-between pb-4 border-b border-border">
                                    <div className="flex items-center gap-3 text-foreground/60">
                                        <BedDouble size={18} /> <span className="text-xs md:text-sm tracking-wide">Bedrooms</span>
                                    </div>
                                    <span className="font-heading font-medium text-foreground text-sm md:text-base">{design.bedrooms}</span>
                                </div>
                                <div className="flex items-center justify-between pb-4 border-b border-border">
                                    <div className="flex items-center gap-3 text-foreground/60">
                                        <Bath size={18} /> <span className="text-xs md:text-sm tracking-wide">Bathrooms</span>
                                    </div>
                                    <span className="font-heading font-medium text-foreground text-sm md:text-base">{design.bathrooms}</span>
                                </div>
                                <div className="flex items-center justify-between pb-4 border-b border-border">
                                    <div className="flex items-center gap-3 text-foreground/60">
                                        <Square size={18} /> <span className="text-xs md:text-sm tracking-wide">Total Area</span>
                                    </div>
                                    <span className="font-heading font-medium text-foreground text-sm md:text-base">{design.area}</span>
                                </div>
                                <div className="flex items-center justify-between pb-4 border-b border-border">
                                    <div className="flex items-center gap-3 text-foreground/60">
                                        <MapPin size={18} /> <span className="text-xs md:text-sm tracking-wide">Ideal Land</span>
                                    </div>
                                    <span className="font-heading font-medium text-foreground text-sm md:text-base">{design.location}</span>
                                </div>
                                <div className="flex items-center justify-between pb-4 border-b border-border">
                                    <div className="flex items-center gap-3 text-foreground/60">
                                        <Calendar size={18} /> <span className="text-xs md:text-sm tracking-wide">Build Time</span>
                                    </div>
                                    <span className="font-heading font-medium text-foreground text-sm md:text-base">{design.timeline}</span>
                                </div>
                            </div>

                            <Link
                                href="/contact"
                                className="block w-full py-4 text-center bg-primary text-white font-medium hover:bg-primary/90 transition-colors uppercase tracking-widest text-xs md:text-sm shadow-md active:scale-[0.98]"
                            >
                                Inquire About Model
                            </Link>
                        </div>
                    </div>

                </div>
            </section>


        </main>
    );
}
