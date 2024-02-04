// Brand Logo
import BrandLogo_1 from "../assets/BrandLogo/brand-black-1.png";
import BrandLogo_2 from "../assets/BrandLogo/brand-black-2.png";
import BrandLogo_3 from "../assets/BrandLogo/brand-black-3.png";
import BrandLogo_4 from "../assets/BrandLogo/brand-black-4.png";
import BrandLogo_5 from "../assets/BrandLogo/brand-black-5.png";

const BrandLogoData = [
  { logo: BrandLogo_1, alt: "Company Branding Logo" },
  { logo: BrandLogo_2, alt: "Company Branding Logo" },
  { logo: BrandLogo_3, alt: "Company Branding Logo" },
  { logo: BrandLogo_4, alt: "Company Branding Logo" },
  { logo: BrandLogo_5, alt: "Company Branding Logo" },
];
export default function Sponsors() {
  return (
    <div>
      {" "}
      <div className="max-w-7xl mx-10 xl:mx-auto text-secondary_color">
        <p className="text-center text-2xl font-handle">
          <span className="text-current_color">100+</span> Happy Sponsors
        </p>
        <div className="grid mt-20 grid-cols-3 md:grid-cols-5 auto-rows-auto gap-10 justify-between">
          {BrandLogoData.map(({ alt, logo }, index) => (
            <img
              key={index}
              className="opacity-60 hover:opacity-100 ease-in-out duration-300"
              src={logo}
              alt={alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
