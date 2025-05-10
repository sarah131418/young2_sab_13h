import { useState } from "react";

export default function(){
    const[title,setTitle] = useState(props.quest.title)

    const[checked,setChecked] = useState(false)

    const[editMode,setEditMode] = useState(false)

    const conclued = props.quest.status === 'concluido'

    return(
        <div className="flex gap-4 flex-col md:flex-row items-center">
            <div className="flex gap-4 items-center w-full sm:w [80%]">
                <input 
                    type="checkbox"
                    disabled={conclued}
                    checked = {checked}
                    className="checkbox rounded-full border"
                 />

                {editMode && !conclued ? (
                    <input
                        placeholder="quest"
                        defaultValue={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="rounded-full bg-secondary pl-2 w-full input-sm flex focus:outline-none"
                    />
                ) :(

                 <p className="break-words">
                    {props.quest.title}
                 </p>
                )}
            </div>
            <div className="flex gap-4 w-full sm:w-fit justify-center">
                <button onClick={() => setEditMode(!editMode)} > editar</button>
                <button>Excluir</button>
            </div>
        </div>
        {!conclued && (
            <div className="flex gap-4 w-full sm:w-fit justify-center">
            <button onClick={() => {
                if (editMode) props.savedEditQuest(props.quest, title);
                setEditMode(!editMode);
            }}>editar
            </button>
            <button>Excluir</button>
            </div>
        )}
        
    ) 
}