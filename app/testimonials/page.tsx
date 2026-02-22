"use client";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { MessageSquare, Quote, Star, MapPin, User } from "lucide-react";

const testimonials = [
    {
        quote: "The way our home catches the evening breeze is nothing short of magical. We barely use air conditioning, and the seamless flow from our living room into the courtyard makes the space feel infinite.",
        author: "Sahan & Dilini",
        location: "Colombo 07",
        initial: "S",
        rating: 5,
        type: "Modern Villa"
    },
    {
        quote: "Every corner of our villa feels grounded in the landscape. The use of local timber and natural stone gives it a warmth that modern glass-and-steel houses completely lack. It's a true sanctuary.",
        author: "Amesh Perera",
        location: "Kandy",
        initial: "A",
        rating: 5,
        type: "Hillside Retreat"
    },
    {
        quote: "We were looking for a builder who understood the nuances of tropical living. Randiya Construction delivered a home that is functional, beautiful, and perfectly suited for the Sri Lankan sun.",
        author: "Ranjit Wijesinghe",
        location: "Galle",
        initial: "R",
        rating: 5,
        type: "Beachfront Home"
    },
    {
        quote: "Their attention to detail, especially in the wood joinery and stone work, is exceptional. It's rare to find craftsmen who take such pride in their work these days.",
        author: "Kumari de Silva",
        location: "Negombo",
        initial: "K",
        rating: 5,
        type: "Heritage Renovation"
    },
    {
        quote: "Working with their architectural team was a breeze. They listened to our needs and created a space that maximizes natural light without the glare. A perfect balance.",
        author: "Dr. Priyantha",
        location: "Kurunegala",
        initial: "P",
        rating: 5,
        type: "Eco-Friendly Residence"
    },
    {
        quote: "The construction was completed on time and within the agreed budget. Professional, transparent, and highly skilled team. I highly recommend them for any luxury project.",
        author: "Mahanama Perera",
        location: "Chilaw",
        initial: "M",
        rating: 5,
        type: "Commercial Project"
    }
];

export default function TestimonialsPage() {
    return (
        <main className="min-h-screen flex flex-col bg-background selection:bg-primary/20">
            <Navbar />

            {/* Header Section */}
            <section className="pt-40 lg:pt-52 pb-24 border-b border-border bg-secondary/10">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <span className="text-accent tracking-[0.3em] uppercase text-xs font-semibold mb-6 block">Client Voices</span>
                    <h1 className="text-5xl md:text-7xl font-heading font-light tracking-tight text-primary mb-8">
                        Stories from <br className="hidden md:block" /> our homeowners.
                    </h1>
                    <p className="text-foreground/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto italic">
                        &quot;Architecture is not just about building walls, but about weaving stories into the fabric of the landscape.&quot;
                    </p>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="py-24 lg:py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                        {testimonials.map((t, idx) => (
                            <div
                                key={idx}
                                className="group flex flex-col p-8 md:p-10 bg-white border border-border shadow-sm hover:border-primary/30 transition-all duration-500 relative"
                            >
                                <div className="absolute top-6 right-8 text-secondary/40 font-heading text-8xl leading-none select-none group-hover:text-secondary/70 transition-colors pointer-events-none">
                                    &quot;
                                </div>

                                <div className="flex gap-1 mb-6">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <Star key={i} size={14} className="fill-accent text-accent" />
                                    ))}
                                </div>

                                <p className="text-foreground/80 font-light leading-relaxed mb-10 text-lg relative z-10 italic flex-grow">
                                    &quot;{t.quote}&quot;
                                </p>

                                <div className="pt-8 border-t border-border/50 flex items-center gap-5 mt-auto relative z-10">
                                    <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center text-primary font-heading font-medium text-xl shadow-inner group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                                        {t.initial}
                                    </div>
                                    <div>
                                        <h4 className="font-heading font-medium text-primary text-xl mb-1 group-hover:text-accent transition-colors">{t.author}</h4>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[10px] text-accent font-bold uppercase tracking-widest flex items-center gap-1.5">
                                                <MapPin size={10} /> {t.location}
                                            </span>
                                            <span className="text-[10px] text-primary/40 font-medium uppercase tracking-widest">{t.type}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Banner */}
            <section className="py-24 bg-primary text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
                    <Quote size={400} className="text-white fill-current -mr-32 -mt-32" />
                </div>

                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-heading font-light mb-8 leading-tight">
                        Ready to write your own <br /> sanctuary story?
                    </h2>
                    <p className="text-lg text-white/80 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
                        Every masterpiece begins with a conversation. Let our architects help you conceptualize a home that truly breathes.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center justify-center px-10 py-5 bg-white text-primary hover:bg-secondary font-medium tracking-widest uppercase text-sm transition-all rounded-none shadow-xl hover:-translate-y-1"
                    >
                        Schedule a Consultation
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
