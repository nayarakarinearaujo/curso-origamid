
const grupoA = 100;
const grupoB = 200;

if (grupoA > grupoB) {
  console.log("Grupo 1 ganhou");
} else {
  console.log("Grupo B ganhou");
}

//Será mais comum essa forma de fazer com operador ternário
const vencedor = grupoA > grupoB ? "Grupo A venceu" : "Grupo B venceu";

console.log(vencedor);

const active = true;
const button = active && "Botão está ativo";
console.log(button);

