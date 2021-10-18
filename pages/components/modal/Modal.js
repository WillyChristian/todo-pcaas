import React from "react";
import Carousel from "./carousel/Carousel";

export default function Modal({ display, openModal }) {
  return (
    <section
      className={`${display} absolute justify-center items-center inset-0 bg-black bg-opacity-40`}
    >
      <div className="container overflow-scroll overscroll-contain bg-white w-2/3 h-5/6 p-3 rounded-md">
        <div className="flex justify-between items-cener">
          <p className="uppercase">titulo</p>
          <spam className="cursor-pointer" onClick={openModal}>
            X
          </spam>
        </div>
        <div className="text-center text-sm">
          <Carousel />
        </div>
        <div className="flex justify-end p-2">
          <button onClick={openModal} className="p-2 rounded uppercase text-md">
            Voltar
          </button>
        </div>
      </div>
    </section>
  );
}
