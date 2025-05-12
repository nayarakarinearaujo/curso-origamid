//Importando os módulos das funções
import initScrollSuave from './modules/scroll-suave.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';
import initAccordion from './modules/accordion.js';
import initTabNav from './modules/tabnav.js';
import * as teste from './modules/teste.js';

teste.teste1()
teste.teste2()
console.log(teste.senha);
console.log(teste.esseNome);
console.log(teste.idade); // Isso não funciona, pois a variável idade não é exportada

console.log(this)

initScrollSuave();
initAnimacaoScroll();
initAccordion();
initTabNav();