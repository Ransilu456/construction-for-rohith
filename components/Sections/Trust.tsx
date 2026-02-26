import { Leaf, Sun, Shield } from "lucide-react";

export default function Trust() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30 relative border-y border-border">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-24">
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full bg-secondary text-primary flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-500">
              <Leaf className="font-light" size={26} />
            </div>
            <h3 className="text-xl font-heading font-medium text-foreground mb-4">Passive Cooling</h3>
            <p className="text-foreground/70 font-light leading-relaxed text-sm md:text-base">
              Strategically placed courtyards and louvered windows channel natural breezes, dramatically reducing the need for mechanical cooling.
            </p>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full bg-secondary text-primary flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-500">
              <Sun className="font-light" size={26} />
            </div>
            <h3 className="text-xl font-heading font-medium text-foreground mb-4">Natural Light Integration</h3>
            <p className="text-foreground/70 font-light leading-relaxed text-sm md:text-base">
              Large sliding glass doors and skylights ensure every room is bathed in diffused, glare-free tropical sunlight throughout the day.
            </p>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full bg-secondary text-primary flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-500">
              <Shield className="font-light" size={26} />
            </div>
            <h3 className="text-xl font-heading font-medium text-foreground mb-4">Turnkey Build Quality</h3>
            <p className="text-foreground/70 font-light leading-relaxed text-sm md:text-base">
              From foundation to custom teak joinery, our in-house construction teams execute our architectural designs with uncompromised precision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}