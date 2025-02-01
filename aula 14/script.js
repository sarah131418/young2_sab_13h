const poke_name = document.querySelector('.poke_name')
const poke_number = document.querySelector('.poke_number')
const poke_img = document.querySelector ('.poke_img')
const container_input = document.querySelector ('.container_input')
const input = document.querySelector('input')
const prev_btn = document.querySelector('.pre_btn')
const next_btn = document.querySelector('.next_btn')
const URL =  'https://pokeapi.co/api/v2/pokemon/'

let id_pokemon = 1

const buscar_pokemon = async(pokemon) => {
    let resposta = await fetch(`${URL}${pokemon}`)
    if (resposta.status === 200){
        const info = resposta.json()
        return info
    }
}

const mostrar_pokemon = async(pokemon) =>{
    const json_pokemon = await buscar_pokemon(pokemon)
    poke_number.innerHTML = json_pokemon.id
    poke_name.innerHTML = json_pokemon.name
    poke_img.src = json_pokemon['sprites']['other']['showdown']['front_default']
    input.value = ''
    id_pokemon = json_pokemon.id
}

container_input.addEventListener('submit', (event) =>{
    event.preventDefault()
    let pokemon = input.value.toLowerCase()
    mostrar_pokemon(pokemon)
})

prev_btn.addEventListener('click', () =>{
    if(id_pokemon > 1){
        id_pokemon -= 1
        mostrar_pokemon(id_pokemon)
    }
})

next_btn.addEventListener('click', () =>{
    if(id_pokemon < 920){
        id_pokemon += 1
        mostrar_pokemon(id_pokemon)
    }
})

window.onload = mostrar_pokemon(id_pokemon)
