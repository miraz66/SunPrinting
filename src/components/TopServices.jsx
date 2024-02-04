//Service image
import TopImg_1 from "../assets/ServicesImages/TopImages_1.png";
import TopImg_2 from "../assets/ServicesImages/TopImages_2.png";
import TopImg_3 from "../assets/ServicesImages/TopImages_3.png";
import TopImg_4 from "../assets/ServicesImages/TopImages_4.png";

const TopServicesData = [
  {
    title: "Top Services",
    img: TopImg_1,
  },
  {
    title: "Top Services",
    img: TopImg_2,
  },
  {
    title: "Top Services",
    img: TopImg_3,
  },
  {
    title: "Top Services",
    img: TopImg_4,
  },
  {
    title: "Top Services",
    img: TopImg_4,
  },
  {
    title: "Top Services",
    img: TopImg_4,
  },
  {
    title: "Top Services",
    img: TopImg_4,
  },
];

export default function TopServices() {
  return (
    <div className="bg-white">
      <div className="pt-52 pb-32 mx-auto max-w-7xl">
        <h4 className="pb-20 text-current_color font-bold text-center text-5xl font-handle">
          New Year, Top Services
        </h4>
        <div className="grid grid-cols-4 auto-rows-auto gap-14">
          {TopServicesData.map(({ img, title }) => (
            <div
              key={title}
              className="shadow hover:shadow-xl ease-in-out duration-200"
            >
              <img src={img} alt="" />
              <p className="text-xl text-yellow-500 py-4 font-playfair font-semibold text-center">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
