let elem = document.querySelector('.elem')
let button = document.querySelector('#button')

button.addEventListener('click', func)

function func() {
    elem.style.width = '250px'
    elem.style.height = '150px'
    elem.style.border = 'solid 2px black'
}
