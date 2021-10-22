import React from "react";
import StepOne from "./components/steps/stepOne";

function Todo() {
  const [status, setStatus] = React.useState({
    step_1: "hidden",
    step_2: "hidden",
    step_3: "hidden",
    step_4: "hidden",
  });

  const openItem = (target) => {
    const trgt = target.id;
    if (status[trgt] === "hidden") {
      setStatus({
        ...status,
        [trgt]: "block",
      });
    } else {
      setStatus({
        ...status,
        [trgt]: "hidden",
      });
    }
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full py-5 rounded-xl">
        <div className="w-8/12 my-2">
          <div className="bg-gray-300 text-center text-gray-800 rounded-lg shadow-md ">
            <p
              onClick={(e) => openItem(e.target)}
              id="step_1"
              className="cursor-pointer p-2"
            >
              Passo 1
            </p>
          </div>
          <div className={`${status.step_1}`}>{<StepOne />}</div>
        </div>

        <div className="w-8/12 my-2">
          <div className=" bg-gray-300 text-center text-gray-800 rounded-lg shadow-md">
            <p
              onClick={(e) => openItem(e.target)}
              id="step_2"
              className="cursor-pointer p-2"
            >
              Passo 2
            </p>
          </div>
          <div className={`${status.step_2}`}>conteudo escondido</div>
        </div>

        <div className="w-8/12 my-2">
          <div className="bg-gray-300 text-center text-gray-800 rounded-lg shadow-md">
            <p
              onClick={(e) => openItem(e.target)}
              id="step_3"
              className="cursor-pointer p-2"
            >
              Passo 3
            </p>
          </div>
          <div className={`${status.step_3}`}>conteudo escondido</div>
        </div>

        <div className="w-8/12 my-2">
          <div className="bg-gray-300 text-center text-gray-800 rounded-lg shadow-md ">
            <p
              onClick={(e) => openItem(e.target)}
              id="step_4"
              className="cursor-pointer p-2"
            >
              Passo 4
            </p>
          </div>
          <div className={`${status.step_4}`}>conteudo escondido</div>
        </div>
      </div>
    </>
  );
}

export default Todo;
