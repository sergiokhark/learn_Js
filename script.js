let picture = document.querySelector('#picture');
let button = document.querySelector('#button');
let elem = document.querySelector('#elem');

button.addEventListener('click', function () {
    elem.innerHTML = picture.src;
})

