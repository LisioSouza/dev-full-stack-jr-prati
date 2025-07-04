// Questão 13: Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

const prompt = require("prompt-sync")()
let soma = 0
let contador = 0
let media = 0
let numero = parseFloat(prompt("Digite um número decimal ou 0 para sair: "))

while ( numero !== 0) {
    if (!isNaN(numero)) {
        soma += numero
        contador++  
    } else {
        console.log("Digite um número válido!")
    }

    numero = parseFloat(prompt("Digite um número decimal ou 0 para sair: "))
   
}

if (contador > 0) {
    media = soma/contador
    console.log(`A média dos números digitados é ${media.toFixed(2)}`)
} else {
    console.log("Nenhum número válido foi digitado.")
}