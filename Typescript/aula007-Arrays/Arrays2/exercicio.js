"use strict";
//? EXERCÍCIOS
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// 🔗 Função assíncrona para buscar os cursos da API
function fetchCursos() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://api.origamid.dev/json/cursos.json");
        // Converte a resposta para JSON e tipa como array de Cursos
        const data = yield response.json();
        // Chama a função que renderiza os cursos
        showCursos(data);
    });
}
// Executa a função que faz o fetch dos cursos
fetchCursos();
// 🖥️ Função responsável por exibir os dados dos cursos no HTML
// ✅ Como a API retorna um array de objetos, usamos o método forEach para percorrer
function showCursos(cursos) {
    cursos.forEach((curso) => {
        //Definindo estilos do titulo
        let color;
        if (curso.nivel === "iniciante") {
            color = "blue";
        }
        else if (curso.nivel === "avancado") {
            color = "red";
        }
        document.body.innerHTML += `
      <div>
        <h2 style="color: ${color}">${curso.nome}</h2>
        <p>Horas de curso: ${curso.horas}</p>
        <p>Número de Aulas: ${curso.aulas}</p>
        <p>Curso é gratuito: ${curso.gratuito ? "Gratuito" : "Pago"}</p>
        <p>Nível: ${curso.nivel}</p>
        <p>Tags: ${curso.tags.join(", ")}</p>
        <p>Aulas: ${curso.idAulas.join(" | ")}</p>

      </div>
    `;
    });
}
