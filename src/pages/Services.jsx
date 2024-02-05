import HeroServices from "../components/HeroServices";
import Navbar from "../components/Navbar";
import TopServices from "../components/TopServices";
import RecentProject from "../components/RecentProject";
import TailUsProject from "../components/TailUsProject";
import Sponsors from "../components/Sponsors";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <div>
      <Navbar />
      <HeroServices />
      <TopServices />
      <RecentProject />
      <Sponsors className="bg-gray-100 py-40" />
      <TailUsProject className="bg-white pt-40" />
      <Footer />
    </div>
  );
}
