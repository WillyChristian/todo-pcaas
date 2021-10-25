import React from "react";

import { config } from "./components/steps/config";
import Step from "./components/steps/Step";

function Todo() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full py-5 rounded-xl">
        {config.map((step, index) => {
          return (
            <div key={index * 2} className="w-8/12 my-2">
              <Step step={step} index={index} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Todo;
