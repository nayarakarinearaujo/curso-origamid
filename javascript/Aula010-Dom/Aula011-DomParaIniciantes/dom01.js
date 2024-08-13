// DOM
window.alert('Isso é um alerta');
alert('Isso é um alerta'); // Funciona também

// Retornar URL
console.log(window.location.href); // Corrigido aqui

const h1Selecionado = document.querySelector('h1'); // Seleciona o primeiro h1 do documento HTML

document.body; // Retorna o body

// Node
const titulo = document.querySelector('h1');

titulo.innerText; // Retorna o texto
titulo.classList; // Retorna as classes
titulo.id; // Retorna o id
titulo.offsetHeight; // Retorna a altura do elemento

titulo.addEventListener('click', test); // Ativa a função test ao click no título

// Exemplo de callback:
function test() {
    console.log('Clicou em ', h1Selecionado.innerText);
}

h1Selecionado.addEventListener('click', test);
