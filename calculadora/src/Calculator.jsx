import {useState} from "react"
import { evaluate } from "mathjs";

export function Calculator(){


    const buttonClassName = "justify-center items-center";

    const hoverClassName = "hover:opacity-75 transition ease-in-out duration-300 hover-text-[#CCD5AE]";

    const[input, setInput] = useState('')
    const[result, setResult] = useState('')
    const handleCalculate = () => {
        try{
            if(!input) return;
            setResult(evaluate(input). to.String());
        } catch (error) {
            setResult(error)
        }
    };
    const handleClear = () => {
        setInput("");
        setResult("");
    };
    const handleDelete = () => setInput((prev) => prev.slice(0, -1));

    const handleClick = (value) => {
        setInput(input + value);
    }

    return(
        <div className="grid shadow-md w-[360px] text-2xl font-bold">
            <div className="bg-[#CCD5AE] text-white min-h-[180px] grow flex flex-col justify-end items-end p-8 gap-4">
                <span className="flex w-fit justify-self-end text-xl">{input}</span>
                <div className="flex justify-between w-full items-center text-5xl">
                    <span>=</span>
                    <span className="flex h-fit">{result}</span>
                </div>
            </div>
            <div className="bg-white grow h-[480px] grid grid-cols-4">
                <button className={`${buttonClassName} ${hoverClassName} bg-[#FEFAE0]`}>C</button>
                <button className={`${buttonClassName} ${hoverClassName} bg-[#E9EDC9] text-[#D4A373]`}>+</button>
                <button className={`${buttonClassName} ${hoverClassName} bg-[#E9EDC9] text-[#D4A373]`}>-</button>
                <button className={`${buttonClassName} ${hoverClassName} bg-[#E9EDC9]`}>C</button>
                <button className={`${buttonClassName} ${hoverClassName} bg-[#FEFAE0]`}/>
                <button className={`${buttonClassName} ${hoverClassName}`}>7</button>
                <button className={`${buttonClassName} ${hoverClassName}`}>8</button>
                <button className={`${buttonClassName} ${hoverClassName}`}>9</button>
                <button className={`${buttonClassName} ${hoverClassName}`}>4</button>
                <button className={`${buttonClassName} ${hoverClassName}`}>5</button>
                <button className={`${buttonClassName} ${hoverClassName}`}>6</button>
                

        </div>
    )
