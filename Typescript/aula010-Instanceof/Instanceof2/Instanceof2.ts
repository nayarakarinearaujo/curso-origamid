// Instance Of

class Produtos {
  nome: string;
  constructor(nome: string) {
    this.nome = nome;
  }
}

class Livro extends Produtos {
  autor: string;
  constructor(nome: string, autor: string) {
    super(nome);
    this.autor = autor;
  }
}

class Jogo extends Produtos {
  jogadores: number;
  constructor(nome: string, jogadores: number) {
    super(nome);
    this.jogadores = jogadores;
  }
}

function buscarProduto(busca: string) {
  if (busca === "O Hobbit") {
    return new Livro("O Hobbit", "J. R. R. Tolkien");
  }

  if (busca === "Dark Souls") {
    return new Jogo("Dark Souls", 1);
  }
  return null;
}

const produto1 = buscarProduto("O Hobbit");
const produto3 = buscarProduto("Dark Souls");

if (produto1 instanceof Livro) {
  console.log(produto1.nome); // O Hobbit
  console.log(produto1.autor); // J. R. R. Tolkien
}

if (produto3 instanceof Jogo) {
  console.log(produto3.nome); // Dark Souls
  console.log(produto3.jogadores); // 1
}

interface Carro {
  nome: string;
}

const honda: Carro = {
  nome: "Honda",
};

console.log(honda)
