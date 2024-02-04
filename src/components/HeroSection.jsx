import { PlayIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Modal from "../utils/Modal";
import VideoPlayer from "../utils/VideoPlayer";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-neutral-950 bg-[url('./assets/brick-wall.svg')] lg:pt-[103px]">
        <div className="lg:h-[55rem] bg-cover md:bg-contain bg-right bg-no-repeat bg-[url('./assets/banner-1.png')]">
          <div className="max-w-7xl mx-5 md:mx-10 xl:mx-auto opacity-100">
            <div className="pb-20 pt-40 lg:py-44">
              <h5 className="sm:text-xl lg:text-2xl pb-2 font-medium text-yellow-500 font-handle ">
                Welcome To Our Company
              </h5>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-semibold pb-16 text-muted_color tracking-tight leading- font-playfair">
                First & Quality <br /> Printing Press
              </h1>
              <p className="text-muted_color pl-4 text-lg relative after:absolute after:left-0 after:top-0 after:h-full after:w-0.5 after:bg-secondary">
                When we say we’re not happy until you’re happy, we really do
                mean it. You <br /> will be happy with service.
              </p>
              <div className="group contents">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-lg mt-14 sm:mt-24 flex gap-2 items-center ease-in-out duration-500 font-medium rounded-lg bg-primary group-hover:bg-secondary text-secondary_color px-6 py-3"
                >
                  <PlayIcon className="h-6 w-6 group-hover:text-yellow-500  ease-in-out duration-500 text-current_color" />
                  Watch Video
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(!isModalOpen)}
          className="fixed inset-0 flex justify-center items-center bg-opacity-70 bg-gray-900 z-50"
        >
          <VideoPlayer
            src="kanHxPcIuQo"
            className="w-96 h-60 lg:w-[35rem] lg:h-[22rem] xl:w-[60rem] xl:h-[43rem] rounded-md"
          />
        </Modal>
      )}
    </>
  );
}
