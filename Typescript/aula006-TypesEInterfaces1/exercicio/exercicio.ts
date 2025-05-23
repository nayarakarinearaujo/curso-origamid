//* Exercício

async function fetchProduct() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const data = await response.json();
  console.log(data);
  showProduct(data);
}

interface Empresa {
  fundacao: number;
  nome: string;
  pais: string;
}

interface Product {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidentes: boolean;
  empresaMontadora: Empresa;
  empresaFabricante: Empresa;
}

fetchProduct();

function showProduct(data: Product) {
  document.body.innerHTML += `
    <div>
        <h2>${data.nome}</h2>
        <p>Preço: ${data.preco.toFixed(2)}</p>
        <p>Descrição: ${data.descricao}</p>
        <p>Garantia de: ${data.garantia} meses</p>
        <p>Possui seguro: ${data.seguroAcidentes ? "Sim" : "Não"}</p>

            <div>
                <h3>Empresa Montadora: ${data.empresaMontadora.nome}</h3>
            </div>
            <div>
                <h3>Empresa Fabricante: ${data.empresaFabricante.nome}</h3>
            </div>
     </div>
    `;
}
