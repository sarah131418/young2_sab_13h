let jogador = {
    nome: "skull",
    vida: 120,
    ataque: 20,
    defesa: 15
}

let monstro = {
    nome: "ghoul",
    vida: 140,
    ataque: 18,
    defesa: 12
}

let dano_sofrido_jogador = monstro.ataque - jogador.defesa

jogador.vida -= dano_sofrido_jogador
console.log(jogador.vida)

let dano_sofrido_monstro = jogador.ataque - monstro.defesa

monstro.vida -= dano_sofrido_monstro
console.log(monstro.vida)
let contador = 0

while (jogador.vida > 0){
    jogador.vida -= dano_sofrido_jogador
    console.log(`o monstro deu ${dano_sofrido_jogador} de dano`)
    monstro.vida -= dano_sofrido_monstro
    console.log(`o jogador deu ${dano_sofrido_monstro} de dano`)

    console.log(`vida monstro: ${monstro.vida}`)
    console.log(`vida jogador: ${jogador.vida}`)

    if (monstro.vida <= 0){
        console.log(" parabéns, o monstro foi derrotado :D")
        break
    }else if(jogador.vida <= 0){
        console.log("perdeu playboy:(")
    }
}