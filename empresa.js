const fs = require("fs");
const promptSync = require("prompt-sync")();
const path = require("path");

let nomes = [];
let endereços = [];
let distanciaCasas = [];
let valoresTotais = [];
let nome;
let endereço;
let distancia;
let urgente;
let valorTotal;
let quantidade;

do {
    quantidade = promptSync("Quantas pessoas vão calcular o envio?: ");

    if (isNaN(quantidade) || quantidade <= 0) {
        console.log("Valor inválido! Digite um número maior que zero.");
    }

} while (isNaN(quantidade) || quantidade <= 0);

for (let i = 0; i < quantidade; i++) {

    do {
        nome = promptSync("Qual o seu nome: ")
        if (!isNaN(nome)) {
            console.log("Seu nome é um numero? REPITA!!!");
        }

        endereço = promptSync("Qual o numero da sua casa: ");
        if (isNaN(endereço)) {
            console.log("Voce mora em um livro? REPITA!!!");
        }

        distancia = promptSync("Qual a distancia da sua casa em Km: ");
        if (isNaN(distancia)) {
            console.log("O seu portugues esta muito distante de voce. REPITA!!!");
        }
        urgente = promptSync("A sua compra é urgente? ")
        if (!isNaN(urgente)) {
            console.log("Sim ou nao, se decide")
        }

        let i;

        nomes[i] = nome
        endereços[i] = endereço
        distanciaCasas[i] = distancia
        console.log(nomes[i], nome);

    } while (!isNaN(nome) || isNaN(endereço) || isNaN(distancia) || !isNaN(urgente))



    if ((urgente == "SIM" || "sim" || "Sim")) {
        urgente = urgente.toUpperCase()
        valorTotal = (distancia * 1.5) * 1.2
        // colocar aqui para mandar para o documento.txt
    } else {
        valorTotal = (distancia * 1.5)
        // colocar aqui para mandar para o documento.txt
    }
}

    let cont = ""; 
    for (let i = 0; i < nomes.length; i++) {
        cont += ` Cliente: ${nomes[i]}\t Endereço: ${endereços[i]}\t Distancia em Km: ${distanciaCasas[i]}\t Valor frete${valorTotal[i]}\n`
    }
    fs.writeFileSync("dadosCliente.txt", cont, "utf-8");

    console.log("\nConteudo do arquivo:");
    let conteudo = fs.readFileSync("dadosCliente.txt", "utf-8");
    console.log(conteudo);

