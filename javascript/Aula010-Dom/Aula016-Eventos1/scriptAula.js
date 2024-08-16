// ! Eventos 1

//* Callback
/* 
* Função para clicar na imagem e ter um evento, nesse caso sempre boa prática 
* identificar a function
*/
const img = document.querySelector('img');

function callback() {
    console.log('clicou');
}

img.addEventListener('click', callback);

//* Event
//O primeiro parâmetro do callback é referente ao evento que ocorreu

const animaisLista = document.querySelector('.animais-lista');

function executarCallback(event) {
    const currentTarget = event.currentTarget;
    const target = event.target;
    const type = event.type;
    const path = event.path;
    console.log(currentTarget, target, type, path);
}

animaisLista.addEventListener('click', executarCallback);


//* event.preventDefault()
/* Previne o comportamento padrão do evento no browser. No caso de um link
externo, por exemplo, irá previnir que o link seja ativado.
 */

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event) {
    event.preventDefault();
    console.log('Clicou');
}

linkExterno.addEventListener('click', handleLinkExterno);

//* this
/* A palavra chave this é uma palavra especial de JavaScript, que pode fazer
referência a diferentes objetos dependendo do contexto. No caso de eventos,
ela fará referência ao elemento em que o addEventListener foi adicionado.
*/

function callback(event) {
    console.log(this); // Retorna a imagem
    console.log(this.getAttribute('src'));
}

img.addEventListener('click', callback);


//* Diferentes eventos
/* Existem diversos eventos como click, scroll, resize, keydown, keyup, mouseenter
e mais. Eventos podem ser adicionados a diferentes elementos, como o window
e o documento também.
 */

/*
? click: Quando um elemento é clicado.
? scroll: Quando a página ou um elemento é rolado.
? resize: Quando a janela do navegador é redimensionada.
? keydown: Quando uma tecla é pressionada.
? keyup: Quando uma tecla é liberada.
? mouseenter: Quando o mouse entra em um elemento.
 */

const h1 = document.querySelector('h1');

function handleEvent(event) {
    console.log(event.type, event);
}

h1.addEventListener('click', handleEvent);
h1.addEventListener('mouseenter', handleEvent);
h1.addEventListener('mousemove', handleEvent);

window.addEventListener('scroll', handleEvent);
window.addEventListener('resize', handleEvent);
window.addEventListener('keyup', handleEvent);

//* keyboadr
/* Você pode adicionar atalhos para facilitar a navegação no seu site, através
de eventos do keyboard
 */