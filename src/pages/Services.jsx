import HeroServices from "../components/HeroServices";
import Navbar from "../components/Navbar";
import TopServices from "../components/TopServices";
import RecentProject from "../components/RecentProject";
import TailUsProject from "../components/TailUsProject";

export default function Services() {
  return (
    <div>
      <Navbar />
      <HeroServices />
      <TopServices />
      <RecentProject />
      <TailUsProject />
    </div>
  );
}
