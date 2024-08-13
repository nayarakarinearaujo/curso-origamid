
//! Exercício

//* Retorne no console todas as imagens do site
const todasImg = document.querySelectorAll('img');
console.log(todasImg);

//* Retorne no console apenas as imagens que começam com a palavra imagem
//Sempre tem que colocar o caminho certo de referência
const palavraImg = document.querySelectorAll('img[src^="img/imagem"')
console.log(palavraImg)

//* Selecione todos os links internos (onde href começa com #)
const linksInternos = document.querySelectorAll('a[href^="#]');
console.log(linksInternos);

//* Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('.animais-descricao h2');
    console.log(primeiroH2)

//* Selecione o último p do site
const todosP = document.querySelectorAll('p');

const ultimoP = todosP[todosP.length -1];

//? imprime o próprio elemento <p> no console.
console.log(ultimoP);

//?  exibe apenas o conteúdo interno (texto e HTML) do elemento, sem as tags de abertura e fechamento.
console.log(ultimoP.innerHTML);

//? Retorna a string HTML completa que representa o elemento, incluindo as tags de abertura e fechamento, e o conteúdo interno.
console.log(ultimoP.outerHTML)