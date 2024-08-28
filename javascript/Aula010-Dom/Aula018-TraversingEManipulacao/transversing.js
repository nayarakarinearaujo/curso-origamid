
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


//! Manipulando elemento

const contato = document.querySelector('.contato');
const animais = document.querySelector('.animais');
const titulo = contato.querySelector('.titulo');

animais.appendChild(titulo); // nesse caso o titulo de contato vai ficar abaixo dos animais

contato.insertBefore(lista, titulo);//insere a lista antes de titulo
contato.removeChild(titulo); // remove titulo de contato
contato.replaceChild(lista, titulo); // substitui titulo por lista