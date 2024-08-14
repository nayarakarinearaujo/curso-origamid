
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

//Concatenar com a string menu.ClasseName
menu.className =+ 'vermelho';


//! Atributtes

const animais = document.querySelector('.animais');

console.log(animais.attributes);

//! Métodos getAttribute e setAttribute

//* Get para pegar
//Selecionar a primeira imagem
const img = document.querySelector('img');

//Passando por meio de variável

const srcImg = img.getAttribute('alt');
console.log(srcImg);

//* Set para setar
//Ele vai adicionar classe
img.setAttribute('alt', 'É uma raposa');

//Verificar se possui algum atributo
const possuiAlt = img.hasAttribute('alt');
console.log(possuiAlt);

//! Read Only vs Writable
/*Propriedades que não permitem a mudança de seus valores, essas são considerados
Read Onlky, ou seja, apenas leitura
*/

//? EX:
animais.className; //String com o nome das classes
animais.className = 'azul'; //Substitui completamente a string
animais.className += 'vermelho'; //adicionar vermelho á string

animais.attributes = 'class="ativo"'; //não funciona, read-only

