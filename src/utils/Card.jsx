import React from "react";

export default function Card({ title, icon }) {
  return (
    <div className="py-20 ease-in-out duration-300 hover:shadow-red-200 shadow-md rounded-lg bg-white flex flex-col justify-center items-center">
      <div className="pb-5">{icon}</div>
      <p className="text-2xl font-playfair font-semibold text-neutral-600 tracking-wide">
        {title}
      </p>
    </div>
  );
}
