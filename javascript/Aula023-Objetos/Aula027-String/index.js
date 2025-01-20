//! String 

const comida = 'Pizza';
const agua = new String('Água');


//* string.length
//Propriedade com o total de caracteres da string

console.log(agua.length);

const frase = 'A melhor comida';
console.log(frase[frase.length - 2]);


//* string.charat(n)
//Retorna o caracter de acordo com o index de (n)

console.log(frase.charAt[frase.length - 2]); //Ele dará undefined passando como array

console.log(frase.charAt(frase.length - 1)); //Ele retorna o item correto


//* string.concat(string2, string3,...)
//Concatena as strings e retorna o resultado

const frase1 = ' A melhor linguagem é ';
const linguagem = 'JavaScript';

//Primeira forma de fazer a concatenação
const fraseFinal = frase1 + linguagem;
console.log("Primeira forma de fazer concatenação:");
console.log(fraseFinal);

//Segunda forma de fazer a concatenação
const fraseCompleta = frase1.concat(linguagem, '!!');
console.log("Segunda forma de fazer concatenação:");
console.log(fraseCompleta);


//* string.includes(search, position)
//Procura pela string exata dentro de outra string. A procura é case sensitive

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

console.log(listaFrutas.includes(fruta)); //true
console.log(fruta.includes(listaFrutas)); //false


//* string.endWith(search) e string.startWith(search)
//procura termina com ou começa com, ele é case sensitive

console.log("Procura pela string exata");
console.log(fruta.endsWith('nana')); // termina com
console.log(fruta.startsWith('Ba')); // começa com
console.log(fruta.startsWith('na')); // começa com