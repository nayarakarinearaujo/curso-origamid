const tabMenu = document.querySelectorAll(".js-tabmenu li");
const tabContent = document.querySelectorAll(".js-tabcontent section");

//Loop para cada section acrescentando o ativo
function activeTab(index) {
  tabContent.forEach((section) => {
    section.classList.remove("ativo");
  });
  tabContent[index].classList.add("ativo");
}

//Loop por cada li
tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
        activeTab(index);
    })
});