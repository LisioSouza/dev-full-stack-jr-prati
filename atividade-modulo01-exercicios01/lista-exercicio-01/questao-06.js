// Questão 06: Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.
// Condição para formar um triângulo: a soma de dois quaisquer lados deve ser sempre maior que o terceiro lado.
// Triângulo Isósceles: Dois lados iguais.
// Triângulo Escaleno: Todos os lados diferentes.
// Triângulo Equilatero: Todos os lados iguais.

const prompt = require("prompt-sync")()

let ladoA = parseFloat(prompt("Digite a medida do lado A: "))
let ladoB = parseFloat(prompt("Digite a medida do lado B: "))
let ladoC = parseFloat(prompt("Digite a medida do lado C: "))

if (ladoA > 0 && ladoB > 0 && ladoC > 0){
    if ((ladoA + ladoB) > ladoC && (ladoA + ladoC) > ladoB && (ladoB + ladoC) > ladoA){
        if (ladoA === ladoB && ladoB === ladoC) {
            console.log(`As medidas apresentadas ${ladoA}, ${ladoB} e ${ladoC}, formam um triângulo EQUILÁTERO.\n`)
        }
        else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
            console.log(`As medidas apresentadas ${ladoA}, ${ladoB} e ${ladoC}, formam um triângulo ESCALENO.\n`)
        }
        else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
            console.log(`As medidas apresentadas ${ladoA}, ${ladoB} e ${ladoC}, formam um triângulo ISÓSCELES.\n`)
        }
    } else {
        console.log("As medidas apresentadas não formam um triângulo.")
        }
} else {
    console.log("Erro: As medidas informadas devem ser números positivos")
    }
