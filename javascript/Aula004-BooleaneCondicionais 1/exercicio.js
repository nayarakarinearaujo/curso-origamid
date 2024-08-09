// Verifique se a sua idade é maior do que a de algum parente 
// Dependendo do resultado coloque no console 'É maior', 'É igual
 
var idadeN = 30;
var idadeP = 40;

if(idadeN > idadeP) {
    console.log('É maior');
} else if (idadeN === idadeP) {
    console.log('É igual');
} else {
    console.log('É menor');
}


// Qual valor é retornado na seguinte expressão? 
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao) 
 

// Verifique se as seguintes variáveis são Truthy ou Falsy 
var nome = 'Andre'; 
var idade = 28; 
var possuiDoutorado = false; 
var empregoFuturo; 
var dinheiroNaConta = 0; 

console.log(!!nome, 
    !!idade, 
    !!possuiDoutorado, 
    !!empregoFuturo, 
    !!dinheiroNaConta);
 

// Compare o total de habitantes do Brasil com China (valor em mi
var brasil = 207; 
var china = 1340; 
if(brasil > china) {
    console.log('Brasil tem mais habitantes')
} else {
    console.log('Brasil tem menos habitantes')
}


// O que irá aparecer no console? 
//Nesse caso gato estão escritos diferentes então aparecerá falso
if(('Gato' === 'gato') && (5 > 2)) { 
  console.log('Verdadeiro'); 
} else { 
  console.log('Falso'); 
} 


// O que irá aparecer no console? 
if(('Gato' === 'gato') || (5 > 2)) { 
  console.log('Gato' && 'Cão'); 
} else { 
  console.log('Falso'); 
}
