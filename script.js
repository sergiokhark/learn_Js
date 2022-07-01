let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    alert(Number(elem1.innerHTML) + Number(elem2.innerHTML));
});