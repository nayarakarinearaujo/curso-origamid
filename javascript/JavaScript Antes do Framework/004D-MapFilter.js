/*
 Utiliza o método filter para selecionar apenas os elementos 
 que contêm informações de preços (aqueles que incluem a string 
 "R$")
 */
const precos = [
  "Crédito",
  "R$ 200",
  "R$ 400",
  "Contas a pagar",
  "R$ 300",
  "R$ 400",
  "Meus Dados",
];

//* Filter
const precosFiltro = precos.filter((preco) => {
  return preco.includes("R$");
});

//* Map:
// Vai pegar a array e retornar uma nova array com a modificação
const precosNumeros = precosFiltro.map((preco) => 
    Number(preco.replace("R$ ", ""))
);

console.log(precosNumeros);
