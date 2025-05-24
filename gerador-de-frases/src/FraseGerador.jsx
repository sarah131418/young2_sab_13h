import React, { useState } from "react";
import Frase from "./Frase";

const FraseGerador = () =>{
    const [Frase,mudarFrase] = useState({conteudo:'', autor:''})

    return (
        <div className="min-h-20 flex flex-col gap-4 items-start">
        <Frase text={Frase.conteudo} autor={Frase.conteudo}/>
        <button className="bg-gradient-to-r from-teal-500 to-sky-500 p-2 rounded-1 shadow-md text-white">Nova frase!</button>
        </div>
    )
}

export default FraseGerador