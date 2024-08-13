
//! Entendendo forEach

const imgs = document.querySelectorAll('img');


// 1° Forma de usar callback
imgs.forEach(function (item, index, array) {
    console.log(item,index, array);
});


//2° Forma de usar (A mais usada)
imgs.forEach((item) => {
    console.log(item);
});



//! Entendendo Arrow Function

/* Sintaxe curta em relação a function expression.
Basta remover a palavra chave function e adicionar a
fat arrow => após os argumentos

* CASO TENHA APENAS UM ARGUMENTO PODE DEIXAR SEM AS CHAVES
imgs.forEach((item) => console.log(item));

*/

//3° Forma de fazer  com Arrow Function
imgs.forEach((item) => {
    console.log(item)
});


//! Entendendo forEach e Array

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

//* Retorna o htmlCollection
console.log(titulos);

//* Retorna o array de titulos
console.log(titulosArray);

titulosArray.forEach(function(item) {
    console.log(item);
})
