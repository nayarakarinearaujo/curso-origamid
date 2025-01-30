//* Aula extra Youtube: Reduce

//? Retornar a soma de um array de números

// const numeros = [0, 4, 2, 4, 7];

// const total = numeros.reduce((acumulador, numeroAtual) => {
//   return acumulador + numeroAtual;
// }, 0);
// console.log(total);

//* Carrinho de compras

//? Retornar o total a pagar
const itens = [
  { description: "pen", quantity: 1, price: 3 },
  { description: "rule", quantity: 2, price: 5 },
  { description: "erase", quantity: 2, price: 6 },
];

const total = itens.reduce((acumulador, item) => {
  return acumulador + item.price * item.quantity;
}, 0);

console.log(total);

/*
primeira interação: acumulado vale 0 + (1 * 3) = 3
segunda interação: acumulador vale 3 + (2 * 5) = 10
terceira interação: acumulador vale 13 + (2 * 6) = 12
ultima interação: acumulador vale 13 + 12 = 25
*/

//* Contador de nomes iniciais
//Array de texto

const nomes = ["Daniel", "Maria", "Marta", "Juca", "João", "Jéssica"];

const namesCount = nomes.reduce((count, nomeAtual) => {
  const firstLetter = nomeAtual[0].toLowerCase(); // Pega a primeira letra e converte para minúscula

  if (count[firstLetter]) {
    count[firstLetter]++; // Incrementa se a letra já existir
  } else {
    count[firstLetter] = 1; // Inicializa com 1 se não existir
  }

  return count; // Retorna o acumulador atualizado
}, {});

console.log(namesCount);

//* Apartir de um array de objetos pessoas, retornar um objeto com um contador de pessoa por idade
//Array de objetos

const pessoas = [
  { nome: "Daniel", idade: 28 },
  { nome: "Maria", idade: 29 },
  { nome: "Marta", idade: 29 },
];

const porIdade = pessoas.reduce((pessoasIdade, pessoaAtual) => {
  pessoasIdade[pessoaAtual.idade] = pessoasIdade[pessoaAtual.idade] || [];
  pessoasIdade[pessoaAtual.idade].push(pessoaAtual.nome);

  return pessoasIdade;
}, {});

console.log(porIdade);

//* Obter o dobro dos numeros positivos

const numbers = [-10, 0, 2, 4];

//Uma forma de fazer
//const doublePositive = numbers.filter((n) => n > 0).map((n) => n * 2);

const doublePositive = numbers.reduce((arrAcumulador, currentNumber) => {
  if (currentNumber > 0) {
    arrAcumulador.push(currentNumber * 2);
  }
  return arrAcumulador;
}, []);

console.log(doublePositive);
