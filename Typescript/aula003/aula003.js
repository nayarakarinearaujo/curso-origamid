"use strict";
//? Exercício
//* 1 Transforme a função com TS
// function normalizarTexto(texto: string) {
//   return texto.trim().toLowerCase();
// }
// console.log(normalizarTexto(" DesigN "));
//* 2
// Seleciona o input e força o TypeScript a entender que é um HTMLInputElement
const input = document.querySelector("input");
// Recupera o valor salvo no localStorage
// const total: string | null= localStorage.getItem("total");
// if (input && total) {
//   input.value = total; // string
//   calcularGanho(Number(input.value)); // converte para número
// }
// Função que calcula o ganho
function calcularGanho(value) {
    const p = document.querySelector("p");
    if (p) {
        const ganho = value + 100 - value * 0.2;
        p.innerText = `Ganho total: R$ ${ganho.toFixed(2)}`;
    }
}
// Função chamada quando o valor do input muda
function totalMudou() {
    if (!input)
        return;
    const value = Number(input.value);
    localStorage.setItem("total", input.value);
    calcularGanho(value);
}
// Adiciona evento de keyup ao input
input === null || input === void 0 ? void 0 : input.addEventListener("keyup", totalMudou);
