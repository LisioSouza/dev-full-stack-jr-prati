// Questão 12: Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

const prompt = require("prompt-sync")()

let numero = parseInt(prompt("Escreva um número de 1 a 10: "))
 if (isNaN(numero)){
    console.log("Digite um número válido!")
 } else {
    console.log(`Tabuada do número ${numero}`)
    for (let i = 1; i <=10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`)
    }
 } 
