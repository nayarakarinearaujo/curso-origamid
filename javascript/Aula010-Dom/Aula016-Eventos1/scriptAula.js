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
//O primeiro parâmetro do callback é referente ao evento que aocorreu

