"use strict";
//Union Types
var _a, _b;
let total1 = 200;
total1 = "4000";
function isNumber(value) {
    if (typeof value === "number") {
        return true;
    }
    else {
        return false;
    }
}
console.log(isNumber("200"));
//DOM
const button = document.querySelector("button");
// !Sem optional chaining:
if (button) {
    button.click();
}
// !Com optional chaining:
//Acessando a métodos:
button === null || button === void 0 ? void 0 : button.click();
//?Acesso a propriedades:
const title = (_a = document.querySelector("h1")) === null || _a === void 0 ? void 0 : _a.textContent;
//?Acesso a itens em objetos mais profundos:
const user = { profile: { name: "Nayara" } };
console.log((_b = user.profile) === null || _b === void 0 ? void 0 : _b.name); // "Nayara"
//console.log(user.address?.city); //erro
//* Evita erros como:
// TypeError: Cannot read properties of null
// quando o elemento ou objeto não existe.
