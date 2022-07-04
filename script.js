let elem = document.querySelector('#elem')
let button1 = document.querySelector('#button1')
let button2 = document.querySelector('#button2')

button1.addEventListener('click', function () {
    elem.disabled = true

})

button2.addEventListener('click', function () {
    elem.disabled = false

})