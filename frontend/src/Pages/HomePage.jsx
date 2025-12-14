import Hero from "../Components/Hero";
import TrendingSection from "../Components/TrendingSection";
import Footer from "../Components/Footer";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      <Hero />
      <TrendingSection />
      <Footer />
    </div>
  );
}