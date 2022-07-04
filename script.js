let select = document.querySelector('#select')
let str = document.querySelector('p')
let button = document.querySelector('#elem')

button.addEventListener('click', function () {
    str.innerHTML = select.value
})