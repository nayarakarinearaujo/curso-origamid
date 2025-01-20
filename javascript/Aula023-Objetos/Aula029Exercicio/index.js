//* Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento
const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];

let totalRecebimento = 0;
let totalTaxa = 0;

transacoes.forEach((transacoes) => {
  const numeroLimpo = Number(transacoes.valor.replace("R$ ", ""));
  if (transacoes.descricao.includes("Recebimento")) {
    totalTaxa += numeroLimpo;
  } else if (transacoes.descricao.includes("Taxa")) {
    totalRecebimento += numeroLimpo;
  }
});

console.log(`Valor total das taxas é: R$ ${totalTaxa.toFixed(2)}`);
console.log(`Valor total dos recebimentos é: R$ ${totalRecebimento.toFixed(2)}`);


//* Retorne uma array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";

const listaTransportes = transportes.split(";");
console.log(listaTransportes);


//* Substitua todos os span's por a's
let html = `<ul>
    <li><span>Sobre</span></li>
    <li><span>Produtos</span></li>
    <li><span>Contato</span></li>
    </ul>`;

html = html.split("span").join('a');
console.log(html);


//* Retorne o último caracter da frase
const frase = "Melhor do ano!";
console.log(frase[frase.length - 1]);


//* Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', ' TAXA DO PÃO', ' taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let totalTaxas = 0;
transacoes2.forEach((item) => {
    //Pode encadear tudo
    item = item.toLowerCase().trim().slice(0 ,4);
    // item = item.toLowerCase();
    // item = item.trim();
    // item = item.slice(0, 4);

    if(item === 'taxa')
        totalTaxas++
});
console.log(totalTaxas);
