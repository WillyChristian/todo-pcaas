import React from "react";
import { Link, Image } from "next";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="h-20 bg-blue-600 text-blue-200 text-xl flex items-center justify-center">
        <h1>App PCAA - Todo list para não se perder</h1>
      </div>
      <div className="h-16 bg-white text-blue-200 text-xl flex items-center justify-center">
        <Image className="h-10" src="/logo-colorido.png" alt="logo-stefanini" />
      </div>
      <div className="justify-center h-20 select-none flex items-center space-x-4">
        <Link href="/todo">
          <a className="p-2 text-white rounded-lg bg-indigo-700">To Do</a>
        </Link>
        <Link href="/uteis">
          <a className="p-2 text-white rounded-lg bg-indigo-700">Utilitários</a>
        </Link>
        <Link href="/sobre">
          <a className="p-2 text-white rounded-lg bg-indigo-700">Créditos</a>
        </Link>
      </div>
    </div>
  );
}
