import React from "react";
import { Items, ItemsContainer } from "../../../styles/styles";
import Modal from "../modal/Modal";

export default function StepOne() {
  const [check, setCheck] = React.useState("checked");
  const [modalStatus, setModalStatus] = React.useState("hidden");

  const current = (props) => ({}[props]);

  const handleChange = () => {
    const statusCheck = document.querySelector("#itemOne");
    const list = statusCheck.classList;

    console.log(list);
  };

  const openModal = (target) => {
    const targetID = target.id;
    const item = current(targetID);
    if (modalStatus === "hidden") {
      setModalStatus("flex");
    } else {
      setModalStatus("hidden");
    }
  };

  return (
    <Items className="p-2">
      <ItemsContainer className="bg-white rounded-md shadow-lg h-10 m-1">
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
        <spam
          id="name-1"
          onClick={(e) => openModal(e.target)}
          className="text-xs cursor-pointer uppercase p-1 border-4 border-double border-blue-200 rounded-md"
        >
          Consultar
        </spam>
      </ItemsContainer>

      <ItemsContainer className="bg-white rounded-md shadow-lg h-10 p-2 m-1">
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox h-5 w-5" />
          <span className="ml-2 text-gray-700">Inserir no Domínio</span>
        </label>
        <spam
          id="name-2"
          onClick={(e) => openModal(e.target)}
          className="text-xs cursor-pointer uppercase p-1 border-4 border-double border-blue-200 rounded-md"
        >
          Consultar
        </spam>
      </ItemsContainer>
      <Modal display={modalStatus} openModal={openModal} />
    </Items>
  );
}

/*


*/
