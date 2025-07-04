// Questão 01: Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

const prompt = require('prompt-sync')()

console.log("-".repeat(150))
console.log("1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.")

let num = parseInt(prompt('Digite um número: '))

if (num % 2 === 0) {
    console.log(`O número ${num} é PAR!`)
} else {
    console.log(`O número ${num} é ÍMPAR!`)
}
