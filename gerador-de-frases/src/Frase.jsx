import React from "react";

const Frase = ({text,autor}) =>{
    return(
        <div>
            <p>{text}</p>
            <p className="underline decoration-sky-500"><em>{autor}</em></p>
        </div>
    )
}

export default Frase