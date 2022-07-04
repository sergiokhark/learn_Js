let elem = document.querySelector('#elem')
let button = document.querySelector('#button')

button.addEventListener('click', function () {
    if (elem.checked) {
        elem.checked = false
    } else {
        elem.checked = true
    }
})
