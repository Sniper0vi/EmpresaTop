

const promptSync = require("prompt-sync")();


let nome;
let endereço;
let distancia;
let entrega = {Urgente, Normal, urgente, normal};
let nomeArquivo = "Informaçoes-do-Cliente.txt";

do{
    console.log("repita")
    nome = promptSync("Qual o seu nome: ")
}while (isNaN(nome))