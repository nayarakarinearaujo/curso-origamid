

const animais = document.getElementById('animais');
console.log(animais);

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection);

//! Usando querySellector

//* querySelectorAll retorna todos os elementos correspondentes em uma NodeList;
//* querySelector retorna apenas o primeiro elemento correspondente ou null se nenhum elemento for encontrado.

//* Seleciona a primeira li
const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

//* Seleciona o os links internos que começa com #
const linksInternos = document.querySelector('[href^="#]');
console.log(linksInternos)

//* Seleciona todas as imagens do documento
const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg);

//* Seleciona todos os elementos com a classe grid-section e os imprime no console como uma coleção HTML (HTMLCollection).
const gridSectionHTML = document.getElementsByClassName('grid-section');

//*  Seleciona todos os elementos que possuem a classe grid-section e os retorna como uma NodeList.
const gridSectionNode = document.querySelectorAll('.grid-section');

//* Acessa o primeiro elemento da HTMLCollection e o imprime no console.
console.log(gridSectionHTML[0]);

//*  Acessa o primeiro elemento da NodeList e o imprime no console.
console.log(gridSectionNode[0]);


gridSectionNode.forEach(function(item, index){
    console.log(item);
});

const arrayGrid = Array.from(gridSectionHTML);

arrayGrid.forEach(function(item){
    console.log(item);
})
