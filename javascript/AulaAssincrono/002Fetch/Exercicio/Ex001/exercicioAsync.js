//Fazendo a requisição com fetch ele traz as informações mais rápido.

async function buscarCep(event) {
  event.preventDefault();

  const inCep = document.getElementById("inCep");
  const resultado = document.getElementById("resultado");

  const cep = inCep.value.trim();

  if (cep.length !== 8 || isNaN(cep)) {
    const mensagemErro = document.createElement("p");
    mensagemErro.textContent = "Digite um CEP válido com 8 números!";
    document.getElementById("resultado").appendChild(mensagemErro);
    return;
  }
  resultado.innerText = "Carregando..."
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const dados = await response.json();
    console.log(dados);

    if (dados.erro) {
      resultado.innerText = "CEP não encontrado";
    } else {
      resultado.innerHTML = `
         <p><strong>CEP:</strong> ${dados.cep}</p>
          <p><strong>Logradouro:</strong> ${dados.logradouro}</p>
          <p><strong>Bairro:</strong> ${dados.bairro}</p>
          <p><strong>Cidade:</strong> ${dados.localidade}</p>
          <p><strong>UF:</strong> ${dados.uf}</p>
         `;
    }
  } catch (erro) {
    resultado.innerText = "Erro ao buscar CEP.";
    console.error("Erro na requisição:", erro);
  }
}
const btbuscarCep = document.getElementById("btbuscarCep");
btbuscarCep.addEventListener("click", buscarCep);
