let link = document.querySelector('#elem1');
let button = document.querySelector('#button');
let elem = document.querySelector('#elem2');

button.addEventListener('click', function () {
    elem.innerHTML = link.href;
})