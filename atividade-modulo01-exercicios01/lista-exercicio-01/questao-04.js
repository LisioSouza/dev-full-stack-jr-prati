// Questão 04: Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require("prompt-sync")()

console.log(`
Escolha sua pizza: \n
1 - Pizza P (R$ 19,00)
2 - Pizza M (R$ 29,00)
3 - Pizza G (R$ 39,00)\n`)

let pedido = parseInt(prompt("Digite o número da sua escolha: "))

switch(pedido) {
    case 1:
        console.log("Pedido: Pizza P - valor R$ 19,00\n")
        break
    case 2:
        console.log("Pedido: Pizza M - valor R$ 29,00\n")
        break
    case 3:
        console.log("Pedido: Pizza G - valor R$ 39,00\n")
        break
    default:
        console.log("Opção inválida, escolha 1, 2 ou 3!\n")
         
}