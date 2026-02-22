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
            <div className="flex flex-col h-full bg-card hover:bg-secondary/20 transition-all duration-500 border border-border hover:border-primary/30">
                {/* Image Container */}
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <Image
                        src={design.images[0]}
                        alt={design.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-3 py-1 border border-border">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{design.style}</span>
                    </div>
                </div>

                {/* Content Container */}
                <div className="p-5 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-heading font-medium text-primary group-hover:text-accent transition-colors line-clamp-1">{design.title}</h3>
                    </div>

                    <p className="text-foreground/70 text-xs leading-relaxed mb-4 font-light line-clamp-2">
                        {design.description}
                    </p>

                    <div className="grid grid-cols-3 gap-2 py-4 border-t border-border/50 mt-auto">
                        <div className="flex items-center justify-center gap-1.5">
                            <BedDouble className="text-accent/70" size={16} />
                            <span className="text-[11px] font-medium text-foreground tracking-wide">{design.bedrooms} Beds</span>
                        </div>
                        <div className="flex items-center justify-center gap-1.5 border-x border-border/50">
                            <Bath className="text-accent/70" size={16} />
                            <span className="text-[11px] font-medium text-foreground tracking-wide">{design.bathrooms} Baths</span>
                        </div>
                        <div className="flex items-center justify-center gap-1.5">
                            <Square className="text-accent/70" size={16} />
                            <span className="text-[11px] font-medium text-foreground tracking-wide">{design.area}</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border/50 mt-2">
                        <span className="text-base font-heading font-semibold text-primary">{design.priceRange}</span>
                        <span className="text-accent text-[11px] font-bold tracking-widest uppercase group-hover:mr-1 transition-all">Details &rarr;</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
