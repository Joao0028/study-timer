import TarefasLista from "../../../types/tarefa";

export default function Item({ tarefa, tempo, selecionado, completado, id }: TarefasLista) {
   console.log("Item atual: ",{ tarefa, tempo, selecionado, completado, id });
   
    return (
    <li className="mb-3 bg-[#141414] pl-3 w-[325px] cursor-pointer py-[6px] border-solid border-b-2 border-cor-azulClaro max-md:w-[420px] max-[500px]:w-[320px] mr-1 ">
      <h3 className="font-medium">{tarefa}</h3>
      <span className="text-cor-cinza">{tempo}</span>
    </li>
  );
}
