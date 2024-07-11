
//! Classes e Atributos

const menu = document.querySelector('.menu');

//Adicionar classe
menu.classList.add('ativo');

//Remover classe
menu.classList.remove('azul');

//Caso tiver removido ela vai adicionar e vice e versa
menu.classList.toggle('azul');

if (menu.classList.contains('azul')) {
    menu.classList.add('possui-azul');
} else {
    menu.classList.add('nao-possui-azul')
};

//Remove e altera a classe
console.log(menu.className);

menu.className =+ 'vermelho';


//! Atributtes

const animais = document.querySelector('.animais');

console.log(animais.attributes);

//! Métodos getAttribute e setAttribute

//* Get
const img = document.querySelector('img');

//Passando por meio de variável

const srcImg = img.getAttribute('alt');
console.log(srcImg);

//* Set

//Ele vai adicionar classe
img.setAttribute('alt', 'É uma raposa');