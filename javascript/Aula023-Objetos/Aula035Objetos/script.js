const pessoa = new Object({
  nome: "André",
});

console.log(pessoa);

// const carro = {
//   rodas: 4,
//   init(valor) {
//     this.marca = valor;
//     return this;
//   },
//   acelerar() {
//     return this.marca + ' acelerou';
//   },
//   buzinar() {
//     return this.marca + ' buzinou';
//   }
// }

// const honda = Object.create(carro).init('Honda');
// console.log(honda.acelerar());

// const ferrari = Object.create(carro).init('Ferrari');
// console.log(ferrari.acelerar());
// console.log(ferrari);

// const funcaoAutomovel = {
//   acelerar() {
//     return 'acelerou';
//   },
//   buzinar() {
//     return 'buzinou';
//   },
// }

//* Se a propiedade já existir ele vai substiuir o valor dela
//* Se não existir ele vai criar a propiedade
// const moto = {
//   rodas: 2,
//   capacete: true,
// }

// Object.assign(moto, funcaoAutomovel);

// console.log(moto)

// const moto = {
// }

//* Para tornar a propiedade não enumeravel
//* Object.defineProperty(moto, 'rodas', {
// Object.defineProperties(moto, {
//   rodas: {
//     enumerable: true,
//     get() {
//       return 2;
//     },
//     set(valor) {
//       this._rodas = valor * 4 + ' Total Rodas'
//     }
//   }
// })

// console.log(moto)

//* Object
const moto = {
  rodas: 2,
  capacete: true,
};

//* object.keys: vai retornar as chaves do objeto
//0: "rodas"
//1: "capacete"
//* .values: vai retornar os valores do objeto
//0:2
//1:true
//* .entries: vai retornar as chaves e os valores do objeto, em formato de array
//0: (2) ["rodas", 2]
//1: (2) ["capacete", true]

// const innerHeightConfig = Object.getOwnPropertyDescriptor(window, 'innerHeight');

// Object.getOwnPropertyNames(Array.prototype)

//Object.getPrototypeOf(Array.prototype) //Serve para mostrar o prototipo do objeto
//Object.getOwnPropertyNames(Array.prototype) //Serve para mostrar quais valores estão dentro do objeto
//Object.getOwnPropertyDescriptor(Array.prototype, 'map') //Serve para mostrar as propriedades do objeto
//Object.getOwnPropertyDescriptor(Array.prototype, 'map').get //Serve para mostrar o valor do objeto

console.log(Object.getPrototypeOf(""));
console.log(Array.prototype);

const frutas1 = ["Banana", "Pêra"];
const frutas2 = ["Banana", "Pêra"];

const novaFruta = frutas1;

novaFruta[0] = "Uva";

console.log(frutas1);

//serve para verificar se o objeto é o mesmo
console.log(frutas1 === frutas2);
//false

Object.is(frutas1, novaFruta);

const carro = {
  marca: "Ford",
  ano: 2018,
};

//* Object.freeze: serve para congelar o objeto, não permitindo que ele seja alterado
//* Object.seal: serve para selar o objeto, não permitindo que ele seja excluido ou adicionado novas propriedades
//* Object.preventExtensions: serve para prevenir que o objeto seja extendido, não permitindo que ele seja adicionado novas propriedades
//* Object.isExtensible: serve para verificar se o objeto é extensivel
//* Object.isSealed: serve para verificar se o objeto é selado
//* Object.isFrozen: serve para verificar se o objeto é congelado

//Object.freeze: serve para congelar o objeto, não permitindo que ele seja alterado
Object.freeze(carro);
carro.portas = 4;
delete carro.marca;

carro.marca = "Honda";

console.log(carro);

//serve para verificar se o objeto está congelado
console.log(Object.isFrozen(carro));

//? Propriedades e Métodos do Protótipo

const frutas = ['Banana', 'Uva'];
//serve para verificar se o objeto é um array
frutas.constructor; // Array
const frase = 'Isso é uma String';
frase.constructor; // String

//* {}.isPrototypeOf(valor) //Serve para verificar se o valor é um prototipo de outro valor
Array.prototype.isPrototypeOf(frutas); //true

//* {}.toString() //Serve para transformar o valor em string
//* {}.toLocaleString() //Serve para transformar o valor em string, de acordo com a localidade do usuario
//* {}.valueOf() //Serve para transformar o valor em valor primitivo
//* {}.hasOwnProperty() //Serve para verificar se o objeto tem a propriedade
//*toString.call(frutas) //Serve para transformar o valor em string, de acordo com a localidade do usuario

//Para verificar se é array
Array.isArray(frutas) //true
console.log(Array.isArray(frutas))


