"use strict";
//* Types E Interfaces 1
// Função que recebe um Produto e exibe seus dados na tela
function preencherDados(dados) {
    document.body.innerHTML += `
    <div>
        <h2>${dados.nome}</h2> <!-- Mostra o nome do produto -->
        <p>R$ ${dados.preco}</p> <!-- Mostra o preço -->
        <p>Inclui teclado:  ${dados.teclado ? "sim" : "não"}</p> <!-- Mostra se tem teclado -->
    </div>
    `;
}
// Criando um produto usando const e atribuindo o tipo Produto
const computador = {
    nome: "Computador",
    preco: 2500,
    teclado: true,
};
// Chamando a função passando o produto criado
preencherDados(computador);
// Chamando a função passando os dados diretamente (sem criar uma variável antes)
preencherDados({
    nome: "Smartphone",
    preco: 3000,
    teclado: false,
});
// Outro exemplo com um notebook que não tem teclado externo
preencherDados({
    nome: "Notebook",
    preco: 3500,
    teclado: false,
});
// Função que recebe uma categoria do tipo Categorias
function PintarCategoria(categoria) {
    console.log(categoria); // Imprime a categoria recebida
    // Se a categoria for "design", imprime uma mensagem
    if (categoria === "design") {
        console.log("Pintar com vermelho");
    }
}
// Chamando a função com categorias válidas
PintarCategoria("codigo"); // imprime "codigo"
PintarCategoria("design"); // imprime "design" e "Pintar com vermelho"
