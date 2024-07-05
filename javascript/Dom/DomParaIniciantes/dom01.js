
//! DOM
//É uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.

//* window e Document
//São os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades.

window.alert('Isso é um alerta');
alert('Isso é um alerta'); // Funciona também

const h1Selecionado = document.querySelector('h1'); //Seleciona o primeiro h1 do cumento HTML


document.body; //Retorna o body