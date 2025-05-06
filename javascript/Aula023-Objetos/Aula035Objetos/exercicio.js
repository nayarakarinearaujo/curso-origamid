// Crie uma função que verifique corretamente o tipo de dado

function verificarTipoDeDado(dado) {
  return Object.prototype.toString.call(dado);
}

console.log(verificarTipoDeDado([]))
console.log(verificarTipoDeDado(123))
console.log(verificarTipoDeDado(""))
console.log(verificarTipoDeDado(true))

// Crie um objeto quadrado com a propriedade lados e torne ela imutável
const quadrado = {
  lados: 4,
};

Object.freeze(quadrado);

quadrado.lados = 6;
console.log(quadrado);

// Previna qualquer mudança no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: "#333",
};

Object.freeze(configuracao);

configuracao.width = 900;
console.log(configuracao);

// Liste o nome de todas as propriedades do protótipo de String e Array

//Atring
console.log(Object.getOwnPropertyNames(String.prototype));

//Array
console.log(Object.getOwnPropertyNames(Array.prototype));
