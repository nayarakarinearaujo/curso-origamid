
//! Escopo

var carro = 'Fusca';

function mostrarCarro(){
    console.log(carro);
}

mostrarCarro();
console.log(carro);

//! Diferença de const e let

//* const
//Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código.

//Ex:
const mes = 'Dezembro';
/*
mes = 'Janeiro'; // erro, tentnou modificar o valor
const semana; //Erro, declarou sem valor
*/

const data = {
    dia: 5,
    mes: 'Julho',
    ano: 2024,
}
console.log('Hoje é dia ' + data.dia + ' de ' + data.mes + ' de ' + data.ano);


//* let
//Mentém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável.

let ano;
ano = 2024;
ano ++;
console.log(ano); //2025

// let ano = 2020; 
//Isso da erro pois não pode redeclarar a variável.

//Mas pode alterar essa variável
ano = 2025;