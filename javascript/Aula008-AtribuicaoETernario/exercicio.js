
//! Exercício

//Some 500 ao valor do scroll abaixo, atribuindo o novo valor a scroll

var scroll = 1000;

scroll += 500;
console.log(scroll);

//Atribua true para a variável darCredito, caso o cliente possua carro e casa, e false caso contrário.

var possuiCarro = true;
var possuiCasa = false;
var darCredito;

darCredito = (possuiCarro && possuiCasa) ? 'Terá acesso ao crédito' : 'Não terá acesso ao crédito';

console.log(darCredito);