// const promesa = new Promise((resolve, reject) => {
//   let condicao = true;
//   if (condicao) {
//     setTimeout(() => {
//       resolve({ nome: "Andre", idade: 28 });
//     }, 1000);
//   } else {
//     reject(Error("Um erro ocorreu na promise"));
//   }
// });

// const retorno = promesa
//   .then((resolucao) => {
//     console.log("Primeiro then:", resolucao);
//     resolucao.profissao = "Designer";
//     return resolucao;
//   })
//   .then((resolucao) => {
//     console.log("Segundo then:", resolucao);
//   })
//   .finally(() => {
//     //Sempre é executado
//     console.log("Finalizou (sucesso ou erro)");
//   })
//   //Executado caso der erro
//   .catch((rejeitado) => {
//     console.log("Erro capturado no catch:", rejeitado.message);
//   });

// console.log("Retorno imediato da promise:", retorno);

const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Usuário Logado");
  }, 1000);
});

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Dados Carregados");
  }, 1500);
});

const carregouTudo = Promise.all([login, dados]);

carregouTudo.then((resolucao) => {
  console.log(resolucao);
});
console.log(carregouTudo);
