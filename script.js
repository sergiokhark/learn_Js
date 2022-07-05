let elem = document.querySelector('#elem');

elem.addEventListener('click', function (event) {
    if (event.altKey) {
        elem.classList.add('colred')
    }

})