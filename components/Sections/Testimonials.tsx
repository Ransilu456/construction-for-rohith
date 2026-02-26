"use client";

import ClientMsg from "../ui/ClientMsg";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
    return (
        <section className="py-24 md:py-32 bg-background w-full border-t border-border/50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-20">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <span className="text-accent tracking-[0.3em] uppercase text-xs font-semibold mb-4 block">Client Voices</span>
                        <h2 className="text-4xl md:text-6xl font-heading font-light text-primary leading-tight">
                            Stories from <br /> our homeowners.
                        </h2>
                    </div>
                    <p className="text-foreground/60 max-w-md font-light leading-relaxed italic text-lg">
                        &quot;Creating sanctuaries that resonate with the soul and the landscape.&quot;
                    </p>
                </div>
            </div>

            <div className="relative group">
                <div className="flex gap-8 animate-scroll hover:[animation-play-state:paused] w-max px-6">
                    {testimonials.map((t, i) => (
                        <div key={`orig-${i}`} className="w-[350px] md:w-[450px] shrink-0">
                            <ClientMsg {...t} />
                        </div>
                    ))}
                    {testimonials.map((t, i) => (
                        <div key={`dup-${i}`} className="w-[350px] md:w-[450px] shrink-0">
                            <ClientMsg {...t} />
                        </div>
                    ))}
                </div>

                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(-50% - 1rem));
                    }
                }
                .animate-scroll {
                    animation: scroll 40s linear infinite;
                }
            `}</style>
        </section>
    );
}
