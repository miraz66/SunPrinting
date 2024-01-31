import { BiSolidPrinter } from "react-icons/bi";
import Card from "../utils/Card";

const CardData = [
  {
    title: "Printing Service",
    icon: <BiSolidPrinter className="text-current_color h-20 w-20" />,
  },
  {
    title: "Printing Service",
    icon: <BiSolidPrinter className="text-secondary_color" />,
  },
  {
    title: "Printing Service",
    icon: <BiSolidPrinter className="text-secondary_color" />,
  },
];

export default function HeroServices() {
  return (
    <div className="bg-gray-50/70">
      <div className="max-w-7xl mx-auto py-20 ">
        <div className="text-center">
          <p className="pb-1 text-xl text-current_color">Services</p>
          <h2 className="text-6xl font-playfair font-semibold">
            Our Best Services
          </h2>
        </div>
        <div className="grid grid-cols-4 grid-rows-2 gap-10">
          {CardData.map((data, index) => (
            <Card key={index} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
}
