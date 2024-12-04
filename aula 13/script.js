const quadrado = document.querySelector


let contagem = 1

quadrado.addEventListener('click', expandir)
quadrado.addEventListener('contextmenu', (evento)=>{
    evento.preventDefault()
    quadrado.classList.remove('expandir')
})

function expandir(){
    quadrado.classList.add('expandir')
    contagem++
    quadrado.textContent = contagem
    if (contagem >=10){
        quadrado.classList.remove('expandir')
        contagem = 0
    }