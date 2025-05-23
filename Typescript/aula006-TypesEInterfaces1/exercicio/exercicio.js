"use strict";
//* Exercício
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchProduct() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://api.origamid.dev/json/notebook.json");
        const data = yield response.json();
        console.log(data);
        showProduct(data);
    });
}
fetchProduct();
function showProduct(data) {
    document.body.innerHTML += `
    <div>
        <h2>${data.nome}</h2>
        <p>Preço: ${data.preco.toFixed(2)}</p>
        <p>Descrição: ${data.descricao}</p>
        <p>Garantia de: ${data.garantia} meses</p>
        <p>Possui seguro: ${data.seguroAcidentes ? "Sim" : "Não"}</p>

            <div>
                <h3>Empresa Montadora: ${data.empresaMontadora.nome}</h3>
            </div>
            <div>
                <h3>Empresa Fabricante: ${data.empresaFabricante.nome}</h3>
            </div>
     </div>
    `;
}
