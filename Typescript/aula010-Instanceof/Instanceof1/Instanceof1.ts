// //Instance Of

// class Produtos {
//   nome: string;
//   preco: number;
//   constructor(nome: string, preco: number) {
//     this.nome = nome;
//     this.preco = preco;
//   }
//   precoReal() {
//     return `R$ ${this.preco}`;
//   }
// }

// const livros = new Produtos("A Guerra dos Tronos", 200);

// console.log(livros.nome);
// console.log(livros.precoReal());

// //Verificar se livro é um objeto do tipo produto

// console.log(livros instanceof Produtos);

// class Livro {
//   autor: string;
//   constructor(autor: string) {
//     this.autor = autor;
//   }
// }
// class Jogo {
//   jogadores: number;
//   constructor(jogadores: number) {
//     this.jogadores = jogadores;
//   }
// }

// function buscarProduto(busca: string) {
//   if (busca === "O Hobbit") {
//     return new Livro("J. R. R Tolkien");
//   }

//   if (busca === "Dark Souls") {
//     return new Jogo(1);
//   }
//   return null;
// }

// const produtos = buscarProduto("O Hobbit");
// const produtos1 = buscarProduto("Dark Souls");

// if (produtos instanceof Livro) {
//   console.log(produtos.autor);
// }

// if (produtos1 instanceof Jogo) {
//   console.log(produtos1.jogadores);
// }
