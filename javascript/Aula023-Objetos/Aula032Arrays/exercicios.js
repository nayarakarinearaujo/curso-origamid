const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];
// *Remova o primeiro valor de comidas e coloque em uma variável
// const primeiraComida = comidas.shift();
// console.log(primeiraComida);

// *Remova o último valor de comidas e coloque em uma variável
// const ultimoComida = comidas.pop();
// console.log(ultimoComida);

// *Adicione 'Arroz' ao final da array
// comidas.push("Arroz");
// console.log(comidas)

// *Adicione 'Peixe' e 'Batata' ao início da array
// comidas.unshift("Peixe", "Batata");
// console.log(comidas)

const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];
// * Arrume os estudantes em ordem alfabética
// const estudantesAlfabetico = estudantes.sort();
// console.log(estudantesAlfabetico)

// *Inverta a ordem dos estudantes
// const estudantesInvertidos = estudantes.reverse();
// console.log(estudantesInvertidos)

// *Verifique se Joana faz parte dos estudantes
// const verificarEstudante = estudantes.includes("Joana");
// console.log(verificarEstudante);

// *Verifique se Juliana faz parte dos estudantes
const verificarEstudante2 = estudantes.includes("Juliana");
console.log(verificarEstudante2);

let html = `<section>
 <div>Sobre</div>
 <div>Produtos</div>
 <div>Contato</div>
 </section>`;
// *Substitua section por ul e div com li,utilizando split e join

html = html.split("section").join("ul").split("div").join("li")
console.log(html);

const carros = ["Ford", "Fiat", "VW", "Honda"];
// *Remova o último carro, mas antes de remover salve a array original em outra variável

const carros1 = carros.slice();
carros.pop()

console.log(carros);
console.log(carros1);
