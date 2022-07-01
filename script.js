let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');
let elem4 = document.querySelector('#elem4');
let elem5 = document.querySelector('#elem5');
let button = document.querySelector('#button');
let elem = document.querySelector('#elem');

button.addEventListener('click', function () {
    elem.innerHTML = (Number(elem1.value)+ Number(elem2.value) + Number(elem3.value) + Number(elem4.value) + Number(elem5.value)) / 5;
});