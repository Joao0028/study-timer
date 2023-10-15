import Botao from "../Botao";
import Tempo from "./Tempo";

export default function Cronometro() {
  return (
    <div className="text-cor-branco border-solid border-b-2 border-cor-azulClaro bg-[#141414] px-8 py-6 rounded-sm  m-auto flex justify-center flex-col items-center mb-[10em] w-[400px] max-sm:w-[325px]">
      <p className="font-bold max-sm:text-[12px]">Escolha um card e inicie o cronômetro</p>
      <Tempo />
      <Botao texto="Começar" />
    </div>
  );
}
