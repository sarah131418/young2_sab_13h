import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddQuest from './AddQuest'
import { useState } from 'react'

function App() {
  const [quests, setQuests]= useState({})

  function saveAddQuest(title){
    let auxQuests = quests
    let id = 0
    if(auxQuests.length){
      id = auxQuests[auxQuests.length -1].id
    }
    id ++
    console.log(title)
  }
  return(
    <div className='flex h-screen justify-center items-center'>
      <div className='card w-[80%] 1g:w-[50%] h-[70%] shadow-md rounded-sm transform ease-out duration-300 items-center p-10 gap-5'>
        <h1 className='text-5xl font-work font-bold w-fit text-center'>Quests to do</h1>
        <AddQuest saveAddQuest={saveAddQuest}/>
      </div>
    </div>
  )
}

export default App
