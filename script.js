let link = document.querySelector('#elem1');
let button = document.querySelector('#button');

button.addEventListener('click', function () {
    link.innerHTML = link.innerHTML + '(' + link.href + ')';
})