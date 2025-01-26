import SunLogo from "../assets/SunPrintingLogo.png";
import { NavLink } from "react-router-dom";

const Data = {
  owner: [
    "Sun sporting club",
    "Young sun sporting club",
    "Sun Football Academy",
    "Md.Mozzamel huque sritisoggo",
  ],
  company: [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Owner", link: "/owner/Sun sporting club" },
    { name: "Contact us", link: "/contact" },
  ],
  Connect: [
    { name: "Facebook", link: "#" },
    { name: "Twitter", link: "#" },
    { name: "Instagram", link: "#" },
    { name: "YouTube", link: "#" },
  ],
};

export default function Footer() {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page
  };

  return (
      <>
        <div className="bg-white font-playfair">
          <div className="max-w-7xl px-5 md:mx-auto pt-20 md:pt-40">
            <div className="grid lg:grid-cols-8 max-lg:gap-10">
              <div className="md:col-span-6 grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-3">
                <ul className="flex flex-col gap-3">
                  <li className="text-xl font-semibold">Owner</li>
                  {Data.owner.map((data, i) => (
                      <NavLink
                          to={`/owner/${data}`}
                          key={i}
                          onClick={handleLinkClick} // Ensure scrolling to top
                          className="text-neutral-600 text-lg hover:text-red-500 cursor-pointer ease-in-out duration-200"
                      >
                        {data}
                      </NavLink>
                  ))}
                </ul>

                <ul className="flex flex-col gap-3">
                  <li className="text-xl font-semibold">Company</li>
                  {Data.company.map((data, i) => (
                      <NavLink
                          to={data.link}
                          key={i}
                          onClick={handleLinkClick} // Ensure scrolling to top
                          className="text-neutral-600 text-lg hover:text-red-500 cursor-pointer ease-in-out duration-200"
                      >
                        {data.name}
                      </NavLink>
                  ))}
                </ul>

                <ul className="flex flex-col gap-3">
                  <li className="text-xl font-semibold">Connect</li>
                  {Data.Connect.map((data, i) => (
                      <NavLink
                          to={data.link}
                          key={i}
                          onClick={handleLinkClick} // Ensure scrolling to top
                          className="text-neutral-600 text-lg hover:text-red-500 cursor-pointer ease-in-out duration-200"
                      >
                        {data.name}
                      </NavLink>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-2 max-md:hidden">
                <form className="max-w-sm">
                  <h2 className="font-display text-2xl lg:text-xl font-semibold tracking-wider text-neutral-950">
                    Sign up for our newsletter
                  </h2>
                  <p className="mt-4 lg:text-lg text-neutral-700">
                    Subscribe to get the latest design news, articles, resources
                    and inspiration.
                  </p>
                  <div className="relative mt-6">
                    <div className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5">
                      Contacts
                    </div>
                    <div className="absolute inset-y-1 right-1 flex justify-end">
                      <button
                          type="submit"
                          aria-label="Submit"
                          className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
                      >
                        <svg
                            viewBox="0 0 16 6"
                            aria-hidden="true"
                            className="w-4"
                        >
                          <path
                              fill="currentColor"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M16 3 10 .5v2H0v1h10v2L16 3Z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="pb-10 mt-16 md:mt-24 flex flex-wrap items-center justify-center lg:justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
              <a className="flex items-center gap-4" aria-label="Home" href="/">
                <img className="h-16 sm:h-20" src={SunLogo} alt="" />
                <p className="text-xl sm:text-3xl">Sun Printing Press</p>
              </a>
              <p className="text-xs md:text-sm font-playfair text-neutral-700">
                © Copyright 2024 - Sun Printing Press. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </>
  );
}
