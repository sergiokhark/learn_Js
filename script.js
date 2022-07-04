let elem = document.querySelector('#elem')
let button = document.querySelector('#button')
let str = document.querySelector('p')

button.addEventListener('click', function () {
    if (elem.checked) {
        str.innerHTML = 'Привет'
    } else {
        str.innerHTML = 'Пока'
    }
})
