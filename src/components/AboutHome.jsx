import AboutBanner from "../assets/features.jpg";

export default function AboutHome() {
  return (
    <div className="py-24 md:py-52">
      {" "}
      <div className="max-w-7xl mx-5 md:mx-10 lg:mx-auto group/section [counter-increment:section]">
        <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
          <div className="flex justify-center">
            <div
              className="w-[24rem] sm:w-[26rem] md:w-[44rem] flex-none lg:w-[52rem]"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="justify-center lg:justify-end lg:group-even/section:justify-start relative flex aspect-[719/680] w-full">
                <svg viewBox="0 0 655 680" fill="none" className="h-full">
                  <g clipPath="url(#:S1:-clip)" className="group">
                    <g className="origin-center scale-100 transition duration-500 motion-safe:group-hover:scale-105">
                      <foreignObject width="655" height="680">
                        <img
                          alt="painting images"
                          loading="lazy"
                          width="2400"
                          height="1800"
                          decoding="async"
                          data-nimg="1"
                          className="w-full bg-neutral-100 object-cover"
                          style={{
                            color: "transparent",
                            aspectRatio: "655 / 680",
                          }}
                          sizes="(min-width: 1024px) 41rem, 31rem"
                          src={AboutBanner}
                        />
                      </foreignObject>
                    </g>
                    <use
                      href="#:S1:-shape"
                      strokeWidth="2"
                      className="stroke-red-950/10"
                    ></use>
                  </g>
                  <defs>
                    <clipPath id=":S1:-clip">
                      <path
                        id=":S1:-shape"
                        d="M537.827 9.245A11.5 11.5 0 0 1 549.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 586.87 151h-28.275a15.999 15.999 0 0 0-15.689 12.862l-59.4 297c-1.98 9.901 5.592 19.138 15.689 19.138h17.275l.127.001c.85.009 1.701.074 2.549.009 11.329-.874 21.411-7.529 24.88-25.981.002-.012.016-.016.023-.007.008.009.022.005.024-.006l24.754-123.771A11.5 11.5 0 0 1 580.104 321h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 617.87 472H559c-22.866 0-28.984 7.98-31.989 25.931-.004.026-.037.035-.052.014-.015-.02-.048-.013-.053.012l-24.759 123.798A11.5 11.5 0 0 1 490.87 631h-29.132a14.953 14.953 0 0 0-14.664 12.021c-4.3 21.502-23.18 36.979-45.107 36.979H83.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C145.096 91.477 163.975 76 185.902 76h318.465c10.136 0 21.179-5.35 23.167-15.288l10.293-51.467Zm-512 160A11.5 11.5 0 0 1 37.104 160h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 74.87 311H11.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128Z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
            <div style={{ opacity: 1, transform: "none" }}>
              <h2 className="mt-2 text-current_color font-handle text-2xl font-medium tracking-tighter sm:text-4xl">
                About Us
              </h2>

              <div className="mt-6">
                <div className="space-y-6 text-base text-neutral-600">
                  <p>
                    Sun Printing Press is a leading design and printing press
                    service provider agency in Bangladesh, dedicated to
                    delivering top-quality printed products tailored to suit
                    your business needs. Specializing in full-color printing of
                    Business Stationery, Marketing Materials, Packaging,
                    Publishing, Gift Items, and Garments Accessories, we offer a
                    comprehensive range of services to meet all your printing
                    requirements.
                  </p>
                  <p>
                    At Sun Printing Press, we pride ourselves on our attention
                    to detail and commitment to excellence. Our team of
                    professionals is skilled in various finishing and binding
                    techniques, including Glossy Lamination, Mat Lamination, Mat
                    Spot Lamination, Foil Lamination, wire o binding, Spiral
                    Binding, Staple Binding, Perfect binding, Folding,
                    Numbering, Die cutting, Cheque Parpeting, Foil stamp,
                    Embossing, Punching Pasting, Book binding, Half Die Cutting.
                    These services, combined with our dedication to quality,
                    ensure that every project we undertake is completed to the
                    highest standard.
                  </p>
                  <p>
                    Trusted by hundreds of businesses and nonprofit
                    organizations across Bangladesh, Sun Printing Press offers
                    affordable pricing and a 100% customer satisfaction
                    guarantee. We believe in delivering not just printed
                    materials, but also peace of mind, knowing that your
                    printing needs are in capable hands.
                  </p>

                  <p>
                    Experience the difference with Sun Printing Press - where
                    quality, reliability, and customer satisfaction are our top
                    priorities. Let us bring your ideas to life and help your
                    business stand out with our professional printing services.
                  </p>
                </div>
                <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
                  Sun Printing Press - Your partner in printing excellence.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
