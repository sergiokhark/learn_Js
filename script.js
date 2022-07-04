let elem = document.querySelector('#elem')
let button1 = document.querySelector('#button1')
let button2 = document.querySelector('#button2')

button1.addEventListener('click', function () {
    elem.value = Number(elem.value) + 1
})

button2.addEventListener('click', function () {
    if (elem.value != 0) {
        elem.value = Number(elem.value) - 1
    }  
})