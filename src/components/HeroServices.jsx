import clsx from "clsx";
import React, { useState } from "react";

export default function HeroServices() {
  const [readMore, setReadMore] = useState(true);

  return (
    <div className="bg-no-repeat bg-cover bg-center bg-[url('./assets/servicesBackground.jpg')]">
      <div className="bg-gray-900 pt-48 lg:60 xl:pt-72 pb-24 md:pb-40 bg-opacity-65">
        <div className="max-w-7xl mx-auto px-5">
          <div>
            <h1>
              <span className="block font-handle text-xl font-semibold text-yellow-500">
                Services
              </span>
              <span className="sr-only"> - </span>
              <span className="mt-4 block max-w-7xl text-4xl sm:text-7xl font-playfair font-semibold tracking-wide text-white [text-wrap:balance]">
                Our best services here
              </span>
            </h1>
            <div
              className={clsx(
                "pt-20 max-w-5xl text text-xl space-y-8 tracking-wide text-gray-50 leading-8",
                readMore ? "line-clamp-6" : "line-clamp-none"
              )}
            >
              <p>
                At Sun Printing Press, we offer a comprehensive range of
                printing and design services tailored to meet the diverse needs
                of our clients. Our commitment to excellence and attention to
                detail ensure that each project is completed with precision and
                quality. Explore our wide array of services below:
              </p>
              <p>
                At Sun Printing Press, we prioritize teamwork and camaraderie.
                We view our team members not just as colleagues, but as integral
                members of our family. This means we foster an environment of
                mutual respect and support. While we value hard work and
                dedication, we also believe in maintaining a healthy work-life
                balance. We understand the importance of personal time and
                strive to ensure our employees have the flexibility they need to
                thrive both professionally and personally.
              </p>
              <ul className="pl-6 space-y-5 text-lg">
                <li>
                  <strong>1. Business Stationery Printing:</strong> From
                  business cards to letterheads, we provide high-quality
                  printing for all your stationery needs, helping you make a
                  lasting impression on your clients and partners.
                </li>
                <li>
                  <strong>2. Marketing Materials Printing: </strong>
                  Elevate your marketing efforts with our professionally printed
                  materials, including flyers, brochures, posters, and banners,
                  designed to attract attention and promote your brand
                  effectively.
                </li>
                <li>
                  <strong>3. Packaging Printing: </strong>
                  Ensure your products stand out on the shelves with our custom
                  packaging solutions. We offer packaging printing services for
                  various industries, helping you create eye-catching designs
                  that enhance your brand image.
                </li>
                <li>
                  <strong>4. Publishing Services: </strong>
                  Whether you're publishing a book, magazine, or catalog, we
                  provide comprehensive publishing services, including printing,
                  binding, and finishing, to bring your publication to life with
                  professional quality.
                </li>
                <li>
                  <strong>5. Gift Items Printing: </strong>
                  Personalize your gifts and giveaways with our custom printing
                  services. From mugs to t-shirts, we offer printing on a wide
                  range of gift items, allowing you to create memorable
                  keepsakes for your clients and employees.
                </li>
                <li>
                  <strong>6. Garments Accessories Printing: </strong>
                  Add a personal touch to your garments and accessories with our
                  custom printing solutions. Whether you need logo embroidery or
                  custom tags, we have the expertise to meet your requirements
                  with precision and style.
                </li>
              </ul>

              <p>
                <strong>Finishing and Binding Options: </strong> Our wide range
                of finishing and binding options, including Glossy Lamination,
                Mat Lamination, Foil Lamination, wire o binding, Spiral Binding,
                Staple Binding, Perfect binding, Folding, Numbering, Die
                cutting, Cheque Parpeting, Foil stamp, Embossing, Punching
                Pasting, Book binding, and Half Die Cutting, ensure that your
                printed materials are finished to perfection, making them stand
                out from the crowd.
              </p>
              <p>
                Trust Sun Printing Press for all your printing and design needs.
                Contact us today to discuss your project requirements and
                experience the difference of working with a trusted partner
                committed to excellence.
              </p>
            </div>
            {readMore ? (
              <button
                className="bg-primary hover:bg-muted px-8 py-3 rounded-md ease-in-out duration-300 mt-20"
                onClick={() => setReadMore(!readMore)}
              >
                Read more...
              </button>
            ) : (
              <button
                className="bg-primary hover:bg-muted px-8 py-3 rounded-md ease-in-out duration-300 mt-20"
                onClick={() => setReadMore(!readMore)}
              >
                Read less
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
