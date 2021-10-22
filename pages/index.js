import React from "react";
import Image from "next/image";

import Todo from "./todo";
import Sobre from "./sobre";
import Uteis from "./uteis";
import Navbar from "./components/navbar/Nav";
import Logo from "./components/header/Header";
import Footer from "./components/footer/Footer";

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
    <>
      <header className="bg-gray-100 w-full text-white flex items-center justify-center h-16">
        <Logo />
      </header>
      <main className="flex">
        <Navbar setpage={currentPage} />
        <section className="bg-gray-200 p-2 h-screen w-11/12">{page}</section>
      </main>
      <footer className="text-gray-600 body-font bg-gray-700">
        <Footer />
      </footer>
    </>
  );
}
