import Blog from "../components/Blog";
import HeroAbout from "../components/HeroAbout";
import HeroSection from "../components/HeroSection";
import HeroServices from "../components/HeroServices";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="fixed w-full z-50">
        <Navbar />
      </div>

      <div className="bg-neutral-50 pt-32">
        <HeroSection />
      </div>

      <HeroAbout />

      <Blog />

      {/* <HeroServices /> */}
    </div>
  );
}
