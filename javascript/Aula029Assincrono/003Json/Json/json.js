//* JSON

fetch("./dados.json")
  .then((response) => response.json())
  .then((json) => {
    json.forEach((materia) => {
      console.log(materia.aula);
    });
  });
