import React from "react";
import Image from "next/image";
import { CopyToClipboard } from "react-copy-to-clipboard";

// export default function Card({ software }) {
export default function Card() {
  const alerta = () => alert("Copiado");

  return (
    <div className="m-1 w-48 max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div className="px-4 py-2">
        <h1 className="w-full text-1xl font-bold text-gray-800 uppercase dark:text-white">
          {/* {software.name} */}
          Nome do Software
        </h1>
      </div>
      <div className="flex justify-center items-center w-full h-full">
        <Image
          height="100"
          width="100"
          // src={software.icon}
          src="/icons/gimp.jpg"
          alt="software-icon"
        />
      </div>
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
        {/* <CopyToClipboard text={software.location}> */}
        <CopyToClipboard text="um texto qualquer">
          <h3
            onClick={alerta}
            className="cursor-pointer text-lg font-bold text-white"
          >
            Atalho
          </h3>
        </CopyToClipboard>
        <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase  bg-white rounded ">
          Manual
        </button>
      </div>
    </div>
  );
}
