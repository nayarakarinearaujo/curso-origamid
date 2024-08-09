

var nome = "";
if (nome) {
    console.log(nome);
} else {
    console.log("Nome não existe")
}

//-------------------------------------------------------------------------------------------

//!O operador && (AND lógico) avalia se ambas as expressões são verdadeiras. 
//Em JavaScript, qualquer valor numérico diferente de zero é considerado true em um contexto booleano.
//Se apenas um for falso ele retornará falso
//Se os dois forem verdadeiros dai sim retornará verdadeiro


//Nesse exmeplo o primeiro valor será 0 então dará falso
if ((5 - 5) && (5 + 5)) {
    console.log("Verdadeiro");
} else {
    console.log("Falso");
}


//Nesse exemplo o valor será número então dará verdadeiro
if ((5 + 5) && (10 + 5)) {
    console.log("Verdadeiro");
} else {
    console.log("Falso");
}


//O operador && retorna o primeiro valor falsy ou, se todos forem truthy, ele imprimi o último valor.
var condicional = (5 + 5) && (10 + 5);
if (condicional) {
    console.log("Verdadeiro", condicional);
} else {
    console.log("Falso");
}


//--------------------------------------------------------------------------------------

//!Operador || é chamado de operador OR lógico. 
//Ele retorna o primeiro valor truthy encontrado ou o último valor se nenhum for truthy.

//Nesse esse exemplo retorna o valor 10, primeiro valor true (verdadeiro)
var condicional2 = (5 - 5) || (5 + 5) || (10 - 2);
console.log(condicional2);

//Nesse esse exemplo ele retorna o último valor true (verdadeiro)
var condicional3 = (5 - 5) || (5 + 5) && (10 - 2);
console.log(condicional3);

//--------------------------------------------------------------------------------------

//!Switch
// Com o Switch você pode verificar se uma variável é igual á diferentes valores utilizando o 'case'. 
//É usada quando você tem uma expressão com múltiplas condições e deseja executar diferentes blocos de 
//código com base no valor dessa expressão. É uma forma mais eficiente e legível de lidar com várias 
//condições do que uma série de declarações if...else.


var corFavorita = 'Azul';

switch (corFavorita) {
    case 'Azul':
        console.log('Olhe para o céu.')
        break;
    case 'Vermelho':
        console.log('Olhe para as rosas.');
        break
    case 'Amarelo':
        console.log('Olhe para o sol');
        break
}