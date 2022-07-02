let elems = document.querySelectorAll('#elem')
let elem1 = document.querySelector('.elem1')
let button = document.querySelector('#button')

button.addEventListener('click', func)

function func() {
    let sum = 0
    for (let elem of elems) {
        sum += Number(elem.value)
    }
    elem1.innerHTML = sum
}