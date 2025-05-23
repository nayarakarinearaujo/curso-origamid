//* Null - Undefined

//? null => significa ausência de valor intencional.
//? undefined => significa que a variável foi declarada, mas não tem valor atribuído.

// Exemplo prático:

// Tenta selecionar um botão no HTML
const button1 = document.querySelector("button");

// Busca uma informação no localStorage
const config = localStorage.getItem("config");

//* Verifica se o botão existe antes de executar o método .click()
// O ?. é chamado de operador de encadeamento opcional (optional chaining)

// ✅ Funciona como uma proteção para evitar erro de:
// "Cannot read properties of null" ou "undefined"
button1?.click();

//* Propriedades Opcionais

// ✅ Podemos definir propriedades opcionais nas interfaces usando o símbolo ? após o nome da propriedade.
// Exemplo: nome?: string
// Isso significa que a propriedade pode existir ou não.
// Se não existir, o valor dela será undefined.

// Definindo a interface com a propriedade opcional 'nome'
interface Products {
  nome?: string; // <- pode ser uma string OU undefined
}

// Criando um objeto SEM a propriedade 'nome'
const livro: Products = {};

// Criando um objeto COM a propriedade 'nome'
const jogo: Products = {
  nome: "Ragnarok",
};

// 🔍 Aqui é usado o operador ?. (encadeamento opcional) para verificar:
// Se 'nome' existir, executa .toLowerCase() (transforma em minúsculo)
// Se 'nome' não existir, retorna undefined sem dar erro
console.log(jogo.nome?.toLowerCase()); 
// Saída: "ragnarok" (porque o nome existe)

console.log(livro.nome?.toLowerCase()); 
// Saída: undefined (porque o nome não existe no objeto livro)
// Sem erro! Se não usar o ?. daria erro ao tentar executar .toLowerCase() em undefined
