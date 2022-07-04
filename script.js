let elem = document.querySelector('#elem')
let button = document.querySelector('#button')

button.addEventListener('click', func)

function func() {
    let str = ''
    let symbols = '0123456789qwertyuiopasdfghjklzxcvbnm'
    for (let i = 0; i < 8; i++) {
        str += symbols.charAt(Math.floor(Math.random() * symbols.length))
    }
    elem.value = str
}
