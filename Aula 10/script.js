const questoes_quiz= [
    {
        questao: 'quem é o protagonista de undertale?',
        a: 'flowey',
        b:'sans',
        c:'chara',
        d:'frisk',
        correta:'d'

    },
    {
        questao: 'qual jogo a seguir é exclusivo da nintendo',
        a: 'zelda ocarina of time',
        b:'sonic forces',
        c:'hollow knight',
        d:'minecraft',
        correta:'a'

    },
    {
        questao: 'qual a empresa de jogos mais antiga',
        a: 'sega',
        b:'nintendo',
        c:'atari',
        d:'steel wool',
        correta:'b'

    },

]

const quiz_titulo = document.querySelector ('h1')
const alternativa_a = document.querySelector('#texto_a')
const alternativa_b = document.querySelector('#texto_b')
const alternativa_c = document.querySelector('#texto_c')
const alternativa_d = document.querySelector('#texto_d')
const botao = document.querySelector('button')
const quiz_container = document.querySelector('.container')
const alternativas = document.querySelectorAll('.resposta')
let acertos = 0
let questao_aual = 0

window.onload = carregar_quiz()
botao.addEventListener('click', verificar)

function carregar_quiz(){
    const questao = questoes_quiz[questao_aual]
    alternativas.forEach((alternativa) => {
        alternativa.checked = false
        document.querySelector(`label[for=${alternativa.id}]`).classList.remove('correta', 'incorreta')
    })
    quiz_titulo.innerText = questao.questao
    alternativa_a.innerText = questao.a
    alternativa_b.innerText = questao.b
    alternativa_c.innerText = questao.c
    alternativa_d.innerText = questao.d
    botao.innerText = 'verificar'
    verificou = false 
}

function verificar(){
    if (verificou == false) {
        verificar_resposta()
    }
    else{
        proxima_pergunta()
    }
}

function verificar_resposta() {
 const resposta_jogador = pegar_resposta()
 const resposta_correta = questoes_quiz[questao_aual].correta

 alternativas.forEach ((alternativa) => {
    const label = document.querySelector(`label[for=${alternativa.id}]`)
    if (alternativa.id == resposta_correta){
        label.classList.add('correta')
    }else{
        label.classList.add('incorreta')
    }
 })

 if (resposta_correta == resposta_jogador){
    acertos++
 }
 botao.innerText = 'proxima'
 verificou = true
}

function pegar_resposta(){
    let respostas = undefined

    alternativas.forEach((alternativa)=>{
        if (alternativa.checked == true){
            respostas = alternativa.id
        }
    })
    return respostas
}

function proxima_pergunta() {
    questao_aual++
    maximo_perguntas = questoes_quiz.length
    if (questao_aual < maximo_perguntas){
          carregar_quiz()
    }
    else{
        quiz_container.innerHTML =`<h1 id="questao"> Voce acertou ${acertos} de ${maximo_perguntas} perguntas! </h1>`
    }
}

