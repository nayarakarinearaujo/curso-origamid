
//! Transversing

const lista = document.querySelector('.animais-lista');

lista.parentElement; //Retorna o pai
lista.parentElement.parentElement; // Retorna o pai do pai
lista.previousElementSibling; //Retorna elemento acima
lista.nextElementSibling; //Retorna elemento abaixo

lista.children; //Retorna HTMLCollection com os filhos
lista.children[0]; //Retorna o primeiro filho
lista.children[--lista.children.length]; // Retorna o último filho

lista.querySelectorAll('li'); // Retorna todas as lis
lista.querySelector('li:last-child'); //Retorna ultimo filho