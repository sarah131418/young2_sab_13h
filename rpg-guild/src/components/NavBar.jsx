import {Link} from 'react-router-dom'
<Link to= "/">Home</Link>
export function NavBar(){
    return(
        <nav className="flex w-full gap-5 h-[65px] items-center bg-[#E9E0D5]">
            <h1 className="text-lg text-xl text-orange-500">RPG Guilds</h1>
            <ul className="flex gap-5">
                <li className="text-sm lg:text-md">
                    <link to="/" className="text-black">Home</link>
                </li>
                 <li className="text-sm lg:text-md">
                    <link to="/guilds" className="text-black">Guildas</link>
                </li>
                 <li className="text-sm lg:text-md">
                    <link to="/members" className="text-black">Membros</link>
                </li>
            </ul>
        </nav>
    )
}