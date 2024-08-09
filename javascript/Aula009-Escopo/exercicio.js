//! Exercício

//* Por qual motivo o código baixo retorna com erro
/*No ínicio ele retornava com erro porque o var estava sendo passado ao invés
do atributo dele, e tambem o console.log estava fora do escopo.
*/

/*
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
}
console.log(var, marca, portas);
*/

//? Ajustado
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;

    console.log(cor, marca, portas);
}

// *Como corrigir o erro abaixo?
/*
Primeiro: A variável estava dentro do escopo da primeira função, assim a outra não conseguia encontrar.
Segundo: A função de dividir estava com o sinal de somar
Terceiro: Não tinha o console.log para mostrar os resultados
*/

/*
function somarDois(x) {
    const dois = 2;
    return x + dois;
}

function dividirDois(x) {
    return x + dois;
}

somarDois(4);
dividirDois(6);
*/

//? Ajustado

const dois = 2;
function somarDois(x) {
    return x + dois;
}

function dividirDois(x) {
    return x / dois;
}

console.log(somarDois(4));
console.log(dividirDois(6));


//* O que fazer para o total retornar 500 ?
/*Resposta: Alterar a variável de var para const.
E variável de dentro do for: para let. O let permite que você tenha 
uma variável com o mesmo nome em um escopo diferente.
*/

/*
var numero = 50;

for(var numero = 0; numero < 10; numero++) {
    console.log(numero);
}

const total = 10 * numero;
console.log(total);
*/

const numero = 50;

for(let numero = 0; numero < 10; numero++) {
    console.log(numero);
}

const total = 10 * numero;
console.log(total);