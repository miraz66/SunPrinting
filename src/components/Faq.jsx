import React from "react";
import DetailsAccordions from "./DetailsAccordions";
import faqImg from "../assets/faq-img.png";

export default function Faq() {
  return (
    <div className="h-[70rem] lg:h-[75rem] bg-gray-50/60 pt-20 md:pt-32 lg:pt-40">
      <div className="max-w-7xl mx-5 md:mx-10 xl:mx-auto lg:grid gap-10 grid-cols-2">
        <div>
          <h6 className="text-2xl text-current_color font-handle">Faq</h6>
          <h1 className="text-4xl md:text-6xl pb-28 pt-3 text-gray-700 font-playfair font-bold">
            Our Experience Spans Every Industry
          </h1>
          <DetailsAccordions />
        </div>
        <img className="pt-20 max-lg:hidden" src={faqImg} alt="Faq image png" />
      </div>
    </div>
  );
}
