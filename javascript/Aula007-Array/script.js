
//Array

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

var videoGames = ['Switch', 'PS4', 'XBOX', '3DS'];

//Ele vai retornar todos os valores no array
for(var i = 0; i < videoGames.length; i++) {
    console.log(videoGames[i]);
}


//Ele vai quebrar quando aparecer o PS4
for(var i = 0; i < videoGames.length; i++) {
    console.log(videoGames[i]);
    if(videoGames[i] === 'PS4') {
        break;
    }
}


//! Loop forEach

var frutas = ['Banana', 'Pera', 'Maça', 'Abacaxi', 'Uva']

frutas.forEach(function() {
    console.log(frutas)

});