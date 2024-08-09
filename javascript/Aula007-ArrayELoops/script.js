
//! Array

// var videoGames = ['Switch', 'PS4', 'Xbox']

//Para abrir o array
console.log(videoGames[0])

// *Para fazer modificaçoes no Array

/*

videoGames.pop(); //Remove o último item e retorna ele

videoGames.push('3DS'); // Adiciona ao final do Array

videoGames.length(); //fala qual tamanho do array

*/

//! Loop

/*
for(var i = 0; i < 10; i ++) {
    console.log(i);
}
*/


//! while loop
//Nesse caso ele vai contar e incrementar de 5 em 5
var i = 0;
while (i <= 100) {
    console.log(i);
    i= i + 5
}


//! Loop sobre array

var videoGames = ['Switch', 'PS4', 'XBOX', '3DS'];

//Ele vai retornar todos os valores no array
for(var item = 0; item < videoGames.length; item ++) {
    console.log(videoGames[item]);
}

//! Loop com Break
//* Ele vai quebrar quando aparecer o PS4

for(var item = 0; item < videoGames.length; item++) {
    console.log(videoGames[item]);
    if(videoGames[item] === 'PS4') {
        break;
    }
}

//! Loop forEach
//É um método de array

var frutas = ['Banana', 'Pera', 'Maça', 'Abacaxi', 'Uva']

frutas.forEach(function(fruta, index) {
    console.log(`O Indice é [${index}] e a fruta é ${fruta}`)
});