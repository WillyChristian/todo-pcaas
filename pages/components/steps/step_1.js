import React from "react";
import { Parag } from "./step_1_style";

export default function StepOne() {
  return (
    <div className="bg-gray-200">
      <Parag>Teste</Parag>
      <div className="w-96 bg-gray-900 rounded-md shadow-lg h-14 p-2 m-1">
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox h-5 w-5" />
          <span className="ml-2 text-gray-700">
            Fazer a configuração de rede
          </span>
        </label>
      </div>
      <div className="w-96 bg-gray-100 rounded-md shadow-lg p-2 m-1">
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox h-5 w-5" />
          <span className="ml-2 text-gray-700">Inserir no Domínio</span>
        </label>
      </div>
    </div>
  );
}
