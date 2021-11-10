import React from "react";
import { Items, ItemsContainer } from "../../../styles/styles";

//Internal imports
import Modal from "../modal/Modal";

function Step({ step, index, check, setChecked }) {
  const [open, setOpen] = React.useState("hidden");
  const [modal, setModal] = React.useState({
    status: "hidden",
    content: "",
  });

  const openItem = () => {
    open === "hidden" ? setOpen("block") : setOpen("hidden");
  };

  //abre e fecha o modal
  const openModal = (content) => {
    modal.status === "hidden"
      ? setModal({ status: "flex", content })
      : setModal({ status: "hidden", content: "" });
  };

  const updateCheckbox = (title, chkBox) => {
    setChecked({
      ...check,
      [title]: chkBox,
    });
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
        {step &&
          step.tasks.map((item, index) => {
            return (
              <Items key={index * 2 + 1}>
                <ItemsContainer className="bg-white rounded-md shadow-lg h-10 m-1">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      id="item"
                      className="form-checkbox h-5 w-10"
                      checked={
                        (check[item.title] && check[item.title]) ||
                        item.executed
                      }
                      onChange={(e) =>
                        updateCheckbox(item.title, e.target.checked)
                      }
                    />
                    <span className="ml-2 text-gray-700">{item.title}</span>
                  </label>
                  <span
                    id="network"
                    onClick={() => openModal(item)}
                    className="text-xs cursor-pointer uppercase p-1 border-4 border-double border-blue-200 rounded-md"
                  >
                    Consultar
                  </span>
                  <Modal
                    content={item.consult}
                    status={modal.status}
                    close={openModal}
                  />
                </ItemsContainer>
              </Items>
            );
          })}
      </div>
    </div>
  );
}

export default Step;
