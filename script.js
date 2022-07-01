let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let button = document.querySelector('#button');

button.addEventListener('click', function () {
    elem2.innerHTML = elem1.value;
});