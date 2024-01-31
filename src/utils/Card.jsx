import React from "react";

export default function Card({ index, title, ico }) {
  return (
    <div
      key={index}
      className="py-[70px] group ease-in-out duration-300 hover:shadow-red-400 shadow-md rounded-lg bg-white flex flex-col justify-center items-center"
    >
      <div className="pb-5 group-hover:-translate-y-2 group-hover:ease-in-out group-hover:duration-300">
        {icon}
      </div>
      <p className="text-2xl font-playfair font-semibold text-neutral-600 tracking-wide">
        {title}
      </p>
    </div>
  );
}
