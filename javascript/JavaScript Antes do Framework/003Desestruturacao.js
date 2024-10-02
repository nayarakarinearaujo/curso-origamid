//Desestruturação
function handleMouse({ clientX, clienty }) {
  console.log(clientX, clienty);
}

//Desestruturação de array

const frutas = ["banana", "uva"];
const [fruta1, fruta2] = frutas;
console.log(frutas);


//Desestruturação de array
const useQuadrado = [
  4,
  function (lado) {
    return 4 * lado;
  },
];

const [lados, perimeto] = useQuadrado;
console.log(lados);
console.log(perimeto(10));

document.addEventListener("click", handleMouse);


// Uso de parâmetro rest para capturar múltiplos clientes

function showList(empresa, ...clientes) {
    clientes.forEach((cliente) => {
        console.log(cliente, empresa);
    })
}

showList('Google', 'Nayara', 'André');

// Operador spread (...) em JavaScript, 
// que permite expandir elementos de um array ou objeto. 

const numeros = [10, 5, 20];
const maior = Math.max(...numeros);
console.log(maior);

const numeros2 = [...numeros, 10, 13, 25, 32];
console.log(numeros2);


/*
operador spread (...) para copiar as propriedades de um objeto e 
adicionar novas propriedades a ele. Neste caso, o objeto original 
carro é copiado para um novo objeto carroAno, e uma nova propriedade 
ano é adicionada ao novo objeto.
*/
const carro = {
    cor: 'Azul',
    portas : 4,
}

carroAno = {...carro, ano: 2008};
console.log(carro);