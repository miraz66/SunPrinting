import Employee from "../components/Employee";
import Footer from "../components/Footer";
import HeroAbout from "../components/HeroAbout";
import Navbar from "../components/Navbar";
import WhatsAppWidget from "../components/WhatsAppWidget";

export default function About() {
  return (
    <div>
      <Navbar />
      <HeroAbout />
      <Employee />
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
