"use strict";
//*Any
/*
ANY => indica que o dado pode conter qualquer tipo de dado do typeScript.
Devemos evitar ao máximo o uso do any, pois o mesmo remove todas as seguranças
e conveniências que o TS fornece.
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Função que recebe um parâmetro `texto` do tipo any (qualquer coisa)
function normalizar(texto) {
    // Aqui a gente assume que `texto` tem métodos de string
    return texto.trim().toLowerCase();
}
// Chamada da função com uma string, funciona perfeitamente
console.log(normalizar(" DeSign "));
// Saída: "design"
// Chamada da função com um número — problema!
// A função espera que `texto` tenha métodos de string (trim e toLowerCase)
// Mas número não tem esses métodos, então vai dar erro em tempo de execução
console.log(normalizar(200));
//! TypeScript NÃO AVISA erro na compilação porque usamos `any`
//! O erro só aparece ao rodar o código (runtime error): 
//! "texto.trim is not a function"
//* Em alguns caso o uso de any faz sentido, como no caso da função json() onde qualquer tipo de dado pode ser retornado, 
// dependendo da API que acessarmos.
// Porém, para manter a segurança, depois é recomendável você **tipar** esses dados explicitamente,
// criando interfaces ou tipos específicos para o que espera da API.
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://api.https://api.origamid.dev/json/cursos.json.com/dados');
        const data = yield response.json(); // aqui o uso do any é compreensível
        // Depois você pode transformar 'data' para o tipo esperado, como 'Cursos[]' ou outro.
    });
}
