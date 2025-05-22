//Union Types

let total1: string | number = 200;
total1 = "4000";

function isNumber(value: string | number) {
  if (typeof value === "number") {
    return true;
  } else {
    return false;
  }
}
console.log(isNumber("200"));

//DOM

const button = document.querySelector("button");

// !Sem optional chaining:
if (button) {
  button.click();
}

// !Com optional chaining:
//Acessando a métodos:
button?.click();

//?Acesso a propriedades:
const title = document.querySelector("h1")?.textContent;

//?Acesso a itens em objetos mais profundos:
const user = { profile: { name: "Nayara" } };
console.log(user.profile?.name); // "Nayara"
//console.log(user.address?.city); //erro


//* Evita erros como:
// TypeError: Cannot read properties of null
// quando o elemento ou objeto não existe.