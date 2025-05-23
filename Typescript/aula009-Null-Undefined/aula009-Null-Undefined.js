"use strict";
//* Null - Undefined
var _a, _b;
//? null => significa ausência de valor intencional.
//? undefined => significa que a variável foi declarada, mas não tem valor atribuído.
// Exemplo prático:
// Tenta selecionar um botão no HTML
const button1 = document.querySelector("button");
// Busca uma informação no localStorage
const config = localStorage.getItem("config");
//* Verifica se o botão existe antes de executar o método .click()
// O ?. é chamado de operador de encadeamento opcional (optional chaining)
// ✅ Funciona como uma proteção para evitar erro de:
// "Cannot read properties of null" ou "undefined"
button1 === null || button1 === void 0 ? void 0 : button1.click();
// Criando um objeto SEM a propriedade 'nome'
const livro = {};
// Criando um objeto COM a propriedade 'nome'
const jogo = {
    nome: "Ragnarok",
};
// 🔍 Aqui é usado o operador ?. (encadeamento opcional) para verificar:
// Se 'nome' existir, executa .toLowerCase() (transforma em minúsculo)
// Se 'nome' não existir, retorna undefined sem dar erro
console.log((_a = jogo.nome) === null || _a === void 0 ? void 0 : _a.toLowerCase());
// Saída: "ragnarok" (porque o nome existe)
console.log((_b = livro.nome) === null || _b === void 0 ? void 0 : _b.toLowerCase());
// Saída: undefined (porque o nome não existe no objeto livro)
// Sem erro! Se não usar o ?. daria erro ao tentar executar .toLowerCase() em undefined
