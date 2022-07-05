let elem = document.querySelector('#elem')
let str = document.querySelector('p')

elem.addEventListener('keydown', function (event) {
    if (event.code == 'Enter') {
        str.innerHTML = elem.value
        elem.value = ''
    }
})