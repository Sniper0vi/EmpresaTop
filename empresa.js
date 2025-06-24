const fs = require("fs");
const promptSync = require("prompt-sync")();
const path = require("path");

let nomes = [];
let endereços = [];
let distanciaCasas = [];
let valoresTotais = [];
let i = 0;

do {
    do {
        nome = promptSync("Qual o seu nome: ");
        if (!isNaN(nome)) {
            console.log("Seu nome é um numero? REPITA!!!");
        }

        endereço = promptSync("Qual o seu endereço: ");
        if (!isNaN(endereço)) {
            console.log("Voce mora em um livro? REPITA!!!");
        }

        distancia = promptSync("Qual a distancia da sua casa em Km: ");
        if (isNaN(distancia)) {
            console.log("O seu portugues esta muito distante de voce. REPITA!!!");
        }

        urgente = promptSync("A sua compra é urgente? ");
        if (!isNaN(urgente)) {
            console.log("Sim ou nao, se decide");
        }

    } while (!isNaN(nome) || !isNaN(endereço) || isNaN(distancia) || !isNaN(urgente))

    nomes[i] = nome;
    endereços[i] = endereço;
    distanciaCasas[i] = parseFloat(distancia);

    if (urgente === "SIM" || urgente === "sim" || urgente === "Sim") {
        valoresTotais[i] = (distanciaCasas[i] * 1.5) * 1.2;
    } else {
        valoresTotais[i] = distanciaCasas[i] * 1.5;
    }

    i++;

    parar = promptSync("Deseja continuar continuar? (s/n) ");
    parar = parar.toLowerCase();
} while (parar === "s");

let cont = "";
for (let j = 0; j < nomes.length; j++) {
    cont += `Cliente: ${nomes[j]}\tEndereço: ${endereços[j]}\tDistancia: ${distanciaCasas[j]}Km\tValor frete: R$${valoresTotais[j].toFixed(2)}\n`;
}

fs.appendFileSync("dadosCliente.txt", cont, "utf-8");

console.log("\nConteudo do arquivo:");
console.log(fs.readFileSync("dadosCliente.txt", "utf-8"));