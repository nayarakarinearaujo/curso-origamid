//* forEach()
// [].forEach(callback(itemAtual, index, array)) a
// função de callback é executada para cada item da array. Ela possui
// três argumentos, itemAtual (valor do item da array), index (index do
// valor na array) e array (array original).

// const carros = ["Ford", "Fiat", "Honda"];
// carros.map((item, index, array) => {
//   console.log(item, index, array);
// });

//fazendo conta de cada item do array com map
// const numeros = [2, 4, 6, 8, 10, 12, 14];
// const numerosX3 = numeros.map((n) => n * 3);
// console.log(numerosX3); // [6, 12, 18, 24, 30, 36, 42];

//? Interagir com array de objetos
// Map pode ser muito útil para interagirmos com uma array de
// objetos, onde desejamos isolar um valor único de cada objeto.

// const aulas = [
//   {
//     nome: "HTML 1",
//     min: 15,
//   },
//   {
//     nome: "HTML 2",
//     min: 10,
//   },
//   {
//     nome: "CSS 1",
//     min: 20,
//   },
//   {
//     nome: "JS 1",
//     min: 25,
//   },
// ];

// const tempoAulas = aulas.map((aula) => aula.min);
// console.log(tempoAulas);

// const nomeAulas = function(aula) {
//     return aula.nome
// }

// const arraysNomeAulas = aulas.map(nomeAulas);
// console.log(arraysNomeAulas);

// * [].reduce()
// [].reduce(callback(acumulador, valorAtual, index,
// array), valorInicial)
// executa a função de callback para cada item da Array. Um valor
// especial existe nessa função de callback, ele é chamado de
// acumulador , mas é na verdade apenas o retorno da iteração
// anterior.

// const aulas1 = [10, 25, 30];

// const total1 = aulas1.reduce((acumulador, atual, index, array) => {
//  return acumulador + atual;
// }, 0);

// total1; // 65

// const total2 = aulas1.reduce((acc, cur) => acc + cur, 100);
// total2; // 16

// console.log()

// Maior Valor com [].reduce()
// const numeros = [10, 25, 60, 5, 35, 10];
// const maiorValor = numeros.reduce((anterior, atual) => {
//  return anterior < atual ? atual : anterior;
// });
// console.log(maiorValor); // 60

const aulas = [
      {
        nome: "HTML 1",
        min: 15,
      },
      {
        nome: "HTML 2",
        min: 10,
      },
      {
        nome: "CSS 1",
        min: 20,
      },
      {
        nome: "JS 1",
        min: 25,
      },
    ];

    const listaAulas = aulas.reduce((acumulador, atual, index) => {
        acumulador[index] = atual.nome;
        return acumulador;
    },{})

    console.log(listaAulas)