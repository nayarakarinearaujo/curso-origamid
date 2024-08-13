
//! Exercício 02

//* Mostre no console cada parágrafo do site

//? 1° Forma de fazer
//querySelectorAll('p') retorna uma NodeList estática.

const paragrafos = document.querySelectorAll('p');
console.log(paragrafos);

paragrafos.forEach(item => {
    console.log(item);
});

//? 2° Forma de fazer
//getElementsByClassName('p') retorna uma HTMLCollection dinâmica.

const paragrafo = document.getElementsByClassName('p');
console.log(paragrafo);


//!--------------------------------------------

//*Mostre o texto dos parágrafos no console
//Para mostrar os textos usar inner.Text

paragrafos.forEach(item => {
    console.log(item.innerText);
});


//!--------------------------------------------

//*Como corrigir os erros abaixo:
//Erros eram os parenteses
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
    console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
    console.log(i++);
});

imgs.forEach(() => i++);
console.log(i);