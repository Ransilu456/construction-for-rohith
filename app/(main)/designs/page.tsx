"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import DesignCard from "@/components/ui/DesignCard";
import { designsData } from "@/data/designs";
import { ChevronLeft, ChevronRight, Filter, X } from "lucide-react";

const ITEMS_PER_PAGE = 6;

export default function DesignsPage() {
    const searchParams = useSearchParams();
    const router = useRouter();

    // State for filters
    const [category, setCategory] = useState<string>(searchParams.get("type") || "all");
    const [bedrooms, setBedrooms] = useState<string>("all");
    const [currentPage, setCurrentPage] = useState<number>(1);

    // Sync category with URL
    useEffect(() => {
        const type = searchParams.get("type");
        if (type) setCategory(type);
    }, [searchParams]);

    // Derived filtered designs
    const filteredDesigns = useMemo(() => {
        return designsData.filter(design => {
            const matchesCategory = category === "all" || design.category === category;
            const matchesBedrooms = bedrooms === "all" ||
                (bedrooms === "5+" ? design.bedrooms >= 5 : design.bedrooms === parseInt(bedrooms));
            return matchesCategory && matchesBedrooms;
        });
    }, [category, bedrooms]);

    // Pagination logic
    const totalPages = Math.ceil(filteredDesigns.length / ITEMS_PER_PAGE);
    const paginatedDesigns = filteredDesigns.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handleCategoryChange = (newCategory: string) => {
        setCategory(newCategory);
        setCurrentPage(1);
        if (newCategory === "all") {
            router.push("/designs");
        } else {
            router.push(`/designs?type=${newCategory}`);
        }
    };

    const handleBedroomChange = (val: string) => {
        setBedrooms(val);
        setCurrentPage(1);
    };

    return (
        <main className="min-h-screen flex flex-col bg-background selection:bg-primary/20">
            <section className="pt-32 lg:pt-52 pb-16 md:pb-24 max-w-7xl mx-auto px-6 w-full flex-grow">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <span className="text-accent tracking-widest uppercase text-xs font-semibold mb-6 block tracking-[0.2em]">
                        Architectural Collections
                    </span>
                    <h1 className="text-4xl md:text-6xl font-heading font-light tracking-tight text-foreground mb-8">
                        Design Portfolio.
                    </h1>
                </div>

                {/* Filter Bar */}
                <div className="mb-12 border-b border-border pb-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex flex-wrap justify-center gap-2">
                            {["all", "single-story", "two-story", "three-story", "villas"].map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => handleCategoryChange(cat)}
                                    className={`px-5 py-2 text-[11px] uppercase tracking-widest font-bold transition-all duration-300 border ${category === cat
                                        ? "bg-primary text-white border-primary"
                                        : "bg-transparent text-foreground/60 border-border hover:border-primary/50"
                                        }`}
                                >
                                    {cat.replace("-", " ")}
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold">Bedrooms:</span>
                                <select
                                    value={bedrooms}
                                    onChange={(e) => handleBedroomChange(e.target.value)}
                                    className="bg-secondary/20 border-border border px-4 py-2 text-xs font-medium focus:outline-none focus:border-primary/50 transition-colors"
                                >
                                    <option value="all">Any</option>
                                    <option value="2">2 Beds</option>
                                    <option value="3">3 Beds</option>
                                    <option value="4">4 Beds</option>
                                    <option value="5+">5+ Beds</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {(category !== "all" || bedrooms !== "all") && (
                        <div className="mt-6 flex justify-center items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-accent">
                            Showing {filteredDesigns.length} Results
                            <button
                                onClick={() => { setCategory("all"); setBedrooms("all"); router.push("/designs"); }}
                                className="flex items-center gap-1 hover:text-primary transition-colors ml-2"
                            >
                                <X size={12} /> Clear Filters
                            </button>
                        </div>
                    )}
                </div>

                {/* Grid */}
                {paginatedDesigns.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 min-h-[600px] content-start">
                        {paginatedDesigns.map(design => (
                            <DesignCard key={design.slug} design={design} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-32 border border-dashed border-border flex flex-col items-center">
                        <Filter className="text-border mb-4" size={48} />
                        <p className="text-foreground/50 italic font-light">No designs match your specific filters.</p>
                        <button
                            onClick={() => { setCategory("all"); setBedrooms("all"); router.push("/designs"); }}
                            className="mt-6 text-primary hover:text-accent font-bold uppercase text-[10px] tracking-widest"
                        >
                            Reset Workspace
                        </button>
                    </div>
                )}

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className="mt-20 flex justify-center items-center gap-8 border-t border-border pt-12">
                        <button
                            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                            className="flex items-center gap-2 text-[11px] uppercase tracking-widest font-bold disabled:opacity-30 hover:text-primary transition-colors"
                        >
                            <ChevronLeft size={16} /> Prev
                        </button>

                        <div className="flex gap-4">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`w-8 h-8 text-[11px] font-bold transition-all duration-300 ${currentPage === page
                                        ? "bg-primary text-white scale-110"
                                        : "text-foreground/40 hover:text-primary"
                                        }`}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                            className="flex items-center gap-2 text-[11px] uppercase tracking-widest font-bold disabled:opacity-30 hover:text-primary transition-colors"
                        >
                            Next <ChevronRight size={16} />
                        </button>
                    </div>
                )}
            </section>
        </main>
    );
}
