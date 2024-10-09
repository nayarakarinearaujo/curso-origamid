//! EXERCÍCIO


//Crie uma função construtora de pessoas
//Deve conter nome, sobrenome e idade

function Pessoa (nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

//Crie um método no protótipo que retorne o nome completo da pessoa

Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
}

const nayara = new Pessoa('Nayara', 'Karine', 31);

//Liste os métodos acessados por dados criados com:
//NodeList;
//htmlCollection;
//Document

Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);



//Liste os coonstrutores dos dados abaixo

const li = document.querySelector('li'); 
 
li; //HTMLLiElement;
li.click; //Function
li.innerText; //String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; //Number
li.click(); //undefined


// Qual o construtor do dado abaixo: 
li.hidden.constructor.name; //String