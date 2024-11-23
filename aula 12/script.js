const garrafa= document.querySelector('img')
const lista_registro = document.querySelector('ul')
const som_beber_agua = document.querySelector('#som_beber')
const som_suco = document.querySelector ('#som_ja_bebi')

let tempo_intervalo
let alerta

som_beber_agua.loop = true

window.addEventListener('click', iniciar_alarme, {once: true})
window.addEventListener('click', parar_alarme)

function parar_alarme(){
    som_beber_agua.pause()
    // REINICIA O TEMPORIZADO DO SOM
    som_beber_agua.currentTime = 0
    som_suco.currentTime = 0
    som_suco.play()
    const tempo_agora = new Date()
    const horas = String(tempo_agora.getHours()).padStart(2, '0')
    const minutos = String(tempo_agora.getMinutes()).padStart(2, '0')
    const tempo= `${horas}: ${minutos}`
    const li_elemento =document.createElement('li')
    li_elemento.textContent = `Bebi suco as: ${tempo}`
    lista_registro.appendChild(li_elemento)

}

function dispara_alarme() {
    som_beber_agua.play()
}

function iniciar_alarme() {
    if (!tempo_intervalo) {
        tempo_intervalo = setInterval(dispara_alarme, 0.1 * 60 * 1000)
        alert('Alerta iniciado')
    }
}
