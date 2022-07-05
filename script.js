let elem = document.querySelector('#elem');

elem.addEventListener('click', function (event) {
    if (event.target.tagName == 'LI' && event.ctrlKey) {
        event.target.innerHTML += 1
    }

    if (event.target.tagName == 'LI' && event.shiftKey) {
        event.target.innerHTML += 2
    }

})