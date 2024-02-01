//Award Icon
import { FaTrophy } from "react-icons/fa6";

//Award Image
import award_1 from "../assets/award-1.jpg";
import award_2 from "../assets/award-2.jpg";
import award_3 from "../assets/award-3.jpg";

// Brand Logo
import BrandLogo_1 from "../assets/BrandLogo/brand-black-1.png";
import BrandLogo_2 from "../assets/BrandLogo/brand-black-2.png";
import BrandLogo_3 from "../assets/BrandLogo/brand-black-3.png";
import BrandLogo_4 from "../assets/BrandLogo/brand-black-4.png";
import BrandLogo_5 from "../assets/BrandLogo/brand-black-5.png";

const AwardData = [
  {
    date: 2020,
    icon: (
      <FaTrophy className="absolute left-1/2 border-b-4 border-red-600 transform -translate-x-1/2 -top-16 p-4 h-24 w-24 bg-black text-white" />
    ),
    img: award_1,
    description: "Consumers Choice for Best Service",
  },
  {
    date: 2022,
    icon: (
      <FaTrophy className="absolute left-1/2 border-b-4 border-red-600 transform -translate-x-1/2 -top-16 p-4 h-24 w-24 bg-black text-white" />
    ),
    img: award_2,
    description: "National Award Winner of The Year",
  },
  {
    date: 2023,
    icon: (
      <FaTrophy className="absolute left-1/2 border-b-4 border-red-600 transform -translate-x-1/2 -top-16 p-4 h-24 w-24 bg-black text-white" />
    ),
    img: award_3,
    description: "Best Printing Agency In NYC",
  },
];

const BrandLogoData = [
  { logo: BrandLogo_1, alt: "Company Branding Logo" },
  { logo: BrandLogo_2, alt: "Company Branding Logo" },
  { logo: BrandLogo_3, alt: "Company Branding Logo" },
  { logo: BrandLogo_4, alt: "Company Branding Logo" },
  { logo: BrandLogo_5, alt: "Company Branding Logo" },
];

export default function Award() {
  return (
    <>
      <div className="md:h-[38.6rem] bg-red-600">
        <div className="max-w-7xl mx-5 md:mx-10 xl:mx-auto pt-32 text-center">
          <h6 className="text-2xl font-handle font-medium pb-2 text-white">
            Winning Rewards
          </h6>
          <h2 className="text-5xl md:text-7xl font-playfair font-bold text-white">
            Award Winning
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8">
            {AwardData.map(({ date, icon, img, description }) => (
              <div
                key={date}
                className="relative rounded-t-xl mt-32 md:mt-40 shadow-lg"
              >
                <div className="px-6 rounded-t-md rounded-r-md py-1 text-secondary_color text-xl text-right absolute font-rubik font-bold -top-16 left-1/2 transform -translate-x-1/2 bg-white">
                  <p>{date}</p>
                  <div
                    style={{
                      clipPath: "polygon(0 0, 0% 100%, 100% 0)",
                    }}
                    className="absolute left-0 h-4 w-4 bg-white"
                  ></div>
                </div>
                <img
                  className="rounded-t-xl w-full"
                  src={img}
                  alt="Award image"
                />
                <div className="relative bg-white">
                  {icon}
                  <p className="text-2xl pt-20 py-16 px-6 lg:px-16 tracking-wide font-playfair font-bold">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-[16rem] lg:h-[20rem] bg-red-white">
        <div className=" mt-20 md:mt-64 lg:mt-96 max-w-7xl mx-10 xl:mx-auto text-secondary_color">
          <p className="text-center text-2xl font-handle">
            <span className="text-current_color">100+</span> Happy Sponsors
          </p>
          <div className="grid mt-20 grid-cols-3 md:grid-cols-5 auto-rows-auto gap-10 justify-between">
            {BrandLogoData.map(({ alt, logo }) => (
              <img
                className="opacity-60 hover:opacity-100 ease-in-out duration-300"
                src={logo}
                alt={alt}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
