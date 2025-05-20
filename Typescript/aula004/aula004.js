"use strict";
const frase = "Front End";
const preco2 = 500; // tipo literal, só aceita o valor 500
const condi = preco2 > 100; // true
console.log(typeof frase);
console.log(typeof preco2);
if (typeof frase === "string") {
    console.log("É uma string");
}
else {
    console.log("Não é uma string");
}
console.log("---------------------------------------");
const frase1 = new String("Front End");
const frase2 = String("Front End");
const frase3 = "Front End";
console.log(typeof frase1);
console.log(typeof frase2);
console.log(typeof frase3.toLowerCase);
