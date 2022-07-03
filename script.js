let elems = document.querySelectorAll('a')
let button = document.querySelector('#button')

button.addEventListener('click', func)

function func() {
    for (let elem of elems) {
        elem.innerHTML += '(' + elem.href + ')'
    }
}
    