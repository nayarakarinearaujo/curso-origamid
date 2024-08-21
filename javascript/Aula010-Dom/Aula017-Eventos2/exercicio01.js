
//! Exercício

/* 
* Quando o usuário clicar nos links internos do site, adicione a classe ativo,
* ao item clicado e remova dos demais itens caso possuam a mesma. Previna o 
* comportamento padrão desses links
 */

const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
    event.preventDefault();
    linksInternos.forEach((link) => {
        link.classList.remove('ativo');
    })

    this.classList.add('ativo');
}

linksInternos.forEach((link) => {
    link.addEventListener('click', handleLink);
})


/* 
* Selecione todos os elementos do site começando apartir do body ao clique
* mostre quais elementos estão sendo clicados
 */

const todosElementos = document.querySelectorAll('body *');

console.log(todosElementos)




/* 
* Utilizando o código anterior, ao invés de mostrar no console, remova o elemento
* que está sendo clicado, o método remove() remove um elemento
 */




/* 
* Se o usuário clicar na tecla (t), aumente todo texto do site
 */