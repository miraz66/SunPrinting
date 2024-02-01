import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

const DetailsData = [
  {
    title: "Appropriate for your specific business",
    description:
      "From finance, retail, and travel, to social media, cybersecurity, ad tech, & more, market leaders are leveraging web data to maintain their advantage. Discover how it can work for you.",
  },
  {
    title: "Design & development troubleshooting",
    description:
      "From finance, retail, and travel, to social media, cybersecurity, ad tech, & more, market leaders are leveraging web data to maintain their advantage. Discover how it can work for you.",
  },
  {
    title: "Online support & action",
    description:
      "From finance, retail, and travel, to social media, cybersecurity, ad tech, & more, market leaders are leveraging web data to maintain their advantage. Discover how it can work for you.",
  },
];

export default function DetailsAccordions() {
  return (
    <div className="w-full">
      <div className="w-full space-y-6">
        {DetailsData.map(({ title, description }, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={clsx(
                    "flex w-full rounded-lg shadow-md justify-between px-8 py-6 text-left text-2xl font-playfair font-bold focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75",
                    !open
                      ? "bg-gray-200/60 text-black ease-in-out duration-300"
                      : "bg-red-600 ease-in-out duration-300 text-white"
                  )}
                >
                  <span>{title}</span>
                  <ChevronRightIcon
                    className={clsx(
                      "h-6 w-6",
                      open
                        ? "rotate-90  transform ease-in-out duration-100"
                        : "text-black"
                    )}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-8 pb-2 pt-4 text-xl text-gray-500">
                  {description}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
