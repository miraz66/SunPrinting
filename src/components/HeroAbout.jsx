import { useState } from "react";
import CultureSection from "./CultureSection";
import clsx from "clsx";

export default function HeroAbout() {
  const [readMore, setReadMore] = useState(true);

  return (
    <div className="bg-no-repeat bg-cover bg-center bg-[url('./assets/aboutBackground.png')]">
      <div className="bg-gray-900 pt-72 bg-opacity-50">
        <div className="max-w-7xl mx-auto px-5">
          <div>
            <h1>
              <span className="block font-handle text-xl font-semibold text-yellow-500">
                About us
              </span>
              <span className="sr-only"> - </span>
              <span className="mt-4 block max-w-7xl text-4xl sm:text-7xl font-playfair font-display font-semibold tracking-wide text-white [text-wrap:balance]">
                Our strength is collaboration
              </span>
            </h1>
            <div
              className={clsx(
                "pt-6 max-w-5xl text text-xl tracking-wide text-gray-50 leading-8",
                readMore ? "line-clamp-6" : "line-clamp-none"
              )}
            >
              <p className="pb-20 text-gray-50 font-handle leading-8">
                We believe that our strength lies in our collaborative approach,
                which puts our clients at the center of everything we do.
              </p>
              <p className="text-xl pb-5 text-gray-50 leading-8">
                Sun Printing Press was founded by three friends who observed
                that traditional printing services were charging clients double
                what an in-house team would cost. Since our inception, we have
                been committed to disrupting this model by offering competitive
                rates and unparalleled service.
              </p>
              <p className="text-xl text-gray-50 leading-8">
                At Sun Printing Press, we prioritize teamwork and camaraderie.
                We view our team members not just as colleagues, but as integral
                members of our family. This means we foster an environment of
                mutual respect and support. While we value hard work and
                dedication, we also believe in maintaining a healthy work-life
                balance. We understand the importance of personal time and
                strive to ensure our employees have the flexibility they need to
                thrive both professionally and personally.
              </p>
            </div>
            {readMore ? (
              <button
                className="hover:text-gray-200 text-white mt-4"
                onClick={() => setReadMore(!readMore)}
              >
                Read more...
              </button>
            ) : null}
          </div>
        </div>
        <CultureSection />
      </div>
    </div>
  );
}
