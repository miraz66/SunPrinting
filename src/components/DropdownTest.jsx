import { ChevronDownIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = [
  "Sun sporting club",
  "Young sun sporting club",
  "Sun Football Academy",
  "Md.Mozzamel huque sritisoggo",
];

export default function HoverDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center">
      <div onMouseLeave={() => setOpen(false)} className="relative">
        <button
          onMouseOver={() => setOpen(true)}
          className="flex items-center rounded-md"
        >
          <span className="mr-2">Owner</span>
          <ChevronDownIcon className="w-4 h-4" />
        </button>
        <ul
          className={clsx(
            "absolute -right-5 w-52 py-2 bg-white rounded-lg shadow-xl",
            open ? "block" : "hidden"
          )}
        >
          {Menu.map((data, index) => (
            <Link
              key={index}
              to={"/owner/" + data}
              className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100"
            >
              {data}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
