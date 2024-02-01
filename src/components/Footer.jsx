import SunLogo from "../../public/SunPrintingLogo.png";

export default function Footer() {
  return (
    <>
      <div className="bg-white pt-28 font-playfair">
        <div className="max-w-7xl mx-auto px-5 xl:px-10 pt-10">
          <div className="grid lg:grid-cols-3 max-lg:gap-10">
            <div className="md:col-span-2 grid max-md:grid-rows-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <ul className="flex flex-col gap-3">
                <li className="text-xl font-semibold">Owner</li>
                <li className="text-neutral-600 text-lg font-medium hover:text-neutral-800 cursor-pointer ease-in-out duration-200">
                  FamilyFund
                </li>
                <li className="text-neutral-600 text-lg font-medium hover:text-neutral-800 cursor-pointer ease-in-out duration-200">
                  Unseal
                </li>
                <li className="text-neutral-600 text-lg font-medium hover:text-neutral-800 cursor-pointer ease-in-out duration-200">
                  Phobia
                </li>
                <li className="text-neutral-600 text-lg font-medium hover:text-neutral-800 cursor-pointer ease-in-out duration-200">
                  See all →
                </li>
              </ul>

              <ul className="flex flex-col gap-3">
                <li className="text-xl font-semibold">Company</li>
                <li className="text-neutral-600 text-lg font-medium hover:text-neutral-800 cursor-pointer ease-in-out duration-200">
                  About
                </li>
                <li className="text-neutral-600 text-lg font-medium hover:text-neutral-800 cursor-pointer ease-in-out duration-200">
                  Process
                </li>
                <li className="text-neutral-600 text-lg font-medium hover:text-neutral-800 cursor-pointer ease-in-out duration-200">
                  Blog
                </li>
                <li className="text-neutral-600 text-lg font-medium hover:text-neutral-800 cursor-pointer ease-in-out duration-200">
                  Contact us
                </li>
              </ul>

              <ul className="flex flex-col gap-3">
                <li className="text-xl font-semibold">Connect</li>
                <li className="text-neutral-600 text-lg font-medium hover:text-neutral-800 cursor-pointer ease-in-out duration-200">
                  Facebook
                </li>
                <li className="text-neutral-600 text-lg font-medium hover:text-neutral-800 cursor-pointer ease-in-out duration-200">
                  Instagram
                </li>
                <li className="text-neutral-600 text-lg font-medium hover:text-neutral-800 cursor-pointer ease-in-out duration-200">
                  Twitter
                </li>
                <li className="text-neutral-600 text-lg font-medium hover:text-neutral-800 cursor-pointer ease-in-out duration-200">
                  GitHub
                </li>
                <li className="text-neutral-600 text-lg font-medium hover:text-neutral-800 cursor-pointer ease-in-out duration-200">
                  Dribbble
                </li>
              </ul>
              <div></div>
            </div>

            <div>
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
              <img className="h-20" src={SunLogo} alt="" />
              <p className="text-3xl">Sun Printing Press</p>
            </a>
            <p className="text-sm text-neutral-700">
              ©Copyright 2024 - Sun Printing Press. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
