
//! Operadores de Atribuição

//Operador básico de atribuição, o igual já faz essa atribuição a variável
var x = 5;
var y = 10;

x += y; //Mesmo que: x = x + y (Resp: 15)
x -= y; //Mesmo que: x = x - y (Resp: -5)
x *= y; //Mesmo que: x = x * y (Resp: 50)
x /= y; //Mesmo que: x = x / y (Resp: 0.5)
x %= y; //Mesmo que: x = x % y (Resp: 0)
x **= y; //Mesmo que: x = x ** y (Resp: 9765625)

//* Exemplos

var numero = 20;

numero += 10; // ou numero = numero + 10;


//! Operadores Ternário

//Condição ? true : false
var idade = 20;
var estaDirigindo = false;

// Declarando a variável podeBeber antes do uso
var podeBeber;

// Verifica as condições
if (idade > 18 && estaDirigindo) {
    podeBeber = 'Não pode beber'; // Mais de 18 e está dirigindo
} else if (idade === 18 && !estaDirigindo) {
    podeBeber = 'Pode beber'; // Exatamente 18 e não está dirigindo
} else {
    podeBeber = 'Não pode beber'; // Caso contrário
}

// Imprime o resultado no console
console.log(podeBeber);

//! Operador if abreviado, sem chaves

var possuiFaculdade = true;

if(possuiFaculdade)
    console.log('Sim possui Faculade');
else 
    console.log('Não possui');