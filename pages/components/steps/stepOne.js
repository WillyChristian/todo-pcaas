import React from "react";
import { Items, ItemsContainer } from "./styles";

export default function StepOne() {
  const [check, setCheck] = React.useState("checked");

  const handleChange = () => {
    const statusCheck = document.querySelector("#itemOne");
    const list = statusCheck.classList;

    console.log(list);
  };
  /*     if (check === "checked") {
      setcheck({
        ...check,
        [trgt]: "block",
      });
    } else {
      setcheck({
        ...check,
        [trgt]: "hidden",
      });
    } */

  return (
    <Items className="p-2">
      <ItemsContainer className="bg-white rounded-md shadow-lg h-14 p-2 m-1">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            id="itemOne"
            className="form-checkbox h-5 w-5"
            onChange={handleChange}
          />
          <span className="ml-2 text-gray-700">
            Fazer a configuração de rede
          </span>
        </label>
      </ItemsContainer>

      <ItemsContainer className="bg-white rounded-md shadow-lg h-14 p-2 m-1">
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox h-5 w-5" />
          <span className="ml-2 text-gray-700">Inserir no Domínio</span>
        </label>
      </ItemsContainer>
      <ItemsContainer className="bg-white rounded-md shadow-lg h-14 p-2 m-1">
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox h-5 w-5" />
          <span className="ml-2 text-gray-700">Inserir no Domínio</span>
        </label>
      </ItemsContainer>
    </Items>
  );
}

/*


*/
