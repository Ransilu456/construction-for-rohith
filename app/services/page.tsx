import Image from "next/image";
import Link from "next/link";
import { PenTool, HardHat, Home, Hammer } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function ServicesPage() {
    const services = [
        {
            id: "design",
            icon: <PenTool size={36} className="text-primary mb-6 stroke-1" />,
            title: "Architectural Design",
            desc: "Our design process begins with a deep understanding of your lifestyle and the site's microclimate. We produce comprehensive architectural drawings, 3D visualizations, and material schedules following the tenets of Tropical Modernism.",
            img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: "construction",
            icon: <HardHat size={36} className="text-primary mb-6 stroke-1" />,
            title: "Turnkey Construction",
            desc: "We offer a seamless build experience. Our in-house teams of engineers, masons, and carpenters execute the architectural vision with uncompromising precision. You receive a fully completed home, ready to move in.",
            img: "https://images.unsplash.com/photo-1541888086925-eb49b1ca2d03?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: "renovation",
            icon: <Hammer size={36} className="text-primary mb-6 stroke-1" />,
            title: "Heritage Restoration",
            desc: "Breathing new life into old Walawwas and colonial bungalows. We carefully restore historical architectural elements while discreetly integrating modern plumbing, electrical, and cooling systems.",
            img: "https://images.unsplash.com/photo-1600607688969-a5bfcd64bd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: "interiors",
            icon: <Home size={36} className="text-primary mb-6 stroke-1" />,
            title: "Bespoke Interiors",
            desc: "Architecture and interiors should speak the same language. We design and manufacture custom teak and mahogany furniture, hand-loomed textiles, and spatial lighting to complement the building's architecture.",
            img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        }
    ];

    return (
        <main className="min-h-screen flex flex-col bg-background selection:bg-primary/20">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 lg:pt-52 pb-24 max-w-7xl mx-auto px-6 w-full text-center">
                <span className="text-accent tracking-widest uppercase text-xs font-semibold mb-6 block">Our Capabilities</span>
                <h1 className="text-5xl md:text-7xl font-heading font-light tracking-tight text-foreground mb-8">What We Do.</h1>
                <p className="text-foreground/70 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
                    From initial conceptual sketches to handing over the keys, we provide a holistic, end-to-end design and build service tailored to the nuances of the Sri Lankan climate.
                </p>
            </section>

            {/* Services List */}
            <section className="pb-32">
                <div className="max-w-[1400px] mx-auto px-6 w-full space-y-24">
                    {services.map((service, idx) => (
                        <div key={service.id} id={service.id} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`}>
                            <div className="w-full lg:w-1/2">
                                <div className="relative aspect-[4/3] w-full rounded-sm overflow-hidden shadow-sm border border-border">
                                    <Image src={service.img} alt={service.title} fill className="object-cover" />
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 lg:py-12">
                                {service.icon}
                                <h2 className="text-3xl lg:text-4xl font-heading font-light text-foreground mb-6">{service.title}</h2>
                                <p className="text-foreground/70 text-lg font-light leading-relaxed mb-10">
                                    {service.desc}
                                </p>
                                <Link href="/contact" className="inline-block border-b border-primary text-primary font-medium tracking-wide uppercase text-sm pb-1 hover:text-primary/70 transition-colors">
                                    Discuss a Project &rarr;
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
