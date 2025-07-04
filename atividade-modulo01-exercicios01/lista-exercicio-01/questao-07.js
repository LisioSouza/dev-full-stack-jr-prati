// Questão 07: As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

const prompt = require("prompt-sync")()

let quantidade = parseInt(prompt("Digite a quantidade de maçãs: "))
let valorCompra = 0

if (quantidade < 12) {
    valorCompra = quantidade * 0.30
    console.log(`Você comprou ${quantidade} maçã(s) e o valor total de sua compra é R$ ${valorCompra.toFixed(2)}.`)
} else {
    valorCompra = quantidade * 0.25
    console.log(`Você comprou ${quantidade} maçãs e o valor total de sua compra é R$ ${valorCompra.toFixed(2)}.`)
}
