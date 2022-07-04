let radios = document.querySelectorAll('input[type="radio"]')
let str = document.querySelector('p')
let button = document.querySelector('#elem')

button.addEventListener('click', function () {
    for (let radio of radios) {
        if (radio.checked) {
            str.innerHTML = radio.value
            break
        }
    }
})