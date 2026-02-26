import { Star } from "lucide-react";
import { Testimonial } from "@/types";

export default function ClientMSG({ name, location, msg, stars, type }: Testimonial) {
    return (
        <div className="p-8 md:p-10 border border-border bg-card shadow-sm relative group hover:border-primary/30 transition-colors h-full flex flex-col">
            <div className="absolute top-6 right-8 text-secondary/40 font-heading text-8xl leading-none select-none group-hover:text-secondary/70 transition-colors pointer-events-none">&quot;</div>
            <p className="text-foreground/80 font-light leading-relaxed mb-8 relative z-10 italic text-lg flex-grow">
                &quot;{msg}&quot;
            </p>
            <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary font-heading font-medium text-lg uppercase group-hover:bg-primary group-hover:text-white transition-colors">
                    {name.charAt(0)}
                </div>
                <div>
                    <h4 className="font-heading font-medium text-primary text-lg">{name}</h4>
                    <span className="text-[10px] text-accent font-bold uppercase tracking-widest block">{location}</span>
                    {type && <span className="text-[10px] text-primary/40 font-medium uppercase tracking-widest">{type}</span>}
                </div>
            </div>
            {stars && (
                <div className="flex items-center gap-1 mt-6">
                    {[...Array(stars)].map((_, i) => (
                        <Star key={i} size={12} className="fill-accent text-accent" />
                    ))}
                </div>
            )}
        </div>
    );
}
