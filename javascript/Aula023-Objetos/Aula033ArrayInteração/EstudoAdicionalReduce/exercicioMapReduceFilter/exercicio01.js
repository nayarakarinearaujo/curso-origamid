/* 1
?Exercício 1: Usando map() - Multiplicar os números
Dado um array de números, crie um novo array onde cada número seja multiplicado por 3.

Resultado esperado:
[12, 15, 18, 21, 24]
*/

//* Resolvido
// const numeros = [4, 5, 6, 7, 8];
// const numerosMultiplicado = numeros.map((n) => n * 3);
// console.log(numerosMultiplicado);

/* 2
?Exercício 2: Usando filter() - Filtrar números negativos
Dado um array de números, crie um novo array contendo apenas os números positivos.

Resultado esperado:
[5, 3, 0]
*/

//* Resolvido
// const numeros = [-2, 5, -8, 3, 0, -1];

// const numerosPositivos = numeros.filter((acumulador) => acumulador > 0);
// console.log(numerosPositivos);

/* 3
?Exercício 3: Usando reduce() - Somar todos os números
Dado um array de números, use o método reduce() para somar todos os números.

Resultado esperado:
28
*/

//* Resolvido
// const numeros = [2, 3, 5, 8, 10];
// const somaNumeros = numeros.reduce((acumulador, atual) => {
//   return acumulador + atual;
// }, 0);
// console.log(somaNumeros);

/* 4
?Exercício 4: Usando map() e filter() - Converter para maiúsculas e filtrar
Dado um array de strings, crie um novo array que contém apenas as palavras que começam com a letra "a", 
e todas as palavras devem ser convertidas para maiúsculas.

Resultado esperado:
["ABACAXI", "AMIGO", "ALEGRIA"]
*/

//* Resolvido
// const palavras = ["abacaxi", "banana", "amigo", "uva", "alegria"];
// const palavrasNovas = palavras
//   .filter((palavra) => palavra[0] === "a")
//   .map((palavra) => palavra.toUpperCase());

// console.log(palavrasNovas);

/* 5 
?Exercício 5: Usando reduce() - Média de idades
Dado um array de objetos com nomes e idades, use reduce() para calcular a média das idades.

Resultado esperado:
30 (A média é calculada como (25 + 30 + 35) / 3)
*/

// *Resolvido;
// const pessoas = [
//   { nome: "Ana", idade: 25 },
//   { nome: "Carlos", idade: 30 },
//   { nome: "Maria", idade: 35 },
// ];

// const somaIdades = pessoas.reduce((acumulador, atual) => {
//   return acumulador + atual.idade;
// }, 0);
// const mediaIdade = somaIdades / pessoas.length;
// console.log(mediaIdade);

/* 6
?Exercício 6: Usando map() e reduce() - Transformar e somar
Dado um array de preços de produtos, crie um novo array com o valor de cada produto com 10% de desconto 
e depois use reduce() para somar o total dos produtos com desconto.

Resultado esperado:
1350 (A soma dos preços com 10% de desconto seria 90 + 180 + 270 + 360 + 450)
*/

// *Resolvido
// const precos = [100, 200, 300, 400, 500];

// const desconto = precos
//   .map((item) => item * 0.9)
//   .reduce((acumulador, atual) => acumulador + atual);
// console.log(desconto);

/* 7
?Exercício 7: Usando filter() e map() - Filtrar e transformar
Dado um array de números, use filter() para filtrar os números pares e depois use map() 
para elevar cada número ao quadrado.

Resultado esperado:
[4, 16, 36, 64] (Os números pares são 2, 4, 6, 8 e seus quadrados são 4, 16, 36, 64)
*/

//* Resolvido
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

// const paresAoQuadrado = numeros
//   .filter((num) => num % 2 === 0)
//     //Duas formas de fazer
//   .map((num) => Math.pow(num, 2));
//   //.map((num) => num ** 2);
// console.log(paresAoQuadrado);

/* 8
?Exercício 8: Usando map(), filter() e reduce() - Filtrar, transformar e somar
Dado um array de objetos representando transações com valores negativos e positivos, 
filtre apenas as transações positivas, depois multiplique os valores por 2 e por fim, 
calcule a soma total de todas as transações modificadas.


Resultado esperado:
1500 (As transações positivas são 200, 50, 500. Após multiplicar por 2: 400 + 100 + 1000 = 1500)
*/

//* Resolvido
// const transacoes = [
//   { valor: -100 },
//   { valor: 200 },
//   { valor: 50 },
//   { valor: -30 },
//   { valor: 500 },
// ];

// const transacoesPositivas = transacoes
//   .filter((num) => num.valor > 0)
//   .map((num) => num.valor * 2)
//   .reduce((acumulador, atual) => {
//     return acumulador + atual
//   },0)
// console.log(transacoesPositivas);
