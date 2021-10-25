import React from "react";
import { Items, ItemsContainer } from "../../../../styles/styles";
import Modal from "../../modal/Modal";

const StepOne = ({ data }) => {
  const [modal, setModal] = React.useState({
    status: "hidden",
    content: "",
  });

  /*
    Precisa ser corrigido, pois em caso de um contexto muito grande, o objeto passa a ser
    complexo para a manutenção
  */
  const checkStep = (index) =>
    ({
      0: "Configuração de Rede",
      1: "Colocar no Domínio",
    }[index]);

  const openModal = (content) => {
    modal.status === "hidden"
      ? setModal({ status: "flex", content })
      : setModal({ status: "hidden", content: "" });
  };

  return (
    <Items>
      {data.map((item, index) => {
        return (
          <>
            <ItemsContainer
              key={index}
              className="bg-white rounded-md shadow-lg h-10 m-1"
            >
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  id="item"
                  className="form-checkbox h-5 w-5"
                />
                <span className="ml-2 text-gray-700">{checkStep(index)}</span>
              </label>
              <spam
                id="network"
                onClick={() => openModal(item)}
                className="text-xs cursor-pointer uppercase p-1 border-4 border-double border-blue-200 rounded-md"
              >
                Consultar
              </spam>
              <Modal
                content={modal.content}
                status={modal.status}
                close={openModal}
              />
            </ItemsContainer>
          </>
        );
      })}
    </Items>
  );
};
export default StepOne;
