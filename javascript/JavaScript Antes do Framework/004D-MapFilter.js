/*
 Utiliza o método filter para selecionar apenas os elementos 
 que contêm informações de preços (aqueles que incluem a string 
 "R$")
 */
const precos = [
  "Crédito",
  "R$ 200",
  "R$ 400",
  "Constas a pagar",
  "R$ 300",
  "R$ 400",
  "Meus Dados",
];

const precosFiltro = precos.filter((preco) => {
  return preco.includes("R$");
});

const precosNumeros = precosFiltro.map((preco) => 
    Number(preco.replace("R$", ""))
);

console.log(precosNumeros);
