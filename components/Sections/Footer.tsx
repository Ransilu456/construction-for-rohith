import Link from "next/link";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-background pt-24 pb-12 border-t border-border">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20 text-foreground">
                    <div className="sm:col-span-2 lg:col-span-1">
                        <Link href="/" className="flex items-center gap-4 mb-8 group">
                            <div className="flex items-center justify-center font-heading font-light text-xl tracking-widest text-primary border border-primary/20 w-12 h-12 rounded-full">
                                MHC
                            </div>
                            <div className="flex flex-col">
                                <span className="font-heading font-medium text-lg tracking-wide uppercase text-foreground">Modern House</span>
                                <span className="text-[10px] font-medium tracking-[0.2em] text-primary uppercase">Construction</span>
                            </div>
                        </Link>
                        <p className="max-[425px]:hidden text-foreground/70 text-sm leading-relaxed max-w-xs mb-8 font-light">
                            Experienced and reliable construction company specializing in residential and commercial projects
                        </p>
                        <div className="flex gap-4 text-primary">
                            <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"><Instagram size={16} /></a>
                            <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"><Facebook size={16} /></a>
                            <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"><Linkedin size={16} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-heading font-semibold mb-6 text-sm tracking-widest uppercase text-foreground">Studio</h4>
                        <ul className="space-y-4 text-sm text-foreground/70 font-light">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About us</Link></li>
                            <li><Link href="/designs" className="hover:text-primary transition-colors">Designs</Link></li>
                            <li><Link href="/testimonials" className="hover:text-primary transition-colors">Client Voices</Link></li>
                            <li><Link href="/gallery" className="hover:text-primary transition-colors">Journal & Media</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="max-[425px]:hidden">
                        <h4 className="font-heading font-semibold mb-6 text-sm tracking-widest uppercase text-foreground">Expertise</h4>
                        <ul className="space-y-4 text-sm text-foreground/70 font-light">
                            <li><Link href="/services#design" className="hover:text-primary transition-colors">Architectural Design</Link></li>
                            <li><Link href="/services#construction" className="hover:text-primary transition-colors">Turnkey Construction</Link></li>
                            <li><Link href="/services#renovation" className="hover:text-primary transition-colors">Heritage Restorations</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Request a Consultation</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-heading font-semibold mb-6 text-sm tracking-widest uppercase text-foreground">Inquiries</h4>
                        <ul className="space-y-5 text-sm text-foreground/80 font-light">
                            <li className="flex items-start gap-4">
                                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                                <span>Puttalam Road,<br />Chilaw</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone size={18} className="text-primary shrink-0" />
                                <span className="tracking-wide">077 8682 720<br />07777 88 600</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail size={18} className="text-primary shrink-0" />
                                <span>inquiries@modernhouse.lk</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-foreground/50 text-xs font-light text-center md:text-left">
                        &copy; {new Date().getFullYear()} <span className="max-[425px]:hidden">Modern House Construction (PVT) LTD.</span><span className="min-[426px]:hidden">MHC.</span> All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-foreground/50 font-light">
                        <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
