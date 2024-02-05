import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
export default function Sponsors({ className }) {
  return (
    <div className={className}>
      {" "}
      <div className="max-w-7xl mx-10 xl:mx-auto text-secondary_color">
        <p className="pb-20 text-center text-2xl font-handle">
          <span className="text-current_color">100+</span> Happy Sponsors
        </p>

        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlay
          autoPlaySpeed={6000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 5,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={2}
          swipeable
        >
          {BrandLogoData.map(({ alt, logo }, index) => (
            <img
              key={index}
              className="opacity-60 hover:opacity-100 ease-in-out duration-300"
              src={logo}
              alt={alt}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
