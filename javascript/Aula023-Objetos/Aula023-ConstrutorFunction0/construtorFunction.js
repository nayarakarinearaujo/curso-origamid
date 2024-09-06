
//! Funções construtoras
/*São responsáveis por construir novos objetos sempre que chamamos a mesma. */

function Carro() {
    this.marca = 'Marca';
    this.preco = 0;
}

const honda = new Carro();
honda.marca = 'Honda';
honda.preco = 4000;
const fiat = new Carro();
fiat.marca = 'Fiat';
fiat.preco = 3000;