import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

// all pages
import SunSportingClub from "../components/SunSpotingClub";
import YoungSunSportingClub from "../components/YoungSunSportingClub";
import SunFootballAcademy from "../components/SunFootballAcademy";
import MozzamelHuqueSritisoggo from "../components/MozzamelHuqueSritisoggo";
import ScrollTopToButton from "../components/ScrollTopToButton";

const Data = [
  {
    url: "Sun sporting club",
    page: <SunSportingClub />,
  },
  {
    url: "Young sun sporting club",
    page: <YoungSunSportingClub />,
  },
  {
    url: "Sun Football Academy",
    page: <SunFootballAcademy />,
  },
  { url: "Md.Mozzamel huque sritisoggo", page: <MozzamelHuqueSritisoggo /> },
];

export default function Owner({ scrollToTop }) {
  const { name } = useParams();

  return (
    <div>
      <Navbar scrollToTop={scrollToTop} />
      {Data.map(
        ({ url, page }, index) =>
          name === url && <div key={index}>{[page]}</div>
      )}
      <ScrollTopToButton />
    </div>
  );
}
