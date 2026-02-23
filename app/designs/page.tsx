import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import DesignCard from "@/components/ui/DesignCard";
import { HouseDesign } from "@/types";
import { designsData } from "@/data/designs";

export default function DesignsPage() {
    const designs = designsData;

    return (
        <main className="min-h-screen flex flex-col bg-background selection:bg-primary/20">
            <Navbar />

            <section className="pt-40 lg:pt-52 pb-24 max-w-7xl mx-auto px-6 w-full flex-grow">
                <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-32">
                    <span className="text-accent tracking-widest uppercase text-xs font-semibold mb-6 block">Architectural Models</span>
                    <h1 className="text-5xl md:text-6xl font-heading font-light tracking-tight text-foreground mb-8">Portfolio.</h1>
                    <p className="text-foreground/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
                        Explore our curated collection of tropical home designs. Each model can be customized to fit your specific land dimensions and lifestyle requirements.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {designs.map(design => (
                        <DesignCard key={design.slug} design={design} />
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
