async function buscarPiadas(event) {
  if (event) {
    event.preventDefault();
  }

  const resultado = document.getElementById("resultado");

  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const dados = await response.json();
    console.log(dados.value);
    console.log(dados);

    // const piadas = dados.value;

    if (dados.erro) {
      resultado.innerText = "Piadas não encontrado";
    } else {
      resultado.innerHTML = `
         <img src="${dados.icon_url}" alt="Ícone Chuck Norris">
         <p>${dados.value}</p>
         `;
    }
  } catch (erro) {
    console.log(erro);
  }
}

const btbuscar = document.getElementById("btbuscar");
btbuscar.addEventListener("click", buscarPiadas);
