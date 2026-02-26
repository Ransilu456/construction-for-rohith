import Image from "next/image";

import { designsData } from "@/data/designs";

export default function GalleryPage() {
    const allImages = designsData.flatMap(d => d.images);

    return (
        <main className="min-h-screen flex flex-col bg-background selection:bg-primary/20">


            <section className="pt-40 lg:pt-52 pb-24 max-w-[1400px] mx-auto px-6 w-full flex-grow">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-accent tracking-widest uppercase text-xs font-semibold mb-6 block">Visual Journal</span>
                    <h1 className="text-5xl md:text-6xl font-heading font-light tracking-tight text-foreground mb-8">Spaces & Light.</h1>
                    <p className="text-foreground/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
                        A visual exploration of our completed projects. Capturing the interplay of natural light, shadow, and organic materials within tropical architecture.
                    </p>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                    {allImages.map((src, idx) => (
                        <div key={idx} className="relative break-inside-avoid rounded-sm overflow-hidden group border border-border/50 shadow-sm transition-all cursor-pointer">
                            <Image
                                src={src}
                                alt={`Gallery Image ${idx + 1}`}
                                width={600}
                                height={800} // providing rough dimensions for structural layout before load
                                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                            />
                            <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px] flex items-center justify-center">
                                <span className="text-foreground font-heading font-medium text-sm uppercase tracking-widest border border-foreground/30 px-6 py-2 bg-background/90">Expand</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


        </main>
    );
}
