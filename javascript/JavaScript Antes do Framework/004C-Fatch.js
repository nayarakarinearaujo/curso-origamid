// Faz uma requisição para obter dados de produtos da API e exibe no console
fetch("https://ranekapi.origamid.dev/json/api/produto")
  .then((response) => response.json()) // Converte a resposta em JSON
  .then((json) => {
    console.log(json); // Exibe os dados no console
  });

// ASYNC AWAIT
async function fetchProdutos(url) {
  const response = await fetch(url);
  const json = await response.json()
  return response;
}
console.log(fetchProdutos);


const produtos = fetchProdutos(
  "https://ranekapi.origamid.dev/json/api/produto"
);

