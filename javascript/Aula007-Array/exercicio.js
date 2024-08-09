
//! Exercício

//Crie uma array com os anos que o Brasil ganhou a copa: 1959, 1962, 1970, 1994, 2002

var brasilCampeao = ['1959', '1962', '1970', '1994', '2002']


//Interaja com a array utilizando um loop, para mostrar no console a seguinte mensagem, 'O Brasil ganhou a copa de ${ano}'

//* 1° Forma de fazer
for(var i = 0; i < brasilCampeao.length; i++) {
    console.log('O Brasil ganhou a copa de ' + brasilCampeao[i]);
}


//* 2° Forma de fazer
for(var i = 0; i < brasilCampeao.length; i++) {
    console.log(`O Brasil ganhou a copa de ${brasilCampeao[i]}, `);
}


//Interaja com um loop nas frutas abaixo e pare ao chegar em Pera

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