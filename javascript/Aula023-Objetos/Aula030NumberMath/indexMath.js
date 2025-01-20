//! Math
// É um Objeto nativo que possui propriedades e métodos de
// expressões matemáticas comuns.
// https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/Math

Math.PI // 3.14159
Math.E // 2.718
Math.LN10 // 2.30

//* Math.abs(), Math.ceil(), Math.floor() e Math.round()
//? abs() retorna o valor absoluto, ou seja, transforma negativo em positivo. 
//? ceil() arredonda para cima, retornando sempre uma integral e floor para baixo. 
//? round() arredonda para o número integram mais próximo. 

Math.abs(-5.5); // 5.5
Math.ceil(4.8334); // 5
Math.ceil(4.3); // 5
Math.floor(4.8334); // 4
Math.floor(4.3); // 4
Math.round(4.8334); // 5
Math.round(4.3); // 4

//* Math.max(), Math.min() e Math.random();
//? max() retorna o maior número de uma lista de argumentos, min() o menor número e 
//? random() um número aleatório entre 0 e 1.

Math.max(5,3,10,42,2); // 42
Math.min(5,3,10,42,2); // 2
Math.random(); // 0.XXX
Math.floor(Math.random() * 100); // entre 0 e 100
Math.floor(Math.random() * 500); // entre 0 e 500
// Número random entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32;
Math.floor(Math.random() * (max - min + 1)) + min;