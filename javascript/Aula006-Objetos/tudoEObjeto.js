
//! Tudo é um objeto

var nome = 'Nayara';

nome.length;
nome.charAt(1);
nome.replace('ya', 'ia');
nome;

//Contar os caractere
console.log(nome.length);

//Deixar a propriedade minusculo
var nomeMinusculo = nome.toLocaleLowerCase();

console.log(nomeMinusculo);

//Interagindo com DOM

var btn = document.querySelector('btn');

btn.classList.add('azul') // adiciona a classer azul
btn
