import React from "react";
import StepOne from "./one";

function Step({ step, index }) {
  const [open, setOpen] = React.useState("hidden");
  const [stepPage, setStepPage] = React.useState({
    0: <StepOne data={step} />,
    1: "maionese",
    2: "alface",
    3: "mostarda",
    4: "coca-cola",
  });

  const openItem = () => {
    open === "hidden" ? setOpen("block") : setOpen("hidden");
  };

  return (
    <>
      <div className="bg-gray-300 text-center text-gray-800 rounded-lg shadow-md ">
        <p onClick={() => openItem()} className="cursor-pointer p-2">
          Passo {index + 1}
        </p>
      </div>
      <div className={`${open}`}>{stepPage[index]}</div>
    </>
  );
}

export default Step;
