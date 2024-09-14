const DIV = document.querySelector('div')

DIV.addEventListener('mouseenter', entrei)
DIV.addEventListener('click', pasaro)
DIV.addEventListener('dblclick', henry_cor_de_rosa)
DIV.addEventListener('mouseout', saiu)

function entrei(){
    DIV.innerText = 'entrou'
}
function saiu (){
    DIV.innerText = 'saiu'
    DIV.style.background = '#008000'
}

function pasaro(){
    DIV.innerText = 'pasaro'
    DIV.style.background = 'orange'
}

function henry_cor_de_rosa(){
    DIV.innerText = 'henry cor de rosa'
    DIV.style.background = 'pink'
}