// Cria um novo objeto utilizando o construtor Object
const pessoa = new Object({
  nome: "André",
});

console.log(pessoa); // Exibe: { nome: 'André' }

// Define um objeto base com métodos e propriedades
const carro = {
  rodas: 4, // propriedade comum a todos os carros

  // Método de inicialização que define a marca
  init(valor) {
    this.marca = valor;
    return this; // retorna o próprio objeto para permitir encadeamento
  },

  // Método que simula a aceleração do carro
  acelerar() {
    return this.marca + " acelerou";
  },

  // Método que simula a buzina do carro
  buzinar() {
    return this.marca + " buzinou";
  },
};

// Cria um novo objeto herdando de 'carro' e inicializa com 'Honda'
const honda = Object.create(carro).init("Honda");
console.log(honda.acelerar()); // Exibe: Honda acelerou

// Cria outro objeto herdando de 'carro' e inicializa com 'Ferrari'
const ferrari = Object.create(carro).init("Ferrari");
console.log(ferrari.acelerar()); // Exibe: Ferrari acelerou

// ------------------------------
// CÓDIGOS COMENTADOS ABAIXO EXPLICADOS
// ------------------------------

//* Define um objeto com métodos genéricos para automóveis
// const funcaoAutomovel = {
//   acelerar() {
//     return 'acelerou';
//   },
//   buzinar() {
//     return 'buzinou';
//   },
// }

//* Define um objeto moto com propriedades próprias
// const moto = {
//   rodas: 2,
//   capacete: true,
// }

//* Copia os métodos de funcaoAutomovel para moto
// Object.assign(moto, funcaoAutomovel);

// console.log(moto)
//* Mostra moto com os métodos herdados

//* Define outro objeto moto
// const moto = {
//   capacete: true,
// }

// *Define propriedade com getter e setter
// Object.defineProperties(moto, {
//   rodas: {
//     enumerable: true, // permite que a propriedade apareça em loops
//     get() {
//       return 2; // retorna 2 quando a propriedade for acessada
//     },
//     set(valor) {
//       this._rodas = valor * 4 + ' Total Rodas'; // manipula valor recebido
//     }
//   }
// })

// console.log(moto)

//* Obtém a configuração da propriedade 'innerHeight' do objeto window
// const innerHeightConfig = Object.getOwnPropertyDescriptor(window, 'innerHeight');
// console.log(innerHeightConfig);

//* Lista todos os nomes de propriedades do protótipo de Array
// Object.getOwnPropertyNames(Array.prototype)

//* Exibe o protótipo da string vazia e o protótipo do Array
// console.log(Object.getPrototypeOf(''));
// console.log(Array.prototype);

//* Cria dois arrays com os mesmos valores
// const frutas1 = ['Banana', 'Pêra'];
// const frutas2 = ['Banana', 'Pêra'];

//* novaFruta aponta para o mesmo array que frutas1
// const novaFruta = frutas1;

//* altera o valor da primeira fruta
// novaFruta[0] = 'Uva';

// console.log(frutas1)
//* Mostra ['Uva', 'Pêra'] porque apontam para o mesmo array

//* Compara se frutas1 e novaFruta são o mesmo objeto na memória
// Object.is(frutas1, novaFruta)

//* Define um objeto carro2 com marca e ano
const carro2 = {
  marca: "Ford",
  ano: 2018,
};

//* Retorna as chaves (propriedades) do objeto
Object.keys(carro2);
// ['marca', 'ano']

//* Object.freeze torna o objeto imutável (não permite adicionar/remover/alterar)
Object.freeze(carro2);

//* Previne a adição de novas propriedades
Object.preventExtensions(carro2);

//* Previne a adição de novas propriedades, e impede que as atuais sejam deletadas
Object.seal(carro2);

//* Essas operações não surtiriam efeito após o freeze:
carro2.portas = 4; // Não adiciona
delete carro2.marca; // Não remove
carro2.marca = "Honda"; // Não altera

console.log(carro2);
//* Verifica se o objeto está congelado
console.log(Object.isFrozen(carro));

// ------------------------------
// Propriedades e métodos úteis
// ------------------------------

// Verifica se o objeto possui uma propriedade específica (sem considerar a cadeia de protótipos)
console.log(carro2.hasOwnProperty("marca")); // true

// Verifica se a propriedade é enumerável (ou seja, aparece em loops como for...in)
console.log(carro2.propertyIsEnumerable("marca")); // true

// Converte o array em uma string separada por vírgulas (o argumento passado é ignorado)
const frutas2 = ["Banana", "Pêra", "Melancia"];
console.log(frutas2.toString()); // "Banana,Pêra,Melancia"

// Converte a função em uma string mostrando sua estrutura (o argumento passado é ignorado)
const somar = function (a, b) {
  return a + b;
};
console.log(somar.toString());
// Saída: function(a, b) { return a + b; }

// Verifica exatamente qual o tipo do objeto (mais preciso que typeof)
console.log(Object.prototype.toString.call(frutas2));
// Saída: [object Array]
