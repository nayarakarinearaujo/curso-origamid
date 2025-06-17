"use strict";
/*
! Exercício
1 - Selecione os elementos com a classe link
2 - Crie uma função que deve ser executada para cada elemento
3 - Modificar através da função o estilo da color e border
*/
const links = document.querySelectorAll(".link");
function ativarElemento(elemento) {
    elemento.style.color = "red";
    elemento.style.border = "2px solid red";
}
function ativarButton(elemento) {
    elemento.style.color = "red";
}
links.forEach((link) => {
    if (link instanceof HTMLElement)
        ativarElemento(link);
});
