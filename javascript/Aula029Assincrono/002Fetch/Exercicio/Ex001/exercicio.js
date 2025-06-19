//Nesse caso poderia usar o async também

function buscarCep(event) {
  event.preventDefault();
  const inputCep = document.getElementById("inCep");
  const resultado = document.getElementById("resultado");

  const cep = inputCep.value.trim();

  // Verifica se o CEP é válido
  if (cep.length !== 8 || isNaN(cep)) {
    alert("Digite um CEP válido com 8 números!");
    return;
  }
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.json())
    .then((data) => {
      if (data.erro) {
        resultado.innerText = "CEP não encontrado";
      } else {
        resultado.innerHTML = `
         <p><strong>CEP:</strong> ${data.cep}</p>
          <p><strong>Logradouro:</strong> ${data.logradouro}</p>
          <p><strong>Bairro:</strong> ${data.bairro}</p>
          <p><strong>Cidade:</strong> ${data.localidade}</p>
          <p><strong>UF:</strong> ${data.uf}</p>
        `;
      }
    })
    .catch((erro) => {
      resultado.innerText = "Erro ao buscar CEP.";
      console.error("Erro na requisição:", erro);
    });
}
const btnCep = document.getElementById("btbuscarCep");
btnCep.addEventListener("click", buscarCep);
