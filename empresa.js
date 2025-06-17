const fs = require("fs");
const promptSync = require("prompt-sync")();
const path = require("path");

let nome;
let endereço;
let distancia;
let urgente;
let valorTotal;

let nomeArquivo = "Informaçoes-do-Cliente.txt";

do {
    console.log("Se voce colocar alguma coisa indevida o questionario sera RESETADO!")
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
    urgente = promptSync("A sua compra é urgente? Sim/Nao ")
    if (!isNaN(urgente)) {
        console.log("Sim ou nao, se decide")
    }


} while (!isNaN(nome) || isNaN(endereço) || isNaN(distancia) || !isNaN(urgente))




if ((urgente == "SIM" || "sim" || "Sim")) {
    urgente = urgente.toUpperCase()
    valorTotal = (distancia * 1.5) * 1.2
    // colocar aqui para mandar para o documento.txt
} else {
    valorTotal = (distancia * 1.5)
    // colocar aqui para mandar para o documento.txt
}
console.log(valorTotal)
