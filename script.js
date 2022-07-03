let elem = document.querySelector('#elem')
let button = document.querySelector('#button')
button.addEventListener('click', func)

function func() {
    elem.value = elem.getAttribute('value')

}