import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/Sections/Footer";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <div className="flex-grow">
                {children}
            </div>
            <Footer />
        </>
    );
}
