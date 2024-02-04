import Employee from "../components/Employee";
import Footer from "../components/Footer";
import HeroAbout from "../components/HeroAbout";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div>
      <Navbar />
      <HeroAbout />
      <Employee />
      <Footer />
    </div>
  );
}
