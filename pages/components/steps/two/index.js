import React from "react";
import Modal from "../../modal/Modal";

import { Items, ItemsContainer } from "../../../../styles/styles";

export default function StepTwo({ data }) {
  const [modal, setModal] = React.useState({
    status: "hidden",
    content: "",
  });

  const [localCheckTwo, setLocalCheck] = React.useState({
    0: ["Join Domain", false],
    1: ["gpupdate /force", false],
    2: ["Instalar Altiris", false],
    3: ["Ativar o Windows", false],
  });

  //Inicializa a variável local caso haja dados no local storage
  React.useEffect(() => {
    const local = JSON.parse(localStorage.getItem("pcaas_list_two"));
    if (local) {
      setLocalCheck(local);
    } else {
      localStorage.setItem("pcaas_list_two", localCheckTwo);
    }
  }, []);

  // Atualiza o estado da aplicação com base no local storage
  React.useEffect(() => {
    const local = JSON.parse(localStorage.getItem("pcaas_list_two"));
    setLocalCheck(local);
  }, []);

  //configura o local storage
  const updateCheckbox = (index, step, status) => {
    setLocalCheck({
      ...localCheckTwo,
      [index]: [step, status],
    });
  };
  React.useEffect(() => {
    localStorage.setItem("pcaas_list_two", JSON.stringify(localCheckTwo));
  }, [localCheckTwo]);

  //configura os steps da página
  const checkStep = (index) => localCheckTwo[index];

  //abre e fecha o modal
  const openModal = (content) => {
    modal.status === "hidden"
      ? setModal({ status: "flex", content })
      : setModal({ status: "hidden", content: "" });
  };

  return (
    <Items className="overflow-auto">
      {data &&
        data.map((item, index) => {
          return (
            <ItemsContainer
              key={index * 2 + 1}
              className="bg-white rounded-md shadow-lg h-10 m-1"
            >
              <label className="inline-flex items-center">
                {/* coheckbox */}
                <input
                  type="checkbox"
                  id={`item-${index}`}
                  checked={localCheckTwo[index][1]}
                  className="form-checkbox h-5 w-5"
                  onChange={(e) =>
                    updateCheckbox(
                      index,
                      localCheckTwo[index][0],
                      e.target.checked
                    )
                  }
                />
                {/* Nome do item */}
                <span className="ml-2 text-gray-700">{checkStep(index)}</span>
              </label>

              {/* Botão que abre o Modal */}
              <span
                id="network"
                onClick={() => openModal(item)}
                className=" text-xs cursor-pointer uppercase p-1 border-4 border-double border-blue-200 rounded-md"
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
}
