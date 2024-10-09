//! Construtores Nativos

/*
Objetos, Funções, Números, Strings e outros tipos de dados são
criados utilizando construtores. Esses construtores possuem um protótipo
com propriedades e métodos, que poderão ser acessadas pelo tipo de dado
*/

const pais = 'Brasil';

const cidade = new String ('Campinas');

//! É possível acessar a função do protótipo
/*
É comum, principalemnte em códigos mais antigos, o uso direto
de funções do protótipo do construtor Array
*/

const lista = document.querySelectorAll('li');

const listaArray1 = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);


const listaAnimais = ['Cachorro', 'Gato', 'Peixe'];


const Carro = {
    marca: 'Ford',
    preco: 2000,
    andar() {
        return true;
    }
}

console.log(Carro.marca.toLocaleUpperCase());