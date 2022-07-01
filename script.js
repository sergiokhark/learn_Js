let elem1 = document.querySelector('#elem1');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    elem1.innerHTML = '!' + elem1.innerHTML;
})

