import React from "react";

export default function SportingBlog({
  title,
  description,
  paragraphs,
  location,
  images,
}) {
  return (
    <div className="max-md:mt-20 max-w-4xl mx-5 xl:mx-auto space-y-10 md:space-y-12">
      <div>
        <h1 className="pb-3 text-4xl font-bold text-neutral-700">{title}</h1>
        <p>{location}</p>
      </div>
      <p>{description}</p>
      <img className="mx-auto w-full rounded-md" src={images} alt="" />
      <p>{paragraphs}</p>
    </div>
  );
}
