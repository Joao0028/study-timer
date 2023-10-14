import React from "react";

interface BotaoProps {
    texto?:string
}

export default function Botao({texto = "Enviar"}: BotaoProps){
    return (
        <button className=" bg-cor-azulClaro text-white font-medium h-[40px] w-[140px] rounded-lg hover:opacity-95  ">{texto}</button>
    )
}