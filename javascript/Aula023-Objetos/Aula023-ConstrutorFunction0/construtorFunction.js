//! Funções construtoras
// * São responsáveis por construir novos objetos sempre que chamamos a mesma. */

//* new Keywod
/*
A plavara chave new é responsável por criar um novo objeto baseado na função
que passarmos a frente dela.
*/

class Carro {
    constructor() {
        // Propriedades
        this.marca = 'Marca';
        this.preco = 0;
    }
}

// Novo objeto construído a partir da classe Carro()
const honda = new Carro();
honda.marca = 'Honda';
honda.preco = 4000;

const fiat = new Carro();
fiat.marca = 'Fiat';
fiat.preco = 3000;


/*
* Outra maneira de criar os objetos

const honda = {
    marca: 'Honda',
    preco: 4000
};

const fiat = {
    marca: 'Fiat',
    preco: 3000
};

*/

/*
* Outra maneira de fazer a mesma função:

function criarCarro(marca, preco) {
    return {
        marca: marca,
        preco: preco
    };
}

const honda = criarCarro('Honda', 4000);
const fiat = criarCarro('Fiat', 3000);


*/
