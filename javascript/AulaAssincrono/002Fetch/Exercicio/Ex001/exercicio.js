const inputCep = document.getElementById("inCep");
const btnCep = document.getElementById("btbuscarCep");
const resultado = document.getElementById("resultadoCep");

function buscarCep() {
  const cep = inputCep.value.trim();
  // Verifica se o CEP é válido
  if (cep.length !== 8 || isNaN(cep)) {
    alert("Digite um CEP válido com 8 números!");
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
btnCep.addEventListener("click", buscarCep);
