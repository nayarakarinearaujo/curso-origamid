
//! Eventos 2

//* forEach e eventos
/* O método addEventListener é adicionado á um único elemento, 
então é necessário um loop entre elementos de uma lista, para adicionarmos
á cada um deles.
 */

const imgs = document.querySelector('img');

function imgSrc(event) {
    const src = event.currentTarget.getAttribute('src');
    console.log(src);
}

imgs.forEach((img) => {
    img.addEventListener('click', imgSrc);
});