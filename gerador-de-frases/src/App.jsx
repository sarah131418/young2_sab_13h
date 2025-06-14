import { useState } from 'react'
import './App.css'
import GeradorFrase from './GeradorFrase'

function App() {
  return(
    <div className='flex flex-col font-serif gap-4 bg-gradient-to-r from-teal-500 to-sky-500 h-screen p-10 text-neutral-800'>
      <div className='bg-white rounded-xl p-4 shadow-lg'>
        <h1 className='text-lg'>Gerador de Frases</h1>
        <hr className='h-px my-3' />
        <GeradorFrase/>
      </div>
    </div>
  )
}


export default App