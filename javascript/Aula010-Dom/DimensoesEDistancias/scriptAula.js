
//! Dimensões e Distâncias - 1

const listaAnimais = document.querySelector('.animais-lista');

// Obtém a altura total do conteúdo da listaAnimais, incluindo a área não visível por rolagem (scroll)
const height = listaAnimais.scrollHeight;

// Obtém a distância entre o topo da listaAnimais e o topo do documento (ou seja, a posição vertical do elemento no layout da página)
const animaisTop = listaAnimais.offsetTop;

console.log(animaisTop)

const primeiroh2 = document.querySelector('h2');

// Obtém a distância entre a borda esquerda do primeiro <h2> e a borda esquerda do elemento pai (ou seja, a posição horizontal do elemento no layout da página)
const h2Left = primeiroh2.offsetLeft

console.log(h2Left);

//* getBoundingClientRect()
//Método que retorna um objeto com valores de width, height, distâncias do elemento e mais

const rect = primeiroh2.getBoundingClientRect();
console.log(rect);

//* window

console.log(

    window.innerWidth, //width da janela
    window.outerWidth, //soma dev tools também
    window.innerHeight, //heigth da janela
    window.outerHeight // soma a barra de endereço
    
)

//* matchMedia();
//Utilize um media-queri como no css para verificar a largura do browser

const small = window.matchMedia('(max-width: 600px)').matches;
if (small) {
    console.log('Tela menor que 600px');
} else {
    console.log('Tela maior que 600px');
}

