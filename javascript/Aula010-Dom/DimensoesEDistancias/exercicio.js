//! Exercícios

//* Verifique a distância da primeira imagem, em relação ao topo da página

const primeiraImagem = document.querySelector('img');
const imagemTop = primeiraImagem.offsetTop;
console.log(imagemTop)

//* Retorne a soma da largura de todas as imagens


//* Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo
//* (48px/48px de acrodo com o google)


//* Se o browser for menor que 720px, adicione a classe menu-mobile ao menu

const menu = window.matchMedia('(max-width: 720px)').matches;

if (menu) {
    menu.classList.add('menu-mobile');
} else {
    console.log('Tela maior que 720px');
}