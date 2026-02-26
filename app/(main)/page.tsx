
import FeaturedDesigns from "@/components/Sections/FeaturedDesigns";
import HeroSection from "@/components/Sections/Hero";
import CTA from "@/components/ui/CTA";
import Testimonials from "@/components/Sections/Testimonials";
import Trust from "@/components/Sections/Trust";
import Intro from "@/components/Sections/Intro";
import HouseStory from "@/components/Sections/HouseStory";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background selection:bg-primary/20">
      <HeroSection />
      <Intro />
      <Trust />
      <HouseStory />
      <FeaturedDesigns />
      <Testimonials />
      <CTA />
    </main>
  );
}

