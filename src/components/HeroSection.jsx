import { PlayIcon } from "@heroicons/react/24/solid";
export default function HeroSection() {
  return (
    <div className="bg-black bg-right bg-no-repeat bg-[url('./assets/banner-1.png')]">
      <div className="max-w-7xl mx-auto">
        <div className="py-44">
          <h5 className="text-xl text-yellow-400 font-handle">
            Welcome To Our Company
          </h5>
          <h1 className="text-8xl font-semibold pt- pb-10 text-muted_color tracking-tight leading- font-playfair">
            First & Quality <br /> Printing Press
          </h1>
          <p className="text-neutral-100 pl-4 text-lg relative after:absolute after:left-0 after:top-0 after:h-full after:w-0.5 after:bg-secondary">
            When we say we’re not happy until you’re happy, we really do mean
            it. You <br /> will be happy with service.
          </p>
          <div className="">
            <button className="text-lg mt-24 flex gap-2 items-center font-medium rounded-lg bg-primary text-secondary_color px-6 py-3">
              <PlayIcon className="h-6 w-6 text-current_color" />
              Watch Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
