//* Arrays

// Array de números
const numeros = [10, 20, 30, 40, 50, 60];

// Array que mistura números e strings
const valores = [10, 20, "Produtos", 40, 50, " Taxas"];

function maiorQueDez(data: number[]) {
  return data.filter((n) => n > 10);
}

function filtrarValores(data: (string | number)[]) {
  return data.filter((item) => typeof item === "number");
}

function filtrarString(data: (string | number)[]) {
  return data.filter((item) => typeof item === "string");
}

console.log(maiorQueDez(numeros));
console.log(filtrarValores(valores));
console.log(filtrarString(valores));

// *Aqui temos um array de arrays, onde cada subarray contém:
// - Uma string (nome do filme)
// - Um número (valor, preço, pontuação, etc.)

// Este tipo é interpretado como (string | number)[][]
// Poderíamos tipar como: [string, number][]

const dados: [string, number][] = [
  ["Senhor dos Anéis", 80],
  ["Vingadores", 100],
];

// Função que percorre o array de filmes
function filmes(data: [string, number][]) {
  const elementosHTML = data.map(([nome, preco]) => {
    return `
        <div>
          <h2>${nome}</h2> <!-- Título do filme -->
          <p>Preço: R$ ${preco}</p> <!-- Preço do filme -->
        </div>
      `;
  });
  document.body.innerHTML += elementosHTML;
}

filmes(dados);

// Usando a sintaxe de generics para array
function maiorQueDez1(data: Array<number>) {
  return data.filter((n) => n > 10);
}
console.log(maiorQueDez1(numeros));

//*------------------------------------------------------------------------

//🚀 Exemplo com Função Genérica

//🛑 Problema: quando usamos any, perdemos o tipo.
// O TypeScript não sabe se é string, number, objeto...
function primeiroElementoArray(data: any[]) {
  return data[0];
}

const resultado = primeiroElementoArray(["JS", "TS", "React"]);
console.log(resultado); // "JS"

//✅ Função com Generics (forma correta e segura):
// Array<T> → significa "um array de qualquer tipo T"

function primeiroElemento<T>(data: Array<T>): T {
  return data[0];
}

const nome = primeiroElemento(["Nayara", "Karine"]); // TypeScript entende que é string
const numero = primeiroElemento([10, 20, 30]); // TypeScript entende que é number
const objeto = primeiroElemento([{ nome: "JS" }, { nome: "TS" }]); // objeto

console.log(nome); // Nayara
console.log(numero); // 10
console.log(objeto); // { nome: "JS" }

/*
O <T> é um tipo genérico, que representa qualquer tipo 
(string, number, objeto...).
Na chamada da função, o TypeScript infere automaticamente qual é o tipo.
Total segurança de tipos sem usar any.
*/
