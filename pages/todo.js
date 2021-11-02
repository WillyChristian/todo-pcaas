import React from "react";
const config = require("../public/modal/config");
import Step from "./components/steps/Step";

function Todo() {
  return (
    <>
      <div className="flex flex-col items-center w-full">
        {config[0].map((step, index) => {
          return (
            <div key={index - 1 * 2} className="w-full m-2 p-2">
              <Step step={step} index={index} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Todo;
