import React from "react";
import Link from "next/link";
import Image from "next/image";

import Todo from "./todo";
import Sobre from "./sobre";
import Uteis from "./uteis";

export default function Home() {
  const [page, setPage] = React.useState(<Todo />);
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="h-20 bg-blue-600 text-blue-200 text-xl flex items-center justify-center">
        <h1>Roadmap PCAAS</h1>
      </div>
      <div className="h-16 bg-white text-blue-200 text-xl flex items-center justify-center">
        <Image
          width="100"
          height="30"
          src="/logo-colorido.png"
          alt="logo-stefanini"
        />
      </div>
      <section className="nav justify-center h-20 select-none flex items-center space-x-4">
        <button
          onClick={() => setPage(<Todo />)}
          className="p-2 text-white rounded-lg bg-indigo-700"
          on
        >
          To Do
        </button>
        <button
          onClick={() => setPage(<Uteis />)}
          className="p-2 text-white rounded-lg bg-indigo-700"
        >
          Utilitários
        </button>
        <button
          onClick={() => setPage(<Sobre />)}
          className="p-2 text-white rounded-lg bg-indigo-700"
        >
          Créditos
        </button>
      </section>
      <section>{page}</section>
    </div>
  );
}
