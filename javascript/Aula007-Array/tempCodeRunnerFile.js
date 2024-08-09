
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for(var i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
    if(frutas[i] === 'Pera') {
        break;
    }
}

//Coloque a ultima fruta do array acima em uma variável, sem remover a mesma do array

//* 1° maneira de fazer
var ultimaFruta = frutas[4];
console.log(ultimaFruta);


//* 2° maneira de fazer
var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);