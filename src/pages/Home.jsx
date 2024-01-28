import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="h-screen bg-white">
      <Navbar />
      <div className="bg-neutral-50">
        <HeroSection />
      </div>
    </div>
  );
}
