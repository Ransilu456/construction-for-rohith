import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="min-h-screen flex flex-col bg-background selection:bg-primary/20">


            {/* Hero Section */}
            <section className="relative pt-32 lg:pt-52 pb-16 md:pb-24 max-w-7xl mx-auto px-6 w-full">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
                    <span className="text-accent tracking-widest uppercase text-xs font-semibold mb-6 block">Our Story</span>
                    <h1 className="text-4xl md:text-7xl font-heading font-light tracking-tight text-foreground leading-tight mb-8">
                        Pioneers of<br className="hidden md:block" />Tropical Modernism.
                    </h1>
                    <p className="text-base md:text-xl font-light leading-relaxed max-w-2xl mx-auto text-foreground/70">
                        For over two decades, we have been reshaping the Sri Lankan residential landscape by blending indigenous architectural wisdom with precise structural engineering.
                    </p>
                </div>

                <div className="relative aspect-video lg:aspect-[21/9] w-full mt-10 overflow-hidden shadow-sm">
                    <Image
                        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                        alt="Architectural Sketch and Model"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </section>

            <section className="py-16 md:py-24 bg-secondary/30 border-y border-border">
                <div className="max-w-5xl mx-auto px-6 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-5xl font-heading font-light text-foreground mb-8">Rooted in Context</h2>
                            <p className="text-foreground/70 text-base md:text-lg leading-relaxed font-light mb-6">
                                Every piece of land has its own voice. Before drawing a single line, our architects spend hours on-site, understanding the wind patterns, the trajectory of the sun, and the existing foliage.
                            </p>
                            <p className="text-foreground/70 text-base md:text-lg leading-relaxed font-light">
                                We don&apos;t impose generic concrete structures onto a plot. We sculpt spaces that invite the landscape inside, relying on natural materials like Kumbuk, Titanium poured concrete, and locally fired Terracotta to ground our buildings.
                            </p>
                        </div>
                        <div className="relative aspect-square">
                            <Image
                                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Detail of tropical construction"
                                fill
                                className="object-cover rounded-sm shadow-md border border-border"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-20 md:py-32 max-w-7xl mx-auto px-6 w-full">
                <div className="text-center mb-16 md:mb-20 text-foreground">
                    <span className="text-accent tracking-widest uppercase text-xs font-semibold mb-4 block">Leadership</span>
                    <h2 className="text-3xl md:text-5xl font-heading font-light tracking-tight text-foreground">Principal Architects</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
                    {[
                        { name: "Rohith's Father", role: "Founder & Principal Architect", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
                        { name: "R. Menuka", role: "Head of Structural Engineering", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
                        { name: "M. Suraj", role: "Lead Landscape Architect", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }
                    ].map((person, idx) => (
                        <div key={idx} className="group">
                            <div className="relative aspect-[3/4] mb-8 overflow-hidden rounded-sm border border-border shadow-sm">
                                <Image src={person.img} alt={person.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                            </div>
                            <h3 className="text-xl font-heading font-medium text-foreground mb-2">{person.name}</h3>
                            <p className="text-primary tracking-wide text-sm font-medium">{person.role}</p>
                        </div>
                    ))}
                </div>
            </section>


        </main>
    );
}
