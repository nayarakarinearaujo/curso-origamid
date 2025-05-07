// *Crie uma função que verifique corretamente o tipo de dado

function tipoDeDado(dado) {
  return Object.prototype.toString.call(dado)
}

console.log(tipoDeDado("Banana")); // String
console.log(tipoDeDado(5)); // Number

// const carro = {
//   marca: "Ford",
//   ano: 2018,
// };

// const frutas = ["Banana", "Uva"];

// console.log(Object.prototype.toString.call(carro)); // [object Object]
// console.log(Object.prototype.toString.call(frutas)); // [object Array]

// *Crie um objeto quadrado com a propriedade lados e torne ela imutável

const quadrado = {};
Object.defineProperty(quadrado, "lados", {
  value: 4,
  writable: false, // Não permite que a propriedade seja alterada
  enumerable: true, // Permite que a propriedade seja enumerada
  configurable: false, // Não permite que a propriedade seja configurada
});

console.log(quadrado.lados); // 4
quadrado.lados = 5; // Tenta alterar a propriedade
console.log(quadrado.lados); // 4, pois a propriedade não pode ser alterada
console.log(quadrado); // 4, pois a propriedade não pode ser alterada

// *Previna qualquer mudança no objeto abaixo

const configuracao = {
  width: 800,
  height: 600,
  background: "#333",
};

Object.freeze(configuracao); // Congela o objeto, tornando suas propriedades imutáveis
configuracao.width = 1000; // Tenta alterar a propriedade
console.log(configuracao.width); // 800, pois a propriedade não pode ser alterada

// *Liste o nome de todas as propriedades do protótipo de String e Array

console.log(Object.getOwnPropertyNames(String.prototype)); // Lista todas as propriedades do protótipo de String
console.log(Object.getOwnPropertyNames(Array.prototype)); // Lista todas as propriedades do protótipo de Array
