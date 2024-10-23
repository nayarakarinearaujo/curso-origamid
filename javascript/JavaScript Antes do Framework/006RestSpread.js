
//* REST

function showList(empresa, ...clientes) {
    console.log(empresa);
    console.log(clientes);
}

showList("Origamid", "João", "Maria", 10);

//*SPREAD

// Declara um array de números
const numeros = [1, 2, 4, 29, 32, 2, 45, 3];

// Usa Math.max com o operador de espalhamento (...) para encontrar o maior número no array
// O operador ... expande o array em argumentos individuais para a função Math.max
// A função Math.max compara todos os valores e retorna o maior
console.log(Math.max(...numeros));  // Saída: 45
