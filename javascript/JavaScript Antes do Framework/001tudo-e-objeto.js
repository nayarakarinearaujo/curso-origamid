
// Objeto Literal
const menu = {
    selector: ".principal",
    active() {
      const menuElement = document.querySelector(this.selector);
      menuElement.classList.add("active");
    }
  };
  
  menu.selector; // ".principal";
  menu.active(); // adicionar active ao menu
  menu.hasOwnProperty("class"); // método herdado