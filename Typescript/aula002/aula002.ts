//? ✅ Com TypeScript, podemos indicar o tipo de dado de uma variável usando anotações (: string, : number, etc)

const produto: string = "Livro";
const preco: number = 200;

console.log(produto);

const barato = preco < 400 ? true : "Produto Caro";
console.log(barato);

//? ✅ Também podemos definir o tipo dos dados dentro de um objeto

const carro: {
  marca: string;
  portas: number;
} = {
  marca: "Audi",
  portas: 5,
};

console.log(carro.marca);

//! ✅ Nem sempre é necessário declarar o tipo explicitamente.
// O TypeScript consegue inferir (deduzir) o tipo com base no valor atribuído.

//! ✅ No entanto, as anotações de tipo são muito úteis (e recomendadas) ao trabalhar com funções,
// pois ajudam a garantir que os parâmetros e o retorno estejam corretos.

// 💡 Exemplo de função com anotações de tipo:

//? ✅ Função com tipos definidos para os parâmetros e para o retorno
function somar(a: number, b: number): number {
  return a + b;
}

console.log(somar(25, 6));

//? ✅ Objeto com valores do tipo string
const nintendo = {
  nome: "Nintendo",
  preco: "2000",
};

//? ✅ Função que recebe um objeto com propriedades nome e preco (ambos do tipo string),
//? transforma o preco e retorna o objeto atualizado
function transformarPreco(produto: { nome: string; preco: string }): {
  nome: string;
  preco: string;
} {
  produto.preco = "R$ " + produto.preco;
  return produto;
}

const produtoNovo = transformarPreco(nintendo);
console.log(produtoNovo);
