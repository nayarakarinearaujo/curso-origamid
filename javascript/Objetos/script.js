
//Objetos

var pessoa = {
    nome: 'Nayara',
    sobrenome: 'Araújo',
    idade: 31,
    faculdade: 'True',
    profissao:'Desenvolvedora Full Stack',
}

console.log(pessoa.nome);

//Metodos
//É uma propriedade que possui uma função no local do seu valor

var quadrado = {

    lados: 4,
    area: function(lado) {
        return lado * lado;
    },


    perimetro(lado){
        return this.lados * lado;
    },
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

//Ex: Objetos

var menu = {
    width:800,
    height: 50,
    backgroundColor: '#84E',
}