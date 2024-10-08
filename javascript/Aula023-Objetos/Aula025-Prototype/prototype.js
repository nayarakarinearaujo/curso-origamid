//! Prototype
//A propriedade prototype é um objeto adicionado a uma função quando 
// a mesma é criada.

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade
}

const nayara = new Pessoa ("Nayara", 31);

console.log(Pessoa.prototype);


