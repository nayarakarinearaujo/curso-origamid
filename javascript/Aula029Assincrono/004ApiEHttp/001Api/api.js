//* API

// fetch('https://pokeapi.co/api/v2/pokemon/1/')
// .then(r => r.json())
// .then(pokemon => {
//  console.log(pokemon);
// });

const url = "https://jsonplaceholder.typicode.com/posts";
const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: JSON.stringify({ aula: "JavaScript" }),
};

fetch(url, options)
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
  });
