import Link from "next/link";
import Image from "next/image";
import { BedDouble, Bath, Square } from "lucide-react";
import { HouseDesign } from "@/types";

interface DesignCardProps {
    design: HouseDesign;
}

export default function DesignCard({ design }: DesignCardProps) {
    return (
        <Link href={`/designs/${design.slug}`} className="group block h-full">
            <div className="flex flex-col h-full bg-card group-hover:bg-secondary/10 transition-colors duration-500 overflow-hidden border border-border group-hover:border-primary/30 shadow-sm">
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                        src={design.images[0]}
                        alt={design.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-4 py-1 border border-border">
                        <span className="text-xs font-bold uppercase tracking-widest text-primary">{design.style}</span>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                </div>

                {/* Content Container */}
                <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-heading font-light text-foreground mb-3 group-hover:text-primary transition-colors">{design.title}</h3>
                    <p className="text-foreground/60 text-sm leading-relaxed mb-6 font-light line-clamp-2 flex-grow">
                        {design.description}
                    </p>

                    <div className="grid grid-cols-3 gap-4 py-6 border-t border-border">
                        <div className="flex flex-col items-center gap-2">
                            <BedDouble className="text-primary/70" size={20} />
                            <span className="text-xs font-medium text-foreground tracking-wide">{design.bedrooms} Beds</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 border-x border-border">
                            <Bath className="text-primary/70" size={20} />
                            <span className="text-xs font-medium text-foreground tracking-wide">{design.bathrooms} Baths</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Square className="text-primary/70" size={20} />
                            <span className="text-xs font-medium text-foreground tracking-wide">{design.area}</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-border">
                        <span className="text-lg font-heading font-medium text-foreground">{design.priceRange}</span>
                        <span className="text-primary text-sm font-semibold tracking-widest uppercase group-hover:mr-1 transition-all">Details &rarr;</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
