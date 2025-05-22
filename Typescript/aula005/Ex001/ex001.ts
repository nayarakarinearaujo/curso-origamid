// Exercício: Fazer função que retorne um number

// Cria uma função que recebe um valor que pode ser string ou number
function toNumber(value: string | number) {
  
  // Se o valor já for number, retorna ele mesmo
  if (typeof value === "number") {
    return value;
  
  // Se for string, converte para number e retorna
  } else if (typeof value === "string") {
    return Number(value);
  
  // Se não for nem string nem number (proteção extra), lança um erro
  } else {
    throw "value deve ser number | string";
  }
}

// Testando a função com um número
console.log(toNumber(20));    // Saída: 20

// Testando a função com uma string que representa número
console.log(toNumber("200")); // Saída: 200
