let elem = document.querySelector('.elem')
let button = document.querySelector('#button')

button.addEventListener('click', func)

function func() {
    elem.style.fontSize = '20px'
    elem.style.borderTop = '2px solid #0000FF'
    elem.style.background = 'yellow'
    
}
