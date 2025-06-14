import React from "react";

const Frase = ({texto, autor}) =>{
    return(
        <div>
            <p>{texto}</p>
            <p className="underline decoration-sky-500"><em>{autor}</em></p>
        </div>
    )
}

export default Frase