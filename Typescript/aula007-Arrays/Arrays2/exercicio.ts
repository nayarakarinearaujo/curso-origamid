//? EXERCÍCIOS

// 🏷️ Interface que define o formato dos dados do curso
interface Cursos {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  tags: string[]; // ⬅️ Array de strings, de acordo com o JSON
  nivel: "iniciante" | "avancado";
  idAulas: number[];
}

// 🔗 Função assíncrona para buscar os cursos da API
async function fetchCursos() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");

  // Converte a resposta para JSON e tipa como array de Cursos
  const data: Cursos[] = await response.json();

  // Chama a função que renderiza os cursos
  showCursos(data);
}

// Executa a função que faz o fetch dos cursos
fetchCursos();

// 🖥️ Função responsável por exibir os dados dos cursos no HTML
// ✅ Como a API retorna um array de objetos, usamos o método forEach para percorrer
function showCursos(cursos: Cursos[]) {
  cursos.forEach((curso) => {
    //Definindo estilos do titulo
    let color;
    if (curso.nivel === "iniciante") {
      color = "blue";
    } else if (curso.nivel === "avancado") {
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
