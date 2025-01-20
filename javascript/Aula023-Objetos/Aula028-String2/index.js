// * string.repeat()
const frase = "Bla";
const repeticao = frase.repeat(4); //vai repetir o que está em frase por quantas vezes passar no parâmetro
console.log(repeticao)

//* string.replace
//Troca parte da string por outra

let listaItens = "Camisa Bonés Calças Bermudas Vestidos Saias";

listaItens = listaItens.replace(/\s+/g, ", "); // Substitui espaços por vírgula e espaço
console.log(listaItens);

//* string toUpperCase()
const sexo1 = "Feminino";

//Usa toUppercase() para formatar o dado recebido do cliente ou usuário
console.log(sexo1.toUpperCase() === "FEMININO");

