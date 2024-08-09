

const animais = document.getElementById('animais');
console.log(animais);

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection);

//! Usando querySellector

//* querySelectorAll retorna todos os elementos correspondentes em uma NodeList;
//* querySelector retorna apenas o primeiro elemento correspondente ou null se nenhum elemento for encontrado.

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const linksInternos = document.querySelector('[href^="#]');
console.log(linksInternos)

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg);


const gridSectionHTML = document.getElementsByClassName('grid-section');

const gridSectionNode = document.querySelectorAll('.grid-section');

console.log(gridSectionHTML[0]);
console.log(gridSectionNode[0]);

gridSection.forEach(function(item, index){
    console.log(item);
});
