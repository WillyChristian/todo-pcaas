import React from "react";
import Card from "../card/card";
const programs = require("../../../config_shrortcuts.json");

export default function Programs() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <h2 className="my-2 text-xl font-medium text-gray-800 dark:text-white md:text-2xl">
        Atalhos de instalação
      </h2>
      <div className="flex flex-wrap justify-center items-center w-full m-1">
        {programs["programs"].map((softwares, index) => {
          return <Card software={softwares} key={index} />;
        })}
      </div>
    </div>
  );
}
