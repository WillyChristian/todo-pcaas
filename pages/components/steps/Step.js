import React from "react";

//internal imports
import StepOne from "./one";
import StepTwo from "./two";
import StepThree from "./three";
import StepFour from "./four";
import StepFive from "./five";

function Step({ step, index }) {
  const [open, setOpen] = React.useState("hidden");
  const [stepPage, setStepPage] = React.useState({
    0: <StepOne data={step} />,
    1: <StepTwo data={step} />,
    2: <StepThree data={step} />,
    3: <StepFour data={step} />,
    4: <StepFive data={step} />,
  });

  const openItem = () => {
    open === "hidden" ? setOpen("block") : setOpen("hidden");
  };

  return (
    <div className="w-full p-2">
      <div className=" bg-blue-400 text-center text-white rounded-lg shadow-md">
        <p onClick={() => openItem()} className="cursor-pointer p-2">
          Passo {index + 1}
        </p>
      </div>
      <div
        className={`${open} bg-white my-2 py-2 overflow-auto rounded-lg shadow-lg`}
      >
        {stepPage[index]}
      </div>
    </div>
  );
}

export default Step;
