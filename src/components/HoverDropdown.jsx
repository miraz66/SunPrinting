import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";

const DropDownValue = [
  "Sun sporting club",
  "Young sun sporting club",
  "Sun Football Academy",
  "Md.Mozzamel huque sritisoggo",
];

export default function HoverDropdown({ item, dropdownOpen, setBlogLink }) {
  const location = useLocation(); // Get the current path

  const handleClick = (dropdownItem) => {
    setBlogLink(dropdownItem); // Update blog link state
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page
  };

  return (
      <div className="relative">
        {item.name === "Owner" && (
            <div
                className={clsx(
                    "absolute -left-10 overflow-hidden bg-white bg-opacity-90 transition-all duration-700 ease-in-out",
                    dropdownOpen === item.name ? "max-h-96" : "max-h-0"
                )}
            >
              <div className="p-8 flex flex-col gap-3 w-60">
                {DropDownValue.map((dropdownItem, index) => {
                  const toPath = `/owner/${dropdownItem}`; // Construct the path dynamically

                  return (
                      <NavLink
                          key={index}
                          to={toPath}
                          onClick={() => handleClick(dropdownItem)} // Ensure scrolling to top
                          className={({ isActive }) =>
                              clsx(
                                  "text-sm hover:pl-1 duration-200 ease-in-out",
                                  isActive || location.pathname === toPath
                                      ? "text-red-600"
                                      : "text-gray-800 hover:text-red-600"
                              )
                          }
                      >
                        {dropdownItem}
                      </NavLink>
                  );
                })}
              </div>
            </div>
        )}
      </div>
  );
}
