let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');

elem1.addEventListener('click', function () {
    elem1.innerHTML = 1;
});

elem2.addEventListener('click', function () {
    elem2.innerHTML = 2;
});

elem3.addEventListener('click', function () {
    elem3.innerHTML = 3;
});
