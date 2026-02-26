"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import DesignCard from "../ui/DesignCard";
import { designsData } from "@/data/designs";

export default function FeaturedDesigns() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const featuredDesigns = designsData.slice(0, 6);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === "left" ? -400 : 400;
            scrollContainerRef.current.scrollBy({
                left: scrollAmount,
                behavior: "smooth"
            });
        }
    };

    return (
        <section className="py-24 bg-secondary/10 w-full border-t border-border">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
                    <div>
                        <span className="text-accent tracking-widest uppercase text-xs font-semibold mb-4 block">Signature Series</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-light text-primary">Featured Masterpieces</h2>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-6 w-full md:w-auto">
                        <Link href="/designs" className="group flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors pb-2 border-b border-primary/30">
                            Explore Our Full Portfolio
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                        </Link>

                        <div className="hidden md:flex gap-4">
                            <button
                                onClick={() => scroll("left")}
                                className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                                aria-label="Scroll left"
                            >
                                <ArrowLeft size={20} />
                            </button>
                            <button
                                onClick={() => scroll("right")}
                                className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                                aria-label="Scroll right"
                            >
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    ref={scrollContainerRef}
                    className="relative -mx-6 px-6 overflow-x-auto snap-x snap-mandatory pb-12 hide-scrollbar scroll-smooth"
                >
                    <div className="flex gap-8">
                        {featuredDesigns.map((design) => (
                            <div key={design.slug} className="flex-none w-[280px] sm:w-[350px] md:w-[400px] lg:w-[450px] snap-start">
                                <DesignCard design={design} />
                            </div>
                        ))}
                        {/* Spacer for right padding in horizontal scroll */}
                        <div className="flex-none w-px h-full"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
