
//!Exercício

//*Adicione a classe ativo a todos os items do menu

const itensMenu = document.querySelector('.menu a');

itensMenu.forEach(itemt => {
    itemt.classList.add('ativo');
    
});


//* Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

itensMenu.forEach(itemt => {
    itemt.classList.remove('ativo');
    
});

itensMenu[0].classList.add('ativo');


//* Verifique se as imagens possuem o atributo alt

const imgs = document.querySelectorAll('imgs');

imgs.forEach((img) => {
    const possuiAtributo = img.hasAttribute('alt');
    console.log(possuiAtributo);
})

//* Modifique o href do link externo no menu

const link =  document.querySelector('a[href^="http"]');

link.setAttribute('href', 'https://www.google.com/')
console.log(link);
