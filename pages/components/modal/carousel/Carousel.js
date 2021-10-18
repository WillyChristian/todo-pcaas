import React from "react";
import Image from "next/image";
import config from "../../../../public/modal/network/config.json";

export default function Carousel() {
  const imgs = [config.img1, config.img2, config.img3, config.img4];

  return (
    <>
      <section className="overflow-scrol">
        {imgs.map((image, index) => (
          <div
            key={index}
            className="my-2 p-5 h-full w-full bg-gray-500 flex-col justify-center items-center"
          >
            <div className="container p-2 m-2">
              <h1 className="text-lg uppercase text-white">
                Etapa {index + 1}
              </h1>
              <p className="uppercase text-gray-100 text-sm">
                {image.description}
              </p>
            </div>
            <Image
              src={image.src}
              alt="imagem"
              width={image.width}
              height={image.height}
            />
          </div>
        ))}
      </section>
    </>
  );
}
