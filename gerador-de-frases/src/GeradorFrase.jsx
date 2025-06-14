import { useState } from "react"
import axios from "axios"
import Frase from "./Frase"

const GeradorFrase = () => {
  const [frase, setFrase] = useState({
    conteudo: 'Não joguem pedras aos porcos, eles preferem lavagem',
    autor: 'Martin Luther King'
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const buscarFrase = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await axios.get('https://api.quotable.io/random')
      const data = response.data

      setFrase({
        conteudo: data.content,
        autor: data.author
      })
    } catch (error) {
      console.error('Erro ao buscar a frase:', error)
      setError('Erro ao buscar a frase')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-20 flex flex-col gap-4 items-start">
      {loading && <p className="text-lg">Carregando...</p>}
      {error && <p className="text-lg text-red-500">{error}</p>}

      {!loading && !error && (
        <Frase texto={frase.conteudo} autor={frase.autor} />
      )}

      <button
        onClick={buscarFrase}
        className="bg-gradient-to-r from-teal-500 to-sky-500 p-2 rounded-lg shadow-md text-white"
      >
        Nova Frase
      </button>
    </div>
  )
}

export default GeradorFrase
