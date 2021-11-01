import React from "react";

export default function StepThree() {
  //Atualiza o estado da aplicação com base no local storage
  // React.useEffect(() => {
  //   const local = JSON.parse(localStorage.getItem("pcaas_list"));
  //   setLocalCheck(local);
  // }, []);

  // //configura o local storage
  // const updateCheckbox = (index, step, status) => {
  //   setLocalCheck({
  //     ...localCheck,
  //     [index]: [step, status],
  //   });
  // };
  // React.useEffect(() => {
  //   localStorage.setItem("pcaas_list", JSON.stringify(localCheck));
  // }, [localCheck]);

  // //configura os steps da página
  // const checkStep = (index) => localCheck[index];

  // //abre e fecha o modal
  // const openModal = (content) => {
  //   modal.status === "hidden"
  //     ? setModal({ status: "flex", content })
  //     : setModal({ status: "hidden", content: "" });
  // };
  return (
    <div className="bg-red-30 flex items-center justify-center w-full h-28">
      <h1>Conteúdo do passo 3</h1>
    </div>
  );
}
