import React from "react";
const config = require("../public/modal/config");
import Step from "./components/steps/Step";

function Todo() {
  const [check, setChecked] = React.useState({});

  //configura os steps da página
  React.useEffect(() => {
    const local = localStorage.getItem("steps");
    if (local) {
      setChecked(JSON.parse(local));
    }
  }, []);
  React.useEffect(() => {
    localStorage.setItem("steps", JSON.stringify(check));
  }, [check]);

  return (
    <>
      <div className="flex flex-col items-center w-full">
        {config[0].map((step, index) => {
          return (
            <div key={index} className="w-full m-2 p-2">
              <Step
                step={step}
                index={index}
                check={check}
                setChecked={setChecked}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Todo;
