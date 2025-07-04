// Questão 02: Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.

const prompt = require('prompt-sync')()

let idade = parseInt(prompt("Digite sua idade: "))

if (idade >= 0 && idade < 12) {
    console.log("Você é uma criança!")
} else if (idade >= 12 && idade <= 17) {
    console.log("Você é um(a) adolescente!")
} else if (idade > 17 && idade < 60) {
    console.log("Você é um(a) adulto(a)!")
} else if (idade >= 60) {
    console.log("Você é um(a) idoso(a)!")
} else {
    console.log("Digite uma idade válida!")
}

