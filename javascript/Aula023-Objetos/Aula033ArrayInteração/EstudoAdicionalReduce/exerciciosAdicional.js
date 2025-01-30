/*
?Some todos os valores de um array
?Dado um array de números, use o reduce para calcular a soma de todos os valores.
*/
// const numeros = [1, 2, 3, 4, 5];
// const total = numeros.reduce((acumulador, atual) => {
//   return acumulador + atual;
// });
// console.log(`A soma dos números do array é: ${total}`);
// console.log("-----------------------------------------");

/*
?Contar ocorrências de um valor em um array
?Dado um array de palavras, use reduce para contar quantas vezes uma palavra específica aparece no array.
*/
const palavras = ["maçã", "banana", "maçã", "laranja", "maçã"];
const palavraProcurada = "maçã";

const quantasVezes = palavras.reduce((acumulador, atual) => {
 return atual === palavraProcurada ? acumulador + 1 : acumulador
}, 0);

console.log(quantasVezes);
console.log("-----------------------------------------");

/*
1- acumulador= 0 / atual= maça (já entra no acumulador 1);
2- acumulador= maça(1) / atual= banana
3- acumulador= maça(1)/ atual = maça
4- acumulador= maça(2) / atual= laranja
5- acumulador= maça(2) / atual= maça
6- acumulador= maça(3) / finalizado
*/

/*
?Encontrar o valor máximo em um array
?Dado um array de números, use reduce para encontrar o valor máximo.
*/
// const numeros1 = [3, 5, 7, 2, 8, 1];
// const maiorValor = numeros1.reduce((anterior, atual) => Math.max(anterior, atual), 0);
// console.log(`Número maior do array é: ${maiorValor}`);
// console.log("-----------------------------------------");

/*
1- anterior= 0 / atual= 3
2- anterior= 3 / atual= 5
3- anterior= 5 / atual= 7
4- anterior= 7 / atual= 2
5- anterior= 7 / atual= 8
6- anterior= 8 / atual= 1
7- numero maior 8
*/

/*
?Agrupar elementos por categoria
?Dado um array de objetos, onde cada objeto tem uma propriedade categoria e valor, 
?use reduce para agrupar os objetos por categoria e somar os valores de cada categoria.
 */
// const produtos = [
//   { categoria: "fruta", nome: "maçã", valor: 2 },
//   { categoria: "fruta", nome: "banana", valor: 1 },
//   { categoria: "legume", nome: "cenoura", valor: 3 },
//   { categoria: "legume", nome: "beterraba", valor: 4 },
// ];

// const agrupamento = produtos.reduce((anterior, atual) => {
//   //verificar se a categoria existe
//   if (!anterior[atual.categoria]) {
//     anterior[atual.categoria] = 0;
//   }
//   //somar o valor do item a categoria correspondente
//   anterior[atual.categoria] += atual.valor;

//   return anterior;
// }, {});

// console.log("Agrupamento");
// console.log(agrupamento);
// console.log("-----------------------------------------");


/*
?Criar um novo array com o dobro dos valores
?Dado um array de números, use reduce para criar um novo array onde cada valor é o dobro do valor correspondente no array original.
*/
// const numeros2 = [1, 2, 3, 4, 5];
// const double = numeros2.reduce((anterior, atual) => {
//   anterior.push(atual * 2);

//   return anterior;
// }, []);
// console.log("O dobro dos números do array é: ");
// console.log(double);
// console.log("-----------------------------------------");

/*
?Flattening de um array de arrays
?Dado um array que contém arrays de números, use reduce para "achatar" esse array, 
?ou seja, transformar o array de arrays em um único array com todos os números.
*/
// const arrays = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// const unicoArray = arrays.reduce((anterior, atual) => {
//     //Primeiro espalhando o array original
//     //Segundo espalhando o array construido apartir do original
//   return [...anterior, ...atual];
// }, []);

// console.log("Unico array");
// console.log(unicoArray);
// console.log("---------------------------------------");
/*
?Contar o número de caracteres de todas as palavras
?Dado um array de palavras, use reduce para contar o número total de caracteres em todas as palavras do array.
*/
// const palavras1 = ["maçã", "banana", "laranja"];
// const numeroCaracteres = palavras1.reduce((acumulador, atual) => {
    ////Ele retorna o acumulador + o tamanho do atual
//   return acumulador + atual.length;
// }, 0);

// console.log("Total de caracteres");
// console.log(numeroCaracteres);

/*
1- anterior= 0 / atual= mça tem 4 + 0
2- anterior= 4 / atual= banana tem 6 + 4 
3- anterior= 10 / atual= laranja tem 7 + 10
4- Final 17
*/

/*
?Filtrar elementos com base em uma condição
?Dado um array de números, use reduce para filtrar todos os números que são maiores que 10 e retornar um novo array com esses valores.
*/
// const numeros3 = [4, 12, 7, 15, 2, 18];
// const maiorQueDez = numeros3.reduce((acumulador, atual) => {
//   if (atual > 10) {
//     acumulador.push(atual);
//   }
//   return acumulador;
// }, []);

// console.log("Maiores números da array:");
// console.log(maiorQueDez);
// console.log("-----------------------------------------");
