import TempoParaSegundos from "../../../common/utils/Date";

export default function Tempo() {
  console.log("conversão: ", TempoParaSegundos("01:01:01"));
  
  return (
    <h2 className="text-[22px] mb-1 font-extrabold max-sm:text-[20px]">
      00
      <span className="text-cor-azulClaro">:</span>
      00
      <span className="text-cor-azulClaro">:</span>
      00
    </h2>
  );
}
