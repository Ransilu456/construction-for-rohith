import { Mail, MapPin, Phone, Clock } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Image from "next/image";

export default function ContactPage() {
    return (
        <main className="min-h-screen flex flex-col bg-background selection:bg-primary/20">
            <Navbar />

            <section className="pt-40 lg:pt-52 pb-24 max-w-7xl mx-auto px-6 w-full flex-grow">
                <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-32">
                    <span className="text-accent tracking-widest uppercase text-xs font-semibold mb-6 block">Inquiries</span>
                    <h1 className="text-5xl md:text-6xl font-heading font-light tracking-tight text-foreground mb-8">Start a Conversation.</h1>
                    <p className="text-foreground/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
                        Whether you are ready to build or simply exploring possibilities, our architects are here to guide you through the process of creating your tropical sanctuary.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">

                    {/* Contact Form */}
                    <div className="bg-card p-10 md:p-14 border border-border shadow-sm rounded-sm">
                        <h2 className="text-3xl font-heading font-light text-foreground mb-10">Send a Message</h2>
                        <form className="space-y-8 flex flex-col">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-xs uppercase tracking-widest text-foreground/60 font-semibold" htmlFor="name">Full Name</label>
                                    <input id="name" type="text" className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-foreground/30 font-light" placeholder="John Doe" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs uppercase tracking-widest text-foreground/60 font-semibold" htmlFor="phone">Phone Number</label>
                                    <input id="phone" type="tel" className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-foreground/30 font-light" placeholder="+94 77 123 4567" />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-xs uppercase tracking-widest text-foreground/60 font-semibold" htmlFor="email">Email Address</label>
                                <input id="email" type="email" className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-foreground/30 font-light" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-3">
                                <label className="text-xs uppercase tracking-widest text-foreground/60 font-semibold" htmlFor="interest">Area of Interest</label>
                                <select id="interest" defaultValue="" className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-primary transition-colors font-light appearance-none">
                                    <option value="" disabled className="text-foreground/30">Select an option</option>
                                    <option value="new_build">New Construction</option>
                                    <option value="renovation">Heritage Renovation</option>
                                    <option value="design_only">Architectural Design Phase</option>
                                    <option value="other">Other Inquiry</option>
                                </select>
                            </div>

                            <div className="space-y-3 pb-4">
                                <label className="text-xs uppercase tracking-widest text-foreground/60 font-semibold" htmlFor="message">Project Details</label>
                                <textarea id="message" rows={4} className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-foreground/30 font-light resize-none" placeholder="Briefly describe your vision, land location, and estimated timeline..."></textarea>
                            </div>

                            <button type="submit" className="w-full py-5 bg-primary text-white font-medium hover:bg-primary/90 transition-all uppercase tracking-widest text-sm shadow-lg hover:-translate-y-1">
                                Submit Inquiry
                            </button>
                        </form>
                    </div>

                    {/* Contact Info & Map */}
                    <div className="space-y-16 lg:py-8">
                        <div>
                            <h2 className="text-3xl font-heading font-light text-foreground mb-8">Studio Headquarters</h2>
                            <p className="text-foreground/70 font-light leading-relaxed mb-10">
                                Our architectural studio is located in the heart of Chilaw. Meetings are by strict appointment only to ensure dedicated creative focus for our clients.
                            </p>

                            <div className="space-y-8">
                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center shrink-0 text-primary">
                                        <MapPin size={20} className="stroke-1" />
                                    </div>
                                    <div>
                                        <h4 className="font-heading text-lg text-foreground mb-2">Location</h4>
                                        <p className="text-foreground/70 font-light leading-relaxed">Puttalam Road,<br />Chilaw</p>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center shrink-0 text-primary">
                                        <Phone size={20} className="stroke-1" />
                                    </div>
                                    <div>
                                        <h4 className="font-heading text-lg text-foreground mb-2">Direct Lines</h4>
                                        <p className="text-foreground/70 font-light leading-relaxed">077 8682 720<br />07777 88 600</p>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center shrink-0 text-primary">
                                        <Mail size={20} className="stroke-1" />
                                    </div>
                                    <div>
                                        <h4 className="font-heading text-lg text-foreground mb-2">Electronic Mail</h4>
                                        <p className="text-foreground/70 font-light leading-relaxed">inquiries@modernhouse.lk<br />careers@modernhouse.lk</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full aspect-[4/3] relative rounded-sm overflow-hidden border border-border shadow-sm grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                            {/* Map Placeholder using a map image for aesthetic reasons */}
                            <Image
                                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                fill
                                alt="Map Location"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-background/20"></div>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
