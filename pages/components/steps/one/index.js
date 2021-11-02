import React from "react";
import { Items, ItemsContainer } from "../../../../styles/styles";
import Modal from "../../modal/Modal";

const StepOne = ({ data }) => {
  const [modal, setModal] = React.useState({
    status: "hidden",
    content: "",
  });
  const [localCheckOne, setLocalCheck] = React.useState({
    0: ["Configuração de Rede", false],
    1: ["Colocar no Domínio", false],
  });

  // Atualiza o estado da aplicação com base no local storage
  React.useEffect(() => {
    const local = JSON.parse(localStorage.getItem("pcaas_list_one"));
    if (local) {
      setLocalCheck(local);
    } else {
      localStorage.setItem("pcaas_list_one", localCheckOne);
    }
  }, []);

  //configura o local storage
  const updateCheckbox = (index, step, status) => {
    setLocalCheck({
      ...localCheckOne,
      [index]: [step, status],
    });
  };
  React.useEffect(() => {
    localStorage.setItem("pcaas_list_one", JSON.stringify(localCheckOne));
  }, [localCheckOne]);

  //configura os steps da página
  const checkStep = (index) => localCheckOne[index];

  //abre e fecha o modal
  const openModal = (content) => {
    modal.status === "hidden"
      ? setModal({ status: "flex", content })
      : setModal({ status: "hidden", content: "" });
  };

  return (
    <Items>
      {data &&
        data.map((item, index) => {
          return (
            <ItemsContainer
              key={index * 2 + 1}
              className="bg-white rounded-md shadow-lg h-10 m-1"
            >
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  id="item"
                  className="form-checkbox h-5 w-10"
                  onChange={(e) =>
                    updateCheckbox(
                      index,
                      localCheckOne[index][0],
                      e.target.checked
                    )
                  }
                />
                <span className="ml-2 text-gray-700">{checkStep(index)}</span>
              </label>
              <span
                id="network"
                onClick={() => openModal(item)}
                className="text-xs cursor-pointer uppercase p-1 border-4 border-double border-blue-200 rounded-md"
              >
                Consultar
              </span>
              <Modal
                content={modal.content}
                status={modal.status}
                close={openModal}
              />
            </ItemsContainer>
          );
        })}
    </Items>
  );
};
export default StepOne;
