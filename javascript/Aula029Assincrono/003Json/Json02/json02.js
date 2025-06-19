/*
?JSON.parse() e JSON.stringfy()

- JSON.parse() irá transofrmar um texto JSON em um objeto 
JavaScript.

- JSON.stringfy() irá transformar um objeto JavaScript em uma string 
no formato JSON.
*/

//* JSON.parse()
fetch("../Json/dados.json")
  .then((response) => response.text())
  .then((jsonText) => {
    // Converte a string JSON em um objeto JavaScript
    const jsonFinal = JSON.parse(jsonText);
    console.log(jsonFinal);
  });

//* JSON.stringfy()
const aula = {
  id: 1,
  aula: "HTML",
  tempo: "30min",
};

// Converte o objeto JavaScript em uma string no formato JSON
const stringConfig = JSON.stringify(aula);
console.log(stringConfig);

//------------------------------------------

//NOME TÉCNICO:
// Serialização → transformar um objeto JavaScript em uma string JSON para ser armazenado
// Armazena a string JSON no localStorage com a chave "config"
localStorage.config = JSON.stringify(aula);

//NOME TÉCNICO:
//Desserialização → transformar a string JSON de volta em objeto JavaScript:
// Recupera o conteúdo do localStorage, converte de volta para objeto e exibe no console
console.log(JSON.parse(localStorage.config));

//? Salvar e recuperar dados com localStorage usando JSON