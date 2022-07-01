let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let button = document.querySelector('#button');

button.addEventListener('click', function () {
    elem2.value = elem1.value ** 2;
});