import Award from "../components/Award";
import Blog from "../components/Blog";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import AboutHome from "../components/AboutHome";
import HeroSection from "../components/HeroSection";
import ServicesHome from "../components/ServicesHome";
import Navbar from "../components/Navbar";
import TailUsProject from "../components/TailUsProject";
import WhatsAppWidget from "../components/WhatsAppWidget";

export default function Home({ scrollToTop }) {
  return (
    <div className="bg-white">
      <Navbar scrollToTop={scrollToTop} />
      <HeroSection />
      <AboutHome />
      <Blog />
      <ServicesHome />
      <Award />
      <Faq />
      <TailUsProject className="mx-5 mt-40 sm:mx-10 xl:mx-0" />
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
