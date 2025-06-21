import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"

import { Navbar } from './components/NavBar'
import { Home } from './components/Home'
import { Guilds } from './components/Guilds'
import { Members } from './components/Members'
import { MemberForm } from './components/MemberForm'
import { GuildForm } from './components/GuildForm'


const App = ()=>{
  return(
  <Router>
    <div className='bg-[#ECEAE0] w-screen h-screen'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/guilds' element={<Guilds/>} />
        <Route path='/members' element={<Members/>} />
            <Route path="/guild/:guildId" element={<GuildForm/>}/>
            <Route path="/member/:memberId" element={<MemberForm/>}/>
      </Routes>
    </div>
  </Router>
  )
}

export default App
