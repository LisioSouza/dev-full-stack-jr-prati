// Questão 05: Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

const prompt = require("prompt-sync")()

let peso = parseFloat(prompt("Digite seu peso em kg: "))
let altura = parseFloat(prompt("Digite sua altura em m: "))
let imc = (peso / altura**2)

if (imc < 18.5) {
    console.log(`Seu IMC é ${imc}. Você está com baixo peso.`)
} else if ( imc >= 18.5 && imc <= 24.9) {
    console.log(`Seu IMC é ${imc}. Você está com peso normal.`)
} else if (imc >= 25 && imc <= 29.9 ) {imc
    console.log(`Seu IMC é ${imc}. Você está com sobrepeso.`)
} else if (imc >= 30) {
    console.log(`Seu IMC é ${imc}. Você está com obesidade.`)
} else {
    console.log("Você inseriu um ou mais dados inválidos.")
}
