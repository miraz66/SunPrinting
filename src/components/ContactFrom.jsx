import {
  FaLinkedin,
  FaInstagramSquare,
  FaFacebookSquare,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function ContactInformation() {
  return (
    <>
      <div className="max-w-7xl pt-48 lg:pt-52 xl:pt-60 mx-5 2xl:mx-auto pb-10 2xl:h-screen">
        <div>
          <h2 className="text-xl font-semibold font-handle text-secondary_color">
            Contact us
          </h2>
          <p className="mt-2 pb-20 text-4xl tracking-tight font-playfair text-neutral-900">
            If you like me, please contact me.
          </p>
          <ul
            role="list"
            className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2"
          >
            <li>
              <address className="text-base not-italic text-neutral-800">
                <strong className="text-neutral-950">Address</strong>
                <p>
                  <br />
                  Machuadange,Tiok-9241
                  <br />
                  Rupsha,Khulna,Bangladesh
                </p>
              </address>
            </li>
            <li>
              <address className="text-base not-italic text-neutral-800">
                <strong className="text-neutral-950">Office</strong>
                <p>
                  <br />
                  In my Home.
                </p>
              </address>
            </li>
          </ul>

          <div className="mt-10 pt-10 grid md:grid-cols-2 max-md:gap-5 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
            <div>
              <h2 className="font-display text-base font-semibold text-neutral-950">
                Email us
              </h2>
              <a
                className="text-neutral-800 hover:text-neutral-950"
                href="mailto:mirajulislam0509@gmail.com"
              >
                mirajulislam0509@gmail.com
              </a>
            </div>

            <div>
              <h2 className="font-semibold text-neutral-950">Phone</h2>
              <dd>
                <a
                  className="text-neutral-800 hover:text-neutral-950"
                  href="tel:01917-666676"
                >
                  +88 01917-666676
                </a>
              </dd>
            </div>
          </div>

          <div className="mt-20 pt-10 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
            <h2 className="font-display text-base font-semibold text-neutral-950">
              Follow us
            </h2>
            <ul role="list" className="flex gap-x-10 text-neutral-950 mt-6">
              <li>
                <a
                  aria-label="LinkedIn"
                  className="transition hover:text-neutral-700"
                  href=""
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  aria-label="Instagram"
                  className="transition hover:text-neutral-700"
                  href=""
                >
                  <FaInstagramSquare className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  aria-label="Twitter"
                  className="transition hover:text-neutral-700"
                  href=""
                >
                  <FaXTwitter className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  aria-label="GitHub"
                  className="transition hover:text-neutral-700"
                  href=""
                >
                  <FaFacebookSquare className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  aria-label="GitHub"
                  className="transition hover:text-neutral-700"
                  href=""
                >
                  <FaYoutube className="w-8 h-8" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
