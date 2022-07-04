let elem = document.querySelector('#elem')
let button = document.querySelector('#button')

button.addEventListener('click', function () {
    if (elem.disabled) {
        alert('Input locked')
    } else {
        alert('Input unlocked')
    }

})