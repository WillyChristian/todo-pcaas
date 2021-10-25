import React from "react";
import Image from "next/image";

export default function Content({ data }) {
  return (
    <>
      {data && (
        <section className="overflow-scrol">
          <div className="my-2 p-5 h-full w-full bg-gray-500 flex-col justify-center items-center">
            <div className="container p-2 m-2">
              <h1 className="text-lg uppercase text-white">
                Etapa {data.etapa}
              </h1>
              <p className="uppercase text-gray-100 text-sm">
                {data.description}
              </p>
            </div>
            <Image
              src={data.src}
              alt="imagem"
              width={data.width}
              height={data.height}
            />
          </div>
        </section>
      )}
    </>
  );
}
