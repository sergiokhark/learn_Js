let elem = document.querySelector('#elem')
let button = document.querySelector('#button')

button.addEventListener('click', func)

function func() {
    if (elem.value.split('').reverse().join('') == elem.value) {
        alert('Читается одинаково')
    } else {
        alert('Читается не одинаково')
    }
    
}
    