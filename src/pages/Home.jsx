import Award from "../components/Award";
import Blog from "../components/Blog";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import HeroAbout from "../components/HeroAbout";
import HeroSection from "../components/HeroSection";
import HeroServices from "../components/HeroServices";
import Navbar from "../components/Navbar";
import TailUsProject from "../components/TailUsProject";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <HeroSection />
      <HeroAbout />
      <Blog />
      <HeroServices />
      <Award />
      <Faq />
      <TailUsProject />
      <Footer />
    </div>
  );
}
