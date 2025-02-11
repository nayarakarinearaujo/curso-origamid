// 1️⃣ Soma dos Valores
// Dado um array de números, retorne a soma total de todos os valores.

const numeros = [10, 5, 8, 20, 15];

const soma = numeros.reduce((acumulador, atual) => acumulador + atual)
console.log(soma);


// 2️⃣ Contagem de Palavras
// Dado um array de palavras, crie um objeto que conte quantas vezes cada palavra aparece no array.

const palavras = ["gato", "cachorro", "gato", "passaro", "gato", "cachorro"];
const quantidadePalavras = palavras.reduce((acumulador, atual) => {
    acumulador[atual] = (acumulador[atual] || 0) + 1;
    return acumulador
}, {});

console.log(quantidadePalavras);


// 3️⃣ Filtrando Números Pares
// Dado um array de números, retorne um novo array contendo apenas os números pares.

const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = numeros2.reduce((acumulador, atual) => {
    // Verifica se o número 'atual' é par
    if (atual % 2 === 0) {
        // Se for par, adiciona o número 'atual' ao acumulador
        acumulador.push(atual);
    }
    return acumulador
},[])

console.log(pares)



// 4️⃣ Produto Mais Barato
// Dado um array de produtos, encontre o produto com o menor preço.

const produtos = [
  { nome: "Mouse", preco: "R$ 50,00" },
  { nome: "Teclado", preco: "R$ 100,00" },
  { nome: "Monitor", preco: "R$ 750,00" }
];

const menorPreco = produtos.reduce((maisBarato, produtoAtual) => {
    const valorAtual = Number(produtoAtual.preco.replace("R$", "").replace(",", "."));
    return valorAtual > maisBarato ? produtoAtual : maisBarato
});

console.log(menorPreco)



// 5️⃣ Criando um Resumo
// Dado um array de objetos representando pedidos de um restaurante, 
// crie um novo array contendo apenas os nomes dos pratos.

const pedidos = [
  { cliente: "Ana", prato: "Pizza" },
  { cliente: "Bruno", prato: "Hambúrguer" },
  { cliente: "Carla", prato: "Salada" }
];

const nomesDosPratos = pedidos.reduce((acumulador, atual) => {
    acumulador.push( atual.prato)
    return acumulador 
},[])
console.log(nomesDosPratos);
