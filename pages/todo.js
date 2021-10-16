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
      <div className="flex-col justify-center items-center">
        <div className="bg-blue-900 text-center text-white">
          <p
            onClick={(e) => openItem(e.target)}
            id="step_1"
            className="cursor-pointer p-2"
          >
            Passo 1
          </p>
        </div>
        <div className={`${status.step_1}`}>{<StepOne />}</div>
        <div className=" bg-blue-900 text-center text-white">
          <p
            onClick={(e) => openItem(e.target)}
            id="step_2"
            className="cursor-pointer p-2"
          >
            Passo 2
          </p>
        </div>
        <div className={`${status.step_2}`}>conteudo escondido</div>
        <div className="bg-blue-900 text-center text-white">
          <p
            onClick={(e) => openItem(e.target)}
            id="step_3"
            className="cursor-pointer p-2"
          >
            Passo 3
          </p>
        </div>
        <div className={`${status.step_3}`}>conteudo escondido</div>
        <div className="bg-blue-900 text-center text-white">
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
    </>
  );
}

export default Todo;
