
// Faz uma requisição para obter dados de produtos da API e exibe no console
fetch("https://ranekapi.origamid.dev/json/api/produto")
  .then((response) => response.json())  // Converte a resposta em JSON
  .then((json) => {
    console.log(json);  // Exibe os dados no console
  });


  async function fetchProdutos(url) {
    const response = await fetch(url);
    return response;
  }

  const produtos = fetchProdutos (
    'https://ranekapi.origamid.dev/json/api/produto'
  );

  console.log(produtos);
