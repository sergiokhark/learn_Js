let elem1 = document.querySelector('#elem1');
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');

button1.addEventListener('click', function () {
    elem1.innerHTML = 'Привет';
});

button2.addEventListener('click', function () {
    elem1.innerHTML = 'Пока';
});
