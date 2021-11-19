import React from "react";
import Card from "../card";
const programs = require("./config.json");

export default function Shortcut() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <h2 class="my-2 text-xl font-medium text-gray-800 dark:text-white md:text-2xl">
        Atalhos de instalação
      </h2>
      <div className="flex flex-wrap justify-center items-center w-full m-1">
        {programs["programs"].map((softwares) => {
          return <Card software={softwares} />;
        })}
      </div>
    </div>
  );
}
