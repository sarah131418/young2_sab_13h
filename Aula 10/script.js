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
        questao: '',
        a: '',
        b:'',
        c:'',
        d:'',
        correta:''

    },

]

const quiz_titulo = document.querySelector ('h1')
const alternativa_a = document.querySelector('#texto_a')
const alternativa_b = document.querySelector('#texto_b')
const alternativa_c = document.querySelector('#texto_c')
const alternativa_d = document.querySelector('#texto_d')
const botao = document.querySelector('button')
const quiz_container = document