let elem = document.querySelector('#elem')
let str = document.querySelector('.new')

elem.addEventListener('keyup', func)

function func() {
    str.innerHTML = (elem.value - 32) * (5 / 9)
}
