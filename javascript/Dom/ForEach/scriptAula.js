//! Entendendo forEach

const imgs = document.querySelectorAll('img');


// 1° Forma de usar
imgs.forEach(function (item,) {
    console.log(item);
});


//2° Forma de usar (A mais usada)
imgs.forEach((item) => {
    console.log(item);
});


//3° Forma de fazer
imgs.forEach((item) => console.log(item));

