//! Exercicios

//? Nomeie 3 propriedade ou métodos de strings

var nome = 'Nayara';

//* fixed 
//fixed: Cria uma string HTML com formatação fixa usando a tag <tt>. Obsoleto e não recomendado.

//* length 
//length: Retorna o número de caracteres em uma string ou o número de elementos em um array.

//* slice 
//slice: Retorna uma cópia de uma parte de uma string ou array, sem alterar o original.


//? Nomeie 5 propriedade ou métodos de elementos do DOM

var btn = document.querySelector('.btn');

//* addEventListener
//addEventListener: Adiciona um evento a um elemento e define uma função para ser executada quando o evento ocorre.

//* appendChild
//appendChild: Adiciona um novo elemento como filho de um elemento existente.

//* innerHTML
//innerHTML: Define ou retorna o conteúdo HTML dentro de um elemento.

//* id
//id: Define ou retorna o atributo id de um elemento.

//* outerHTML
//outerHTML: Define ou retorna o HTML completo de um elemento, incluindo o próprio elemento.

//? Busque na web um objeto (método) capaz de iteragir com o clipboard,
//? clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

// Copia o texto para o clipboard
navigator.clipboard.writeText('Este texto foi copiado!')
  .then(() => {
    console.log('Texto copiado para o clipboard com sucesso!');
  })
  .catch(err => {
    console.error('Erro ao copiar o texto: ', err);
  });


  // Lê o texto do clipboard
navigator.clipboard.readText()
.then(text => {
  console.log('Texto obtido do clipboard: ', text);
})
.catch(err => {
  console.error('Erro ao ler o texto do clipboard: ', err);
});

