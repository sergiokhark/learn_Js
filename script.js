let elem = document.querySelector('#elem')
let button = document.querySelector('#button')
let str = document.querySelector('.new')

button.addEventListener('click', function () {
    let num = Number(elem.value)
    let factorial = 1
    for (let i = 1; i <= num; i++) {
        factorial *= i
    }
    str.innerHTML = factorial


})