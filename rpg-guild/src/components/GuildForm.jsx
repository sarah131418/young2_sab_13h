import { useParams } from "react-router-dom"

export function GuildForm(props){
    const {guildId} = useParams(); 
    
    return(
        <form className="flex flex-col gap-4 p-5 text-orange-500">
            Guildas {guildId}
        </form>
    )
}
