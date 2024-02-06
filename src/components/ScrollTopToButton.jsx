import { ChevronUpIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useState, useEffect } from "react";

function ScrollTopToButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show or hide the button based on the scroll position
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Scroll animation to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={clsx(
        "fixed bottom-5 right-5 md:bottom-10 md:right-10 z-50 p-4 rounded-full bg-secondary text-white",
        isVisible ? "block" : "hidden"
      )}
      onClick={scrollToTop}
    >
      <ChevronUpIcon className="h-6 w-6" />
    </button>
  );
}

export default ScrollTopToButton;
