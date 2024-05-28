console.log("Olá!!!")

// Typof

//var time;
// console.log(typeof time); ele retorna que tipo o time é, no caso: undefined.
//Acontece porque não foi definida a variável.
// var time = 'Santos';
// console.log(typeof time); //Agora ele vai retornar que é String pois foi definida a variável com nome do time.

// var simbolo = Symbol();
// console.log(typeof simbolo);

// var idade = 31;
// console.log(idade);
// console.log(typeof idade); ele retorna que tipo a idade é, no caso: number

// var nome = 'Nayara';
// console.log(typeof nome); ele retorna que tipo o nome é, no caso: string

// var sobrenome = 'Karine';
// console.log(typeof sobrenome); ele retorna que tipo o sobrenome é, no caso: string


//String

//concatenar na variável:
var nome = 'Nayara';
var sobrenome = 'Karine';
var nomeCompleto = nome + ' ' + sobrenome ; //Foi colocado espaço com ' ' 
console.log(nomeCompleto);

//Concatenar no console:
var idade = 31;
console.log('Tem ' + idade + ' anos de idade.')


//Concatenar com números:
var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols.';
console.log(frase);


//Nesse caso ele vai apenas concatenar os números
var ano = '2018'; // Quando está entre áspas ele retorna String
var mes = 8;
console.log(ano + mes);


//Nesse caso ele vai somar os números
var ano = 2018; //Sem as áspas ele é number
var mes = 8;
console.log(ano + mes);

//Explicando sobre as áspas
var melhor = 'teste';
var frase1 = 'Esse é o /"melhor/" jogo'; //Ele não reconhece as áspas duplas, então ela aparece no console.
console.log(frase1);

//Tamplate String é feito com cráse
var gols = 1000;
var frase2 = `Romário fez ${gols} gols`;

console.log(frase2);