import React from "react";
import Image from "next/image";

import Todo from "./todo";
import Sobre from "./sobre";
import Uteis from "./uteis";

export default function Home() {
  const [page, setPage] = React.useState(<Todo />);

  const current = (page) =>
    ({
      page1: <Todo />,
      page2: <Sobre />,
      page3: <Uteis />,
    }[page]);
  const currentPage = (props) => {
    const page = current(props);
    return setPage(page);
  };

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
          onClick={() => currentPage("page1")}
          className="p-2 rounded-lg bg-white shadow-lg"
          on
        >
          To Do
        </button>
        <button
          onClick={() => currentPage("page2")}
          className="p-2 shadow-xl rounded-lg bg-white"
        >
          Utilitários
        </button>
        <button
          onClick={() => currentPage("page3")}
          className="p-2 shadow-xl rounded-lg bg-white"
        >
          Créditos
        </button>
      </section>
      <section>{page}</section>
    </div>
  );
}
