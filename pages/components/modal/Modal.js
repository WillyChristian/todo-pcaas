import React from "react";
import Content from "./Content";

export default function Modal({ content, status, close }) {
  return (
    <section
      className={`${status} absolute justify-center items-center inset-0 bg-black bg-opacity-40`}
    >
      <div className="container overflow-scroll overscroll-contain bg-white w-2/3 h-5/6 p-3 rounded-md">
        <div className="flex justify-between items-cener">
          <p className="uppercase">titulo</p>
          <spam onClick={close} className="cursor-pointer">
            X
          </spam>
        </div>
        <div className="text-center text-sm">
          {content &&
            content.map((data, index) => (
              <Content key={index * 2} data={data} />
            ))}
        </div>
        <div className="flex justify-end p-2">
          <button onClick={close} className="p-2 rounded uppercase text-md">
            Voltar
          </button>
        </div>
      </div>
    </section>
  );
}
