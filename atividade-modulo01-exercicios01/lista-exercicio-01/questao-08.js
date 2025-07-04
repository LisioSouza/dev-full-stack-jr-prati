// Questão 08: Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

const prompt = require("prompt-sync")()

let valor01 = Number(prompt("Escreva o primeiro valor: "))
let valor02 = Number(prompt("Escreva o segundo valor: "))

if (valor01 > valor02) {
    console.log(valor02, valor01)
} else {
    console.log(valor01, valor02)
}