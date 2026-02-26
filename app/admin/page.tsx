import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/Sections/Footer";
import StatusBadge from "@/components/Admin/StatusBadge";
import inquiriesData from "@/data/inquiries.json";
import { Mail, Phone, Calendar, User, Info, MessageSquare, ChevronRight, Filter, Search } from "lucide-react";

export default function AdminInquiriesPage() {
    const inquiries = inquiriesData;
    const stats = {
        total: inquiries.length,
        new: inquiries.filter(i => i.status === 'new').length,
        pending: inquiries.filter(i => i.status === 'seen').length
    };

    return (
        <main className="min-h-screen flex flex-col bg-[#FBF9F6]">
            <Navbar />

            <section className="pt-32 lg:pt-40 pb-24 max-w-7xl mx-auto px-6 w-full flex-grow">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
                    <div>
                        <span className="text-accent tracking-widest uppercase text-xs font-semibold mb-4 block underline underline-offset-8">Admin Console</span>
                        <h1 className="text-4xl md:text-5xl font-heading font-light text-primary tracking-tight">Client Inquiries</h1>
                    </div>

                    <div className="grid grid-cols-3 gap-8 md:gap-12">
                        <div className="flex flex-col">
                            <span className="text-3xl font-heading text-primary">{stats.total}</span>
                            <span className="text-[10px] uppercase tracking-widest text-primary/60 font-medium">Total</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-heading text-accent">{stats.new}</span>
                            <span className="text-[10px] uppercase tracking-widest text-accent/60 font-medium">New</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-heading text-primary/60">{stats.pending}</span>
                            <span className="text-[10px] uppercase tracking-widest text-primary/40 font-medium">Pending</span>
                        </div>
                    </div>
                </div>

                {/* Dashboard Controls */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="relative flex-grow">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" size={18} />
                        <input
                            type="text"
                            placeholder="Search by name, email or project details..."
                            className="w-full bg-white border border-border pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-primary/30 font-light"
                        />
                    </div>
                    <button className="flex items-center justify-center gap-2 px-6 py-3 border border-border bg-white text-primary text-sm font-medium hover:bg-white/50 transition-colors">
                        <Filter size={18} />
                        Filters
                    </button>
                </div>

                {/* Inquiries List */}
                <div className="bg-white border border-border shadow-sm overflow-hidden">
                    <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-secondary/20 border-b border-border text-[10px] uppercase tracking-widest font-bold text-primary/60">
                        <div className="col-span-3">Client</div>
                        <div className="col-span-2">Interest</div>
                        <div className="col-span-4">Message Preview</div>
                        <div className="col-span-2">Date</div>
                        <div className="col-span-1 text-right">Status</div>
                    </div>

                    <div className="divide-y divide-border">
                        {inquiries.map((inquiry) => (
                            <div key={inquiry.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 hover:bg-secondary/5 transition-colors cursor-pointer group">
                                <div className="md:col-span-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary font-heading font-medium">
                                            {inquiry.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-heading font-medium text-primary group-hover:text-accent transition-colors">{inquiry.name}</h3>
                                            <p className="text-xs text-primary/50 font-light">{inquiry.email}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="md:col-span-2 flex items-center">
                                    <span className="text-xs text-primary font-medium bg-secondary/50 px-2 py-1 border border-border/50 capitalize whitespace-nowrap">
                                        {inquiry.interest.replace('_', ' ')}
                                    </span>
                                </div>

                                <div className="md:col-span-4 flex items-center">
                                    <p className="text-xs text-primary/70 font-light line-clamp-1 italic">
                                        "{inquiry.message}"
                                    </p>
                                </div>

                                <div className="md:col-span-2 flex items-center">
                                    <span className="text-xs text-primary/50 font-light tabular-nums">
                                        {new Date(inquiry.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                                    </span>
                                </div>

                                <div className="md:col-span-1 flex items-center justify-end">
                                    <StatusBadge status={inquiry.status as any} />
                                    <ChevronRight className="ml-2 text-primary/20 group-hover:text-accent transition-colors hidden md:block" size={16} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Aesthetic Detail Note */}
                <div className="mt-12 flex items-center gap-6 p-8 border border-accent/20 bg-accent/[0.02]">
                    <div className="w-12 h-12 flex items-center justify-center bg-accent/10 rounded-full text-accent shrink-0">
                        <Info size={24} className="stroke-1" />
                    </div>
                    <p className="text-sm text-primary/70 font-light leading-relaxed">
                        <strong className="text-accent font-medium">Tip:</strong> Regularly responding to new inquiries within 24 hours leads to a 40% higher conversion rate for tropical residential projects. Ensure all customer phone numbers are verified before adding to the CRM.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
