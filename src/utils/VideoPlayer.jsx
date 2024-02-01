import clsx from "clsx";
import React from "react";

export default function VideoPlayer({ src, classNames }) {
  return (
    <div className="relative">
      <iframe
        className={clsx(
          "w-72 md:w-96 h-60 lg:w-[35rem] lg:h-[22rem] xl:w-[60rem] xl:h-[43rem] rounded-md",
          classNames
        )}
        src={`https://www.youtube.com/embed/${src}`}
        title="YouTube Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        autoPlay="ture"
      />
    </div>
  );
}
