import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/SunPrintingLogo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import clsx from "clsx";
import HoverDropdown from "../components/HoverDropdown";

export default function Navbar() {
  const navigate = useNavigate();
  const [blogLink, setBlogLink] = useState("Sun sporting club");

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    {
      name: <HoverDropdown setBlogLink={setBlogLink} />,
      href: "/owner/" + blogLink,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div id="nav" className="fixed w-full z-50">
      <Disclosure as="nav" className="bg-white bg-opacity-90">
        {({ open }) => (
          <>
            <div className="lg:mx-5 xl:mx-auto max-w-7xl px-2 sm:px-6 lg:px-0 py-1">
              <div className="relative flex h-16 sm:h-24 items-center justify-between">
                <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
                  <button
                    onClick={() => navigate("/")}
                    className="flex flex-shrink-0 items-center"
                  >
                    <img
                      className="h-14 sm:h-16 pr-2 md:pr-2 md:h-20 w-auto"
                      src={logo}
                      alt="Your Company"
                    />

                    <div className="text-xl sm:text-3xl text-neutral-600 md:text-4xl font-serif tracking-wide font-semibold">
                      Sun Printing press
                    </div>
                  </button>
                </div>
                <div className="hidden sm:ml-6 lg:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        as="NavLink"
                        onClick={scrollToTop}
                        className={({ isActive }) => {
                          return clsx(
                            "rounded-md px-5 py-2 text-base font-medium",
                            isActive
                              ? "bg-primary text-gray-700"
                              : "text-gray-600 hover:bg-muted hover:text-black"
                          );
                        }}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>

                <Link
                  to={"/contact"}
                  className="ml-5 relative hidden md:block tracking-wide rounded-full text-white px-6 py-2 bg-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  Contact
                </Link>
              </div>
            </div>

            <Disclosure.Panel className="lg:hidden">
              <div className="space-y-1 px-2 flex flex-col pb-3 pt-2">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    as="NavLink"
                    to={item.href}
                    className={({ isActive }) => {
                      return clsx(
                        "rounded-md px-5 py-2 text-base font-medium",
                        isActive
                          ? "bg-primary text-gray-700"
                          : "text-gray-600 hover:bg-muted hover:text-black"
                      );
                    }}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </NavLink>
                ))}

                <div className="pt-5">
                  <Link
                    to="/contact"
                    className="bg-secondary text-white rounded-md px-4 py-2 text-base font-medium"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
