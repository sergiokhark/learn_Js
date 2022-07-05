let elem = document.querySelector('#elem');

elem.addEventListener('click', func);
elem.addEventListener('dblclick', func);

function func(event) {
    if (event.type == 'click') {
        elem.classList.add('colgreen')
    }

    if (event.type == 'dblclick') {
        elem.classList.add('colred')
    }
}