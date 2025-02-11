//* 1. Somando Preços dos Produtos
// Dado um array de objetos com produtos e preços no formato "R$ xx,xx", remova o "R$" e some os preços para obter o total.

const produtos = [
  { nome: "Arroz", preco: "R$ 15,90" },
  { nome: "Feijão", preco: "R$ 8,50" },
  { nome: "Macarrão", preco: "R$ 5,25" },
];

//? Desafio: Retorne o valor total dos produtos como número.

const valorTotal = produtos.reduce((acumulador, item) => {
  const valorLimpo = +item.preco.replace("R$", "").replace(",", ".");

  return acumulador + valorLimpo;
}, 0);
console.log(valorTotal);




//* 2. Filtrando Produtos Caros
// Filtre os produtos cujo preço seja maior que 10.00 e retorne um novo array apenas com esses produtos.

const produtos2 = [
  { nome: "Leite", preco: "R$ 6,80" },
  { nome: "Queijo", preco: "R$ 20,50" },
  { nome: "Café", preco: "R$ 14,90" },
  { nome: "Pão", preco: "R$ 5,30" },
];
// //? Desafio: O array resultante deve conter apenas os produtos com preço acima de 10 reais.

const maiorQueDez = produtos2.filter((item) => {
    const valorLimpo = Number(item.preco.replace("R$", "").replace(",", "."));
    return valorLimpo > 10
    
});
console.log(maiorQueDez);



//* 3. Criando um Novo Array de Strings
// Transforme um array de objetos em um array de strings no formato:
// ["Produto: Nome - Preço: xx,xx"]

const produtos3 = [
  { nome: "Notebook", preco: "R$ 3500,00" },
  { nome: "Mouse", preco: "R$ 150,00" },
  { nome: "Teclado", preco: "R$ 250,00" },
];
//? Desafio: Retorne um array com frases formatadas.

const produtosString = produtos3.map((produto) => `${produto.nome} - ${produto.preco}`)

console.log(produtosString)



//* 4. Contando a Quantidade de Itens
// Dado um array de compras, conte quantas vezes cada item aparece.

const compras = ["Banana", "Maçã", "Banana", "Laranja", "Maçã", "Banana"];
//Desafio: Retorne um objeto com a contagem de cada item, como: { Banana: 3, Maçã: 2, Laranja: 1 }


const frutas = compras.reduce((acumulador, nomeAtual) => {
    acumulador[nomeAtual] = (acumulador[nomeAtual] || 0) + 1;
    return acumulador;
  }, {});
  
  console.log(frutas);



//* 5. Encontrando o Produto Mais Caro
// Dado um array de produtos, encontre o item mais caro.

const produtos4 = [
  { nome: "Celular", preco: "R$ 2000,00" },
  { nome: "Tablet", preco: "R$ 3500,00" },
  { nome: "Smartwatch", preco: "R$ 1200,00" },
];
//Desafio: Retorne o objeto do produto com o maior preço.

const valorMaior = produtos4.reduce((maisCaro, produtoAtual) => {
  const valorAtual = Number(
    produtoAtual.preco.replace("R$", "").replace(",", ".")
  );
  const valorMaisCaro = Number(
    maisCaro.preco.replace("R$", "").replace(",", ".")
  );

  return valorAtual > valorMaisCaro ? produtoAtual : maisCaro;
});

console.log(valorMaior);
