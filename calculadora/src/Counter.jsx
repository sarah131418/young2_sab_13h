import { useState } from "react";

function Counter(){
    const[count, setCount] = useState(0);

    const incrementar = ()=>{
        setCount(count+1)
    }

    return(
    <div className="flex-col justify-center items-center h-screen">
    <h1>Estado: {count}</h1>
    <button className="p-3 bg-blue-500 text-white" onClick={incrementar}>Incrementar</button>
    </div>
    )       
    
}

export default Counter