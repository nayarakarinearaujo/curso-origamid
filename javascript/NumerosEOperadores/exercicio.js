//Qual resultado da seguinte expressão ?
var total = 10 + 5 * 2 /2 + 20;

//Crie duas expressões que retornem NaN
var expressao1 = 'Teste' / 2;

//Assim ele concatena
var expressao2 = 'Teste' + 2;

console.log(expressao1, expressao2);


//Somar a string '200' com o número 50 e retornar 250
var soma = '200' + 50; //Assim ele vai concatenar e não somar

var soma = +'200' + 50; // Assim ele vai somar

//Incremente o número 5 e retorne o seu valor incrementado
var x = 5;
console.log(++x)

//Outra de forma de fazer seria:
var x = 5;
++x;
console.log(x)


//Como dividir o peso por 2 ?
var numero = +'80'/2;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'

console.log(peso);