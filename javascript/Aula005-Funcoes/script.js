// function areaQuadrada(lado) {
//     return lado * lado;
//     // console.log('Função ativa')
// }

// console.log(areaQuadrada(10));



// function imc(peso, altura) {
//     var imc = peso / (altura * altura);
//     return imc;
// }
// console.log(imc (75, 1.63));



function corFavorita(cor) {

    let cor = prompt("Digite uma cor: ")

    if(cor ==='azul') {
        return 'Eu gosto do céu';
    } else if (cor ==='verde') {
        return 'Eu gosto de árvores'
    } else {
        return 'Não tenho essa cor cadastrada'
    }
}


function mostraConsole() {
    console.log('Oi');
}
addEventListener('click', mostraConsole);