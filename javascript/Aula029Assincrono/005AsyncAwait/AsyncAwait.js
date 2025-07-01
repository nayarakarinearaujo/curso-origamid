async function puxarDados() {
  const dadosResponse = await fetch("Json/dados.json");
  const dadosJson = await dadosResponse.json();
  console.log(dadosJson);
  console.log(dadosJson[0].aula);
}

async function puxarClientes() {
  try {
    const dadosResponse = await fetch("Json/clientes.json");
    const dadosJson = await dadosResponse.json();
    console.log(dadosJson);

    document.body.innerText = dadosJson[0].nome;
  } catch (error) {
    console.log(error);
  }
}

puxarDados();
puxarClientes();
