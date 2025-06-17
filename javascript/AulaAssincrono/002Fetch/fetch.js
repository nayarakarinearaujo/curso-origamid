/*
* FETCH API
Permite fazer requisições HTTP através do método fetch().
Este método retorna a resolução de uma Promise. Podemos então
ultilizar o then para interagirmos com a resposta, que é um objeto do tipo Response.
*/

//? EXEMPLO TXT
// fetch("./doc.txt")
//   .then((res) => res.text()) // converte o corpo da resposta para texto
//   .then((body) => {
//     console.log(body); // exibe o conteúdo do arquivo .txt
//   });

// Faz uma requisição para buscar o arquivo doc.txt que está no mesmo diretório
const doc = fetch("./doc.txt");

// Lida com a promessa (Promise) retornada pelo fetch
doc
  .then(
    // A resposta do fetch (resolucao) precisa ser convertida em texto
    // Isso também retorna uma nova Promise
    (response) => response.text()
  )
  .then((body) => {
    // Quando o conteúdo do arquivo for carregado como texto,
    // seleciona o elemento com a classe "conteudo"
    const conteudo = document.querySelector(".conteudo");

    // Insere o conteúdo do arquivo dentro do elemento selecionado
    conteudo.innerText = body;
  });

//! JSON

fetch("https://viacep.com.br/ws/13069027/json/")
  .then((response) => response.json()) // converte o corpo da resposta para texto
  .then((body) => {
    const conteudo = document.querySelector(".conteudo2");
    conteudo.innerText = `CEP: ${body.cep}`;
  });

//! CSS

fetch("./style.css")
  .then((response) => response.text())
  .then((body) => {
    const style = document.createElement("style");
    style.innerHTML = body;

    // Aqui você adiciona o <style> ao <head>, para aplicar o CSS à página
    document.head.appendChild(style);
  });

// ! Arquivo HTML

fetch("./sobre.html")
  .then((response) => response.text())
  .then((body) => {
    const div = document.createElement("div");
    div.innerHTML = body;
    document.body.appendChild(div); // para exibir na página
  });

//! BLOB: pegando imagem

fetch("./email.jpg")
  .then((response) => response.blob())
  .then((body) => {
    const blobUrl = URL.createObjectURL(body);
    const imagem = document.querySelector("img");
    imagem.src = blobUrl;
  });

//! CLONE

fetch("https://viacep.com.br/ws/13069027/json/").then((response) => {
  const clone = response.clone(); // faz uma cópia da resposta

  // Um usa .text()
  response.text().then((text) => {
    // console.log("Texto:", text);
  });

  // Outro usa .json()
  clone.json().then((json) => {
    // console.log("JSON:", json);
  });
});

//! HEADERS

fetch("https://viacep.com.br/ws/13069027/json/").then((response) => {
  console.log(response);
  response.headers.forEach(console.log);
});

// ! STATUS

fetch("./docs.txt").then((response) => {
  //Buscando status
  console.log(response.status);

  //Buscando url
  console.log(response.url);
  
  if (response.status === 404) {
    console.log(" Página não existe");
  }
});
