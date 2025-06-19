async function buscarBitcoin(event) {
  const resultado = document.getElementById("resultado");

  try {
    const response = await fetch("https://blockchain.info/ticker");
    const dados = await response.json();

    if (dados.erro) {
      resultado.innerText = "Ocorreu um erro ao acessar API";
    }
    console.log(dados.BRL);
    console.log(dados.BRL.last.toLocaleString("pt-BR"));
    const dadosFormatado = dados.BRL.last.toLocaleString("pt-BR");

    resultado.innerHTML = `
    <p><strong>Valor atualizado:</strong> R$ ${dadosFormatado}</p>
    `;
  } catch (erro) {
    console.log(erro);
    resultado.innerText = "Erro na requisição";
  }
}

buscarBitcoin();

//Função para atualizar a cada 30 segundos
// setInterval(() => {
//   buscarBitcoin();
// }, 30000);
