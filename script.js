let elem = document.querySelector('#elem')

elem.addEventListener('click', function (event) {
    if (event.target.tagName == 'LI') {
        event.target.innerHTML += '!'
    }

    if (event.target.tagName == 'UL') {
        event.target.innerHTML += '<li>text</li>'
    }
    
})