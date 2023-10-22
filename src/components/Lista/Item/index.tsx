import TarefasLista from "../../../types/tarefa";
import { AiFillCheckCircle } from "react-icons/ai";
import { useState } from "react"

interface Props extends TarefasLista {
  selecionaTarefa: (tarefaSelecionada: TarefasLista) => void;
}

export default function Item({
  tarefa,
  tempo,
  selecionado,
  completado,
  id,
  selecionaTarefa,
}: Props) {

  const [ display , setDisplay] = useState("block")

  return (
    <li
      className={` 
      ${selecionado ? "itemSelecionado" : ""} 
      ${completado ? "completado" : ""}
      ${display}
      mb-3 bg-[#141414] pl-3 w-[325px] cursor-pointer py-[6px] border-solid border-b-2  ${
        selecionado && completado === false ? "border-cor-azulClaro" : "border-cor-cinza"
      }
      ${completado ? "border-cor-verde" : ""}
      max-md:w-[420px] max-[500px]:w-[320px] mr-1 `}
      onClick={() =>
        selecionaTarefa({
          tarefa,
          tempo,
          selecionado,
          completado,
          id,
        })
      }
    onDoubleClick={() => setDisplay("hidden")}
    >
      <h3 className="font-medium">{tarefa}</h3>
      <div className="flex items-center w-full justify-between pr-4">
        <span className="text-cor-cinza">{tempo}</span>
        <AiFillCheckCircle className={`text-[22px] text-cor-verde ${completado? "": "hidden"}`} />
      </div>
    </li>
  );
}
