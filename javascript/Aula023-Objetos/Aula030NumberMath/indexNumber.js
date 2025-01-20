//! Number
// É uma construtora de números, todo número possui as prorpiedades e métodos do ptototype de NUmber.
// Number também possui alguns métodos.

const ano = 2018;
const preco = new Number(99);

//* Number.isNaN() e Number.isInteger();
//isNaN() é um método de Number, ou seja, não faz parte to
//protótipo. isInteger() verificar se é integral (Inteiro)

Number.isNaN(NaN); // true
Number.isNaN(4 + 5); // false
Number.isInteger(20); // true
Number.isInteger(23.6); // false

//* Number.parseFloat() e Number.parseInt()
// parseFloat() serve para retornarmos um número a partir de uma
// string. A String deve começar com um número. parseInt recebe
// também um segundo parâmetro que é o Radix, 10 é para decimal.

parseFloat('99.50'); // Mesma função sem o Number
Number.parseFloat('99.50'); // 99.5
Number.parseFloat('100 Reais'); // 100
Number.parseFloat('R$ 100'); // NaN
parseInt('99.50', 10); // 99
parseInt(5.43434355555, 10); // 5 (Transforma em inteiro)
Number.parseInt('100 Reais', 10); // 100


//* n.toFixed(decimais)
// Arredonda o número com base no total de casas decimais do
// argumento.
const preco1 = 2.99;
preco1.toFixed(); // 3
const carro = 1000.455;
carro.toFixed(2) // 1000.46
const preco2 = 1499.49;
preco2.toFixed() // 1499

//* n.toString(radix)
// Transforma o número em uma string com base no Radix. Use o 10
// para o sistema decimal.
const preco4 = 2.99;
preco4.toString(10); // '2.99'


//* n.toLocaleString(lang, options);
// Formata o número de acordo com a língua e opções passadas.
const preco5 = 59.49;
console.log(preco5.toLocaleString('en-US', {style: 'currency', currency:
'USD'})); // $59.49
console.log(preco5.toLocaleString('pt-BR', {style: 'currency', currency:
'BRL'})); // R$ 59,49'
