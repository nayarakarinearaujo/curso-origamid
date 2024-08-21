
//! outerHTML, innerHTML e innerText
//* propriedade que retornam uma string contendo o html ou texto. É possível atribuir
//* um novo valor as mesmas.

const menu = document.querySelector('.menu');

menu.outerHTML; //Retorna todo o html do elemento
menu.innerHTML; //Retorna html inteiro
menu.innerText; // Retorna texto sem tags

menu.innerText = '<p>Texto<p>'; //; A tag vai como texto
menu.innerHTML = '<p>Texto<p>'; // A tag é renderizada

