
//! DOM
//É uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.

//* window e Document
//São os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades.

window.alert('Isso é um alerta');
alert('Isso é um alerta'); // Funciona também

//Retornar url
console.log(href);

const h1Selecionado = document.querySelector('h1'); //Seleciona o primeiro h1 do cumento HTML


document.body; //Retorna o body

//* Node
//Toda a Tag HTML é representada pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto NOde.

const titulo = document.querySelector('h1');

titulo.innerText; // Retorna o texto
titulo.classList; //Retorna as classes
titulo.id; //Retorna o id;
titulo.offsetHeight; //Retorna a altura do elemendo;

titulo.addEventListener('click', callback);
//Ativa a função callback ao click no titulo

//Ex:
function test() {
    console.log('Clicou em ', h1Selecionado.innerText);
}

h1Selecionado.addEventListener('click', test);