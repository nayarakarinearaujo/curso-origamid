
//* Função das imagens
function initTabNav() {
  // Seleciona todos os elementos <li> dentro do contêiner com a classe .js-tabmenu
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  // Seleciona todas as seções <section> dentro do contêiner com a classe .js-tabcontent
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  // Verifica se há itens em tabMenu e tabContent antes de continuar
  if (tabMenu.length && tabContent) {
    // Adiciona a classe "ativo" à primeira seção, tornando-a visível por padrão
    tabContent[0].classList.add("ativo");

    // Função para ativar a aba correspondente ao índice clicado
    function activeTab(index) {
      // Remove a classe "ativo" de todas as seções, ocultando-as
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      // Adiciona a classe "ativo" à seção correspondente ao índice clicado, exibindo-a
      tabContent[index].classList.add("ativo");
    }

    // Adiciona um evento de clique a cada item do menu (li)
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        // Chama a função activeTab passando o índice da aba clicada
        activeTab(index);
      });
    });
  }
}

initTabNav();


// * Função do FAQ
function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";

  if (accordionList.length) {
    // Adiciona a classe 'ativo' ao primeiro item e ao próximo elemento se ele existir
    accordionList[0].classList.add(activeClass);
    const firstDd = accordionList[0].nextElementSibling;
    if (firstDd) {
      firstDd.classList.add(activeClass);
    }

    function activeAccordion() {
      // Alterna a classe 'ativo' apenas se o próximo elemento existir
      this.classList.toggle(activeClass);
      const dd = this.nextElementSibling;
      if (dd) {
        dd.classList.toggle(activeClass);
      }
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

// Chame a função para inicializar o accordion
initAccordion();


//* Scroll Suave

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    //! window.scrollTo

    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth',
    // })

    //! scrollIntoView

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

initScrollSuave();


//* Scroll Animação

const sections = document.querySelectorAll('.js-scroll');

function animaScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop < 0) {
      section.classList.add('ativo');
    }
  })
}

window.addEventListener('scroll', animaScroll);