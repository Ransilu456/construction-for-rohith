import Link from "next/link";
import { Home, Layers, Building2, Trees, ArrowRight, ArrowUpRight } from "lucide-react";

export default function HouseStory() {
  const stories = [
    {
      title: "Single Story",
      description: "Seamless indoor-outdoor flow, optimized for accessibility and open-plan living with internal courtyards.",
      icon: Home,
      link: "/designs?type=single-story"
    },
    {
      title: "Two Story",
      description: "Maximized square footage with distinct separation between living areas and breezy sleeping quarters.",
      icon: Layers,
      link: "/designs?type=two-story"
    },
    {
      title: "Three Story",
      description: "Vertical elegance designed for narrow lots, offering panoramic coastal views and rooftop terraces.",
      icon: Building2,
      link: "/designs?type=three-story"
    },
    {
      title: "Tropical Villas",
      description: "Luxury retreats featuring warm timber, terracotta roofs, and resort-style lush amenities.",
      icon: Trees,
      link: "/designs?type=villas"
    }
  ];

  return (
    <section className="bg-secondary/20 py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle architectural grid overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#A25035 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-accent tracking-[0.3em] uppercase text-xs font-bold mb-4 block">House Story</span>
            <h2 className="text-4xl md:text-6xl font-heading font-light text-primary leading-tight">
              Crafting your <br /> architectural legacy.
            </h2>
          </div>
          <Link href="/designs" className="group flex items-center gap-3 text-primary font-medium hover:text-accent transition-all duration-300 pb-2 border-b border-primary/20 hover:border-accent">
            <span>Explore All Designs</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stories.map((story, idx) => (
            <Link
              key={idx}
              href={story.link}
              className="group bg-white/40 backdrop-blur-md p-8 md:p-10 border border-[#E8DFD1]/60 shadow-sm hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-2 hover:border-accent/30 transition-all duration-500 flex flex-col h-full relative overflow-hidden"
            >
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-700 group-hover:bg-accent/10 group-hover:scale-150"></div>

              <div className="w-16 h-16 bg-white border border-[#F4EFE6] shadow-sm flex items-center justify-center text-accent mb-10 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 relative z-10">
                <story.icon size={28} strokeWidth={1.5} />
              </div>

              <h3 className="text-2xl font-heading font-medium text-primary mb-4 relative z-10">{story.title}</h3>
              <p className="text-foreground/60 font-light leading-relaxed mb-10 relative z-10 text-sm italic">
                &quot;{story.description}&quot;
              </p>

              <div className="mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary group-hover:text-accent transition-colors relative z-10">
                <span>View layouts</span>
                <ArrowUpRight size={14} className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

