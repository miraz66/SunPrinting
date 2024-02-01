import { BiSolidPrinter, BiSolidTShirt } from "react-icons/bi";
import { FaClipboardList } from "react-icons/fa6";
import { MdBrandingWatermark } from "react-icons/md";
import { FaCopyright } from "react-icons/fa";
import { TiBusinessCard } from "react-icons/ti";
import { IoLogoDesignernews } from "react-icons/io";
import { TbSettingsStar } from "react-icons/tb";

const CardData = [
  {
    title: "Printing Service",
    icon: <BiSolidPrinter className="text-current_color h-16 w-16" />,
  },
  {
    title: "T-Shirt Design",
    icon: <BiSolidTShirt className="text-current_color h-16 w-16" />,
  },
  {
    title: "Bill-Board Design",
    icon: <FaClipboardList className="text-current_color h-16 w-16" />,
  },
  {
    title: "Branding Design",
    icon: <MdBrandingWatermark className="text-current_color h-16 w-16" />,
  },
  {
    title: "Copyright Design",
    icon: <FaCopyright className="text-current_color h-16 w-16" />,
  },
  {
    title: "Business Card",
    icon: <TiBusinessCard className="text-current_color h-16 w-16" />,
  },
  {
    title: "Graphic Design",
    icon: <IoLogoDesignernews className="text-current_color h-16 w-16" />,
  },
  {
    title: "Custom Design",
    icon: <TbSettingsStar className="text-current_color h-16 w-16" />,
  },
];

export default function HeroServices() {
  return (
    <div className="bg-gray-50/70 md:py-16">
      <div className="max-w-7xl mx-5 md:mx-10 xl:mx-auto py-20 ">
        <div className="text-center">
          <p className="pb-1 text-xl text-current_color">Services</p>
          <h2 className="text-4xl md:text-6xl font-playfair font-semibold">
            Our Best Services
          </h2>
        </div>
        <div className="pt-28 space-y-10 md:grid grid-cols-3 xl:grid-cols-4 auto-rows-auto gap-14">
          {CardData.map(({ title, icon }, index) => (
            <div
              key={index}
              className="py-[70px] group ease-in-out duration-300 hover:shadow-red-400 shadow-md rounded-lg bg-white flex flex-col justify-center items-center"
            >
              <div className="pb-5 group-hover:-translate-y-2 group-hover:ease-in-out group-hover:duration-300">
                {icon}
              </div>
              <p className="text-xl lg:text-2xl font-playfair font-semibold text-neutral-600 tracking-wide">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
