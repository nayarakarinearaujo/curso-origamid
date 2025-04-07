// * function

// function somar(n1, n2) {
//   return n1 + n2;
// }

// console.log(somar(2, 3));

// //Métodos

// function darOi(nome, idade) {
//   console.log("Oi para você " + nome + idade);
// }

// darOi.call(null, "André ", 28);

// //Function.call

// function descricaoCarro(velocidade) {
//   console.log(this);
//   console.log(this.marca + " " + this.ano + velocidade);
// }

// descricaoCarro.call({ marca: "Honda", ano: 2015 }, 100);


// const carros = ["Ford", "Fiat", "VW"];
// const frutas = ["Banana", "Uva", "Pêra"];

// carros.forEach.call(carros, (item) => {
//   console.log(item);
// });


function Dom(seletor) {
  this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function(classe) {
  console.log(this);
  this.element.classList.add(classe);
}

const li = {
  element: document.querySelector('li')
}

Dom.prototype.ativo.call(li, 'ativar');


const ul = new Dom('ul');

ul.ativo.call(li, 'ativo');
ul.ativo('ativar');
