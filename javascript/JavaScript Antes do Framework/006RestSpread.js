
//* REST

// function showList(empresa, ...clientes) {
//     console.log(empresa);
//     console.log(clientes);
// }

//showList("Origamid", "João", "Maria", 10);

//*SPREAD

// Declara um array de números
//const numeros = [1, 2, 4, 29, 32, 2, 45, 3];

// Usa Math.max com o operador de espalhamento (...) para encontrar o maior número no array
// O operador ... expande o array em argumentos individuais para a função Math.max
// A função Math.max compara todos os valores e retorna o maior
//console.log(Math.max(...numeros));  // Saída: 45


// const items = document.querySelectorAll("li");

// [...items].map(item => {
//     console.log(item);
// })

// console.log(items);

//* CLONAR objeto

//const carro = { cor: "Azul", portas: 4, ano: 2020};

//Ele clona e acrescenta mais um atributo
// const cloneCarro = { ...carro, turbo: true};
// console.log(cloneCarro)

// class Transporte {
//     constructor() {
//         this.terrestre = true
//     }
// }

class Transporte {
    constructor() {
        this.terrestre = true;
    }
}

class Carro extends Transporte {
    constructor(cor, portas) {
        super(); // Chama o construtor da classe base
        this.cor = cor;
        this.portas = portas;
    }
}

const carro = new Carro("vermelho", 4);

const cloneCarro = {...carro};
console.log(cloneCarro);
console.log(carro);