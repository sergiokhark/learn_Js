let elem1 = document.querySelector('#elem1');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    elem1.innerHTML = '<b>' + elem1.innerHTML + '</b>';
})

