import Link from "next/link";

export default function CTA() {
    return (
        <section className="relative py-24 md:py-32 bg-primary text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-current">
                    <polygon points="100,0 0,100 100,100" />
                </svg>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-6xl font-heading font-light mb-8">Begin Your Journey</h2>
                <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed">
                    Schedule a private consultation with our principal architects to conceptualize your sanctuary.
                </p>
                <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-10 py-5 bg-background text-primary hover:bg-secondary font-medium tracking-wide transition-all rounded-none shadow-xl hover:-translate-y-1 w-full sm:w-auto"
                >
                    Schedule a Consultation
                </Link>
            </div>
        </section>
    );
}