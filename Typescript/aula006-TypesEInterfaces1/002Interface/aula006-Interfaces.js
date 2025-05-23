"use strict";
//* Interface e Type no TypeScript
// A diferença é mais de semântica e contexto de uso:
// - 'type' é mais usado para tipos primitivos, união de tipos, tuplas, etc.
// - 'interface' é mais usada para estruturar objetos e pode ser extendida (herança)
// Função que recebe um dado do tipo 'InterfaceProduto' e exibe na página
function preencherDadosInterface(dados) {
    document.body.innerHTML += `
    <div>
        <h2>${dados.nome}</h2> <!-- Exibe o nome do produto -->
        <p>R$ ${dados.preco}</p> <!-- Exibe o preço do produto -->
        <p>Inclui teclado: ${dados.teclado ? "sim" : "não"}</p> <!-- Verifica se inclui teclado e exibe 'sim' ou 'não' -->
    </div>
    `;
}
// Criando um produto utilizando a Interface
const computador1 = {
    nome: "Computador",
    preco: 2500,
    teclado: true,
};
// Chamando a função para preencher os dados na página HTML
preencherDadosInterface(computador1);
