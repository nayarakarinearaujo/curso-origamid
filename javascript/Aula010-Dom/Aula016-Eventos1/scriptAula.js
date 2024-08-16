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
