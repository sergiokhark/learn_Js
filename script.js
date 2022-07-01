let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let button = document.querySelector('#button');

button.addEventListener('click', function () {
    let box = elem1.value;
    elem1.value = elem2.value;
    elem2.value = box;

});