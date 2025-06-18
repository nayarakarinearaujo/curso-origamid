async function buscarPiadas(event) {
  if (event) {
    event.preventDefault();
  }

  const resultado = document.getElementById("resultado");

  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const dados = await response.json();
    console.log(dados.value);

    const piadas = dados.value;

    if (dados.erro) {
      resultado.innerText = "Piadas não encontrado";
    } else {
      resultado.innerHTML = `
         <p>${piadas}</p>
         `;
    }
  } catch (erro) {
    console.log(erro);
  }
}

const btbuscar = document.getElementById("btbuscar");
btbuscar.addEventListener("click", buscarPiadas);
