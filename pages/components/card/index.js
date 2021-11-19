import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Card({ software }) {
  return (
    <div class="m-1 w-48 max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div class="px-4 py-2">
        <h1 class="w-full text-1xl font-bold text-gray-800 uppercase dark:text-white">
          {software.name}
        </h1>
      </div>
      <div className="flex justify-center items-center w-full h-full">
        <img className="w-28 h-28" src={software.icon} alt="software-icon" />
      </div>
      <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
        <CopyToClipboard text={software.location}>
          <h3
            onClick={() => alert("Copiado!")}
            class="cursor-pointer text-lg font-bold text-white"
          >
            Atalho
          </h3>
        </CopyToClipboard>
        <button class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase  bg-white rounded ">
          Manual
        </button>
      </div>
    </div>
  );
}
