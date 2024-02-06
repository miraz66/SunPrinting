import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Data } from "../assets/RecentProjectData/RecentData";

export default function CarouselImg() {
  return (
    <div>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={3000}
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
            items: 4,
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
        {Data.map(({ name, product, images, logo }) => (
          <div key={name} className="px-4 rounded-lg">
            <img
              className="h-[27rem] w-full rounded-t-lg"
              src={images}
              alt={name}
            />
            <div className="flex gap-5 p-4 bg-secondary">
              <img
                className="w-20 h-20 p-2 rounded-md bg-white"
                src={logo}
                alt={name}
              />
              <div className="text-white tracking-wide">
                <h1>
                  <strong>Company:</strong> {name}
                </h1>
                <p>
                  <strong>Product:</strong> {product}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
