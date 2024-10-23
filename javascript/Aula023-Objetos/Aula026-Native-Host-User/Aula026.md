
! NATIVE

Objetos nativos são aqueles definidos na especificação
da linguagem e são implementados indenpendente do hots.

Construtores de objetos nativos
-Object
-String
-Array
-Function


! HOST

Objetos do host são aqueles implementador pelo prórpio ambiente.
Por exemplo no browser possuímos objetos do DOM, como DomList, HTMLCollection e outros.
Em Node.js os objetos do Host são diferentes, já que não estamos em um ambiente do Bowser.

Construtores do browser
-NodeList
-HTMLCollection
-Element


! USER
 
Objetos do user, são objetos definidos pelo seu aplicativo. Ou seja, qualquer objeto que vai criar ou que importar de alguma biblioteca externa.

EX:
const Pessoa = {
    nome: 'Nayara';
}


** Browsers diferentes: Apesar de tentares ao máximo manter um padrão, browsers diferentes possuem objetos com prorpiedades e métodos diferentes.

** Versões de browsers: Sempre que o browser é atualizado, novos objetos, métodos e proriedades podem ser implementados.

** Host e Native Objetcs: Por exemplo, browsers que não implementaram o ECMAScript 2015 (ES6), não possuem o método find de Array.

API

Application Programming Interface, é uma interface de software criada para a interação com outros softwares.
Ou seja, toda interação que fazemos com o browser utilizando Objetos, Métodos e Propriedades, estamos na verdade interagindo com a API do browser.

